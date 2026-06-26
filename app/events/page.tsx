import { CalendarDays, Clock, Mic2, Users } from 'lucide-react';
import { RoomHeader } from '@/components/room-header';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { campusEvents } from '@/lib/campus-data';

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <RoomHeader
        eyebrow="Events Hall"
        title="Live campus events"
        description="Workshops, office hours, critiques, and cohort moments in one place. The MVP uses sample data with a layout ready for database-backed schedules."
        status="Next event soon"
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <section className="space-y-5">
          {campusEvents.map((event) => (
            <Card key={event.title}>
              <CardHeader>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <Badge>{event.type}</Badge>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    {event.attendees} attending
                  </div>
                </div>
                <CardTitle>{event.title}</CardTitle>
                <CardDescription>Hosted by {event.host}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 rounded-2xl bg-secondary/60 p-4 text-sm md:grid-cols-2">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-primary" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    {event.time}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        <aside className="space-y-5">
          <Card>
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                <Mic2 className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Event modes</CardTitle>
              <CardDescription>
                The hall can later support RSVPs, live streams, and room chat.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {['Workshop', 'Office hours', 'Demo day', 'Cohort kickoff'].map(
                (mode) => (
                  <div
                    key={mode}
                    className="rounded-2xl border bg-background p-4 text-sm font-medium"
                  >
                    {mode}
                  </div>
                )
              )}
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
