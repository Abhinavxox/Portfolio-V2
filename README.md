# Portfolio V2 - Next.js Portfolio Website

A modern, responsive portfolio website built with Next.js 14, React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern UI with dark theme and gradient accents
- 📱 Fully responsive design
- ⚡ Fast performance with Next.js App Router
- 🎭 Smooth animations with Framer Motion
- 🎯 Multiple pages: About, Resume, Portfolio, Blog, Contact
- 🔧 TypeScript for type safety
- 💅 Tailwind CSS for styling

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Ionicons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home/About page
│   ├── resume/            # Resume page
│   ├── portfolio/         # Portfolio page
│   ├── blog/              # Blog page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Sidebar.tsx        # Sidebar component
│   ├── Navbar.tsx         # Navigation component
│   └── pages/             # Page components
├── lib/                   # Utilities and data
│   └── data.ts            # Portfolio data
├── public/                # Static assets
│   └── assets/            # Images, icons, etc.
└── package.json           # Dependencies
```

## Customization

Edit `lib/data.ts` to update your personal information, projects, skills, and other content.

## License

MIT

