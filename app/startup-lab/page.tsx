import { Lightbulb, Rocket, UsersRound } from 'lucide-react';
import { RoomHeader } from '@/components/room-header';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { startupProjects } from '@/lib/campus-data';

export default function StartupLabPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <RoomHeader
        eyebrow="Startup Lab"
        title="Build in public"
        description="A project board for campus founders. Share MVPs, find collaborators, and move from idea to demo with tight feedback loops."
        status="12 projects building"
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <section className="grid gap-5">
          {startupProjects.map((project) => (
            <Card key={project.name}>
              <CardHeader>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <Badge variant="success">{project.stage}</Badge>
                  <span className="text-sm text-muted-foreground">
                    Founder: {project.founder}
                  </span>
                </div>
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.summary}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <Badge key={item} variant="secondary">
                      {item}
                    </Badge>
                  ))}
                </div>
                <div className="rounded-2xl bg-secondary/60 p-4 text-sm">
                  <span className="font-medium">Looking for: </span>
                  <span className="text-muted-foreground">
                    {project.lookingFor}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        <aside className="space-y-5">
          <Card>
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                <Rocket className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Lab loop</CardTitle>
              <CardDescription>
                Scope, demo, recruit, and iterate inside the campus.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {['Problem', 'Prototype', 'Feedback', 'Launch'].map((step) => (
                <div
                  key={step}
                  className="rounded-2xl border bg-background p-4 text-sm font-medium"
                >
                  {step}
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardContent className="grid gap-4 p-6">
              <div className="flex items-center gap-3">
                <Lightbulb className="h-5 w-5 text-primary" />
                <span className="font-medium">3 ideas validating today</span>
              </div>
              <div className="flex items-center gap-3">
                <UsersRound className="h-5 w-5 text-primary" />
                <span className="font-medium">8 collaborator requests</span>
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
