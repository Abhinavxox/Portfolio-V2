// Hashnode API Service
// Fetches blog posts from Hashnode using GraphQL API

export interface HashnodePost {
  title: string;
  brief?: string;
  slug: string;
  coverImage?: {
    url: string;
  };
  tags: Array<{
    name: string;
  }>;
  publishedAt: string;
  readTimeInMinutes: number;
  url: string;
  contentMarkdown?: string;
  content?: {
    markdown?: string;
    html?: string;
  };
  seo?: {
    description?: string;
  };
}

export interface HashnodeResponse {
  publication: {
    posts: {
      edges: Array<{
        node: HashnodePost;
      }>;
      pageInfo: {
        hasNextPage: boolean;
        endCursor: string;
      };
    };
  };
}

const HASHNODE_API_URL = "https://gql.hashnode.com";
const HASHNODE_USERNAME = "MeroNaamAbhinav";

const GET_USER_PUBLICATION_QUERY = `
  query GetUserPublication($username: String!) {
    user(username: $username) {
      publication {
        domainInfo {
          host
        }
      }
    }
  }
`;

const GET_PUBLICATION_POSTS_QUERY = `
  query GetPublicationPosts($host: String!, $first: Int!, $after: String) {
    publication(host: $host) {
      posts(first: $first, after: $after) {
        edges {
          node {
            title
            brief
            slug
            coverImage {
              url
            }
            tags {
              name
            }
            publishedAt
            readTimeInMinutes
            url
            content {
              markdown
              html
            }
            seo {
              description
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`;

const GET_SINGLE_POST_QUERY = `
  query GetSinglePost($host: String!, $slug: String!) {
    publication(host: $host) {
      post(slug: $slug) {
        title
        brief
        slug
        coverImage {
          url
        }
        tags {
          name
        }
        publishedAt
        readTimeInMinutes
        url
        content {
          markdown
          html
        }
        seo {
          description
        }
      }
    }
  }
`;

async function getPublicationHost(): Promise<string | null> {
  try {
    const requestBody = {
      query: GET_USER_PUBLICATION_QUERY,
      variables: { username: HASHNODE_USERNAME },
    };

    const response = await fetch(HASHNODE_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
      next: { revalidate: 86400 }, // Cache for 24 hours
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error fetching publication host:", errorText);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    if (result.errors) {
      console.error("GraphQL errors:", result.errors);
      return null;
    }

    const host = result.data?.user?.publication?.domainInfo?.host;
    return host || null;
  } catch (error) {
    console.error("Error fetching publication host:", error);
    return null;
  }
}

async function fetchPostsFromHost(
  host: string,
  first: number = 20,
  after?: string
): Promise<HashnodePost[]> {
  const variables: {
    host: string;
    first: number;
    after?: string;
  } = {
    host,
    first,
  };

  if (after) {
    variables.after = after;
  }

  const requestBody = {
    query: GET_PUBLICATION_POSTS_QUERY,
    variables,
  };

  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  const response = await fetch(HASHNODE_API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify(requestBody),
    next: { revalidate: 3600 }, // Revalidate every hour
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Error fetching posts:", errorText);
    throw new Error(
      `HTTP error! status: ${response.status}, response: ${errorText}`
    );
  }

  const result = await response.json();

  // Check for GraphQL errors
  if (result.errors) {
    console.error("GraphQL errors:", result.errors);
    throw new Error(`GraphQL errors: ${JSON.stringify(result.errors)}`);
  }

  const data: { data: HashnodeResponse } = result;

  if (!data.data?.publication?.posts) {
    throw new Error("No posts found or invalid response structure");
  }

  const posts = data.data.publication.posts.edges.map((edge) => {
    const node = edge.node;
    // Use SEO description as fallback for brief
    if (!node.brief && node.seo?.description) {
      node.brief = node.seo.description;
    }
    // Extract content markdown if available
    if (node.content?.markdown) {
      node.contentMarkdown = node.content.markdown;
    }
    return node;
  });

  // If there are more posts, fetch them recursively
  if (data.data.publication.posts.pageInfo.hasNextPage) {
    const nextPosts = await fetchPostsFromHost(
      host,
      first,
      data.data.publication.posts.pageInfo.endCursor
    );
    return [...posts, ...nextPosts];
  }

  return posts;
}

export async function fetchHashnodePosts(
  first: number = 20,
  after?: string
): Promise<HashnodePost[]> {
  try {
    // First, get the actual publication host
    const host = await getPublicationHost();

    if (!host) {
      // Fallback: try common host formats
      const possibleHosts = [
        "meronaamabhinav.hashnode.dev",
        "MeroNaamAbhinav.hashnode.dev",
      ];

      for (const fallbackHost of possibleHosts) {
        try {
          const posts = await fetchPostsFromHost(fallbackHost, first, after);
          if (posts.length > 0 || after) {
            return posts;
          }
        } catch (error) {
          console.warn(`Failed to fetch from ${fallbackHost}:`, error);
          continue;
        }
      }

      throw new Error("Could not determine publication host");
    }

    // Use the actual host to fetch posts
    return await fetchPostsFromHost(host, first, after);
  } catch (error) {
    console.error("Error fetching Hashnode posts:", error);
    return [];
  }
}

// Fetch a single post by slug
export async function fetchHashnodePostBySlug(
  slug: string
): Promise<HashnodePost | null> {
  try {
    const host = await getPublicationHost();

    if (!host) {
      // Try fallback hosts
      const possibleHosts = [
        "meronaamabhinav.hashnode.dev",
        "MeroNaamAbhinav.hashnode.dev",
      ];

      for (const fallbackHost of possibleHosts) {
        try {
          const post = await fetchSinglePostFromHost(fallbackHost, slug);
          if (post) return post;
        } catch (error) {
          continue;
        }
      }
      return null;
    }

    return await fetchSinglePostFromHost(host, slug);
  } catch (error) {
    console.error("Error fetching Hashnode post:", error);
    return null;
  }
}

async function fetchSinglePostFromHost(
  host: string,
  slug: string
): Promise<HashnodePost | null> {
  const requestBody = {
    query: GET_SINGLE_POST_QUERY,
    variables: { host, slug },
  };

  const response = await fetch(HASHNODE_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Error fetching post:", errorText);
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const result = await response.json();

  if (result.errors) {
    console.error("GraphQL errors:", result.errors);
    return null;
  }

  const post = result.data?.publication?.post;

  if (!post) {
    return null;
  }

  // Extract content markdown if available
  if (post.content?.markdown) {
    post.contentMarkdown = post.content.markdown;
  }

  return post;
}

// Format date helper
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
