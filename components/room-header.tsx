import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

type RoomHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  status?: string;
};

export function RoomHeader({
  eyebrow,
  title,
  description,
  status,
}: RoomHeaderProps) {
  return (
    <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
      <div>
        <Link
          href="/"
          className="mb-5 inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Campus map
        </Link>
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Badge variant="outline">{eyebrow}</Badge>
          {status ? <Badge variant="success">{status}</Badge> : null}
        </div>
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}
