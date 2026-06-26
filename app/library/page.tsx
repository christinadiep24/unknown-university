import { BookOpen, Clock, FileText, TrendingUp } from 'lucide-react';
import { RoomHeader } from '@/components/room-header';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { libraryCourses, libraryResources } from '@/lib/campus-data';

export default function LibraryPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <RoomHeader
        eyebrow="Library"
        title="Courses and resources"
        description="A focused knowledge base for campus learners. Track course progress, jump into practical guides, and save resources for your next build."
        status="Quiet study"
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
        <section className="space-y-5">
          {libraryCourses.map((course) => (
            <Card key={course.title}>
              <CardHeader>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <Badge>{course.category}</Badge>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </div>
                </div>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>{course.summary}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-3 flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{course.level}</span>
                  <span className="font-medium">{course.progress}% complete</span>
                </div>
                <div className="h-2 rounded-full bg-secondary">
                  <div
                    className="h-2 rounded-full bg-primary"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        <aside className="space-y-5">
          <Card>
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Recommended path</CardTitle>
              <CardDescription>
                Start with realtime fundamentals, then use the AI room to turn
                notes into a build plan.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Resources</CardTitle>
              <CardDescription>Notion-style references for campus work.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {libraryResources.map((resource) => (
                <div
                  key={resource.title}
                  className="rounded-2xl border bg-background p-4"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <FileText className="h-4 w-4 text-primary" />
                    <p className="font-medium">{resource.title}</p>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{resource.type}</span>
                    <span>{resource.reads}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="font-semibold">18 learners active</p>
                <p className="text-sm text-muted-foreground">
                  Presence will show live study groups as the campus grows.
                </p>
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
