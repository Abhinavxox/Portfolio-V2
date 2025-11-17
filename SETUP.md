# Setup Instructions

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
Portfolio-V2/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Home/About page
│   ├── resume/            # Resume page
│   ├── portfolio/         # Portfolio page
│   ├── blog/              # Blog page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Layout.tsx         # Shared layout wrapper
│   ├── Sidebar.tsx        # Sidebar component
│   ├── Navbar.tsx         # Navigation component
│   └── pages/             # Page-specific components
├── lib/                   # Utilities
│   └── data.ts            # Portfolio data (edit this!)
├── public/                # Static assets
│   └── assets/            # Images, icons, etc.
└── package.json           # Dependencies
```

## Customization

### Update Your Information

Edit `lib/data.ts` to update:
- Personal information (name, email, phone, etc.)
- About section content
- Services/What I'm doing
- Publications
- Achievements
- Education
- Experience
- Skills
- Projects
- Blog posts

### Styling

The project uses Tailwind CSS. Customize colors and themes in:
- `tailwind.config.ts` - Theme configuration
- `app/globals.css` - Global styles and custom utilities

### Adding New Pages

1. Create a new folder in `app/` (e.g., `app/new-page/`)
2. Add `page.tsx` with:
   ```tsx
   import Layout from "@/components/Layout";
   import NewPageComponent from "@/components/pages/NewPageComponent";

   export default function NewPage() {
     return (
       <Layout>
         <NewPageComponent />
       </Layout>
     );
   }
   ```
3. Create the component in `components/pages/NewPageComponent.tsx`
4. Add the route to `components/Navbar.tsx`

## Build & Deploy

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel
1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Deploy to Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Features

✅ **Responsive Design** - Works on all devices
✅ **Dark Theme** - Modern dark UI with gradient accents
✅ **Smooth Animations** - Framer Motion animations
✅ **TypeScript** - Type-safe code
✅ **SEO Optimized** - Next.js built-in SEO
✅ **Fast Performance** - Optimized images and code splitting
✅ **Mobile Menu** - Hamburger menu for mobile devices

## Troubleshooting

### Images not loading?
- Make sure images are in `public/assets/images/`
- Check image paths in `lib/data.ts`

### Styling issues?
- Run `npm run dev` to see Tailwind compile
- Check `tailwind.config.ts` for correct content paths

### Build errors?
- Make sure all dependencies are installed: `npm install`
- Check TypeScript errors: `npm run build`

