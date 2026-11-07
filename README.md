# Portfolio Project

This repository contains a Next.js portfolio and admin dashboard starter for a personal brand site.

## Features
- Arabic and English routes
- Modern landing page
- Admin dashboard layout
- Prisma schema for portfolio content
- Contact API with validation
- Tailwind CSS and app-router project foundation

## Setup
1. Copy `.env.example` to `.env.local` and fill in secrets.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run Prisma generate:
   ```bash
   npx prisma generate
   ```
4. Start the dev server:
   ```bash
   npm run dev
   ```
5. Open `http://localhost:3000/en`

## Deployment
- Deploy to Vercel
- Add environment variables from `.env.example`
- Use Neon/Supabase PostgreSQL database
- Configure Google OAuth and Resend

## Notes
This starter uses demo content and a production-ready foundation. Replace sample content with your real name, projects, and media as needed.
