import { BadgeCheck, ExternalLink, MapPin, Trophy } from 'lucide-react';
import { RoomHeader } from '@/components/room-header';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { profilePortfolio } from '@/lib/campus-data';

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <RoomHeader
        eyebrow="Profile Space"
        title="Identity and portfolio"
        description="A personal campus space for progress, projects, links, and proof of work. Supabase profiles can later replace this sample portfolio."
        status="Portfolio ready"
      />

      <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
        <Card>
          <CardHeader className="items-center text-center">
            <div className="flex h-28 w-28 items-center justify-center rounded-[2rem] bg-gradient-to-br from-blue-500 to-cyan-400 text-4xl font-bold text-white shadow-xl shadow-blue-500/20">
              {profilePortfolio.name
                .split(' ')
                .map((part) => part[0])
                .join('')}
            </div>
            <div>
              <CardTitle>{profilePortfolio.name}</CardTitle>
              <CardDescription>{profilePortfolio.role}</CardDescription>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              {profilePortfolio.location}
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-sm leading-6 text-muted-foreground">
              {profilePortfolio.bio}
            </p>
            <div className="grid grid-cols-3 gap-3">
              {profilePortfolio.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-secondary/60 p-4 text-center"
                >
                  <p className="text-2xl font-semibold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Portfolio projects</CardTitle>
              <CardDescription>
                Proof-of-work cards that can link back to rooms and coursework.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3 md:grid-cols-3">
              {profilePortfolio.projects.map((project) => (
                <div
                  key={project}
                  className="rounded-2xl border bg-background p-5"
                >
                  <BadgeCheck className="mb-4 h-5 w-5 text-primary" />
                  <p className="font-medium">{project}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Campus badges</CardTitle>
                <CardDescription>Achievements earned across rooms.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {profilePortfolio.badges.map((badge) => (
                  <Badge key={badge} variant="success">
                    <Trophy className="mr-1 h-3 w-3" />
                    {badge}
                  </Badge>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Links</CardTitle>
                <CardDescription>Portfolio and social proof.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {profilePortfolio.links.map((link) => (
                  <div
                    key={link}
                    className="flex items-center justify-between rounded-2xl border bg-background p-4 text-sm"
                  >
                    <span>{link}</span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
