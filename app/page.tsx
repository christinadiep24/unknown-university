import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  Bot,
  CalendarDays,
  FlaskConical,
  Sparkles,
  UserCircle,
  Users,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { campusRooms } from '@/lib/campus-data';

const roomIcons = {
  Library: BookOpen,
  'AI Room': Bot,
  'Social Hub': Users,
  'Startup Lab': FlaskConical,
  'Events Hall': CalendarDays,
  'Profile Space': UserCircle,
};

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-10 md:py-16">
      <section className="mb-12 overflow-hidden rounded-[2rem] border bg-card p-6 shadow-sm md:p-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Badge className="mb-5" variant="success">
              <Sparkles className="mr-1 h-3 w-3" />
              2D campus MVP
            </Badge>
            <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
              Unknown Metaverse is your online campus.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Move between rooms for courses, AI help, realtime community,
              startup projects, events, and your portfolio. It is Notion-clean,
              Discord-live, and Coursera-practical without 3D complexity yet.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/social"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              >
                Enter campus <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/library"
                className="inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-medium transition hover:bg-secondary"
              >
                Browse Library
              </Link>
            </div>
          </div>
          <div className="rounded-[1.5rem] border bg-background/70 p-4">
            <div className="grid grid-cols-2 gap-3">
              {campusRooms.slice(0, 4).map((room) => (
                <div
                  key={room.href}
                  className="rounded-2xl border bg-card p-4 shadow-sm"
                >
                  <div
                    className={`mb-4 h-2 rounded-full bg-gradient-to-r ${room.accent}`}
                  />
                  <p className="text-sm font-medium">{room.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {room.activity}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <Badge variant="outline">Campus map</Badge>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Choose a room
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-muted-foreground">
            Every room is a regular Next.js route today, designed so richer 2D
            movement and spatial interactions can be layered on later.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {campusRooms.map((room) => {
            const Icon = roomIcons[room.name as keyof typeof roomIcons];

            return (
              <Link key={room.href} href={room.href} className="group">
                <Card className="h-full overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
                  <div className={`h-2 bg-gradient-to-r ${room.accent}`} />
                  <CardHeader>
                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="secondary">{room.status}</Badge>
                    </div>
                    <CardTitle>{room.name}</CardTitle>
                    <CardDescription>{room.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between rounded-2xl bg-secondary/60 p-4 text-sm">
                      <span className="text-muted-foreground">
                        {room.activity}
                      </span>
                      <span className="font-medium">{room.members} members</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
