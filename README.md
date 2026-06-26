# Unknown University - Online Learning Platform

A modern online learning platform built with Next.js 15, TypeScript, Tailwind CSS, and Supabase.

## Features

- 🎓 Programs → Courses → Lessons structure
- 👥 Student dashboard with progress tracking
- 🎥 Rich lesson content (video, summary, AI tutor chat, quizzes)
- 📝 Assignment submission system
- 💬 Community feed for student interactions
- 🔐 Authentication with Supabase
- 🌙 Dark mode support
- 📱 Fully responsive design

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database & Auth**: Supabase
- **UI Components**: shadcn/ui (custom implementation)
- **Charts**: Recharts
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/christinadiep24/unknown-university.git
cd unknown-university
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
# Add your Supabase credentials
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
app/
├── (auth)/          # Auth pages (login, register)
├── dashboard/       # Student dashboard
├── programs/        # Programs listing
├── courses/         # Course details
├── lessons/         # Lesson page
├── assignments/     # Assignments
├── community/       # Community feed
├── profile/         # User profile
└── page.tsx         # Landing page

components/
├── ui/              # UI components
├── layout/          # Layout components
└── sections/        # Page sections

lib/
├── supabase.ts      # Supabase client
├── sample-data.ts   # Sample data
└── utils.ts         # Utilities

styles/
└── globals.css      # Global styles
```

## Database Schema

See `lib/sample-data.ts` for the data structure. When using Supabase, create tables for:
- users
- programs
- courses
- lessons
- assignments
- community_posts
- progress_tracking

## License

MIT
