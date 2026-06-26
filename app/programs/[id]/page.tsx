import Link from 'next/link';
import { courses, programs } from '@/lib/sample-data';
import { ArrowRight, Play } from 'lucide-react';

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const program = programs.find((p) => p.id === id);
  const programCourses = courses.filter((c) => c.programId === id);

  if (!program) {
    return <div className="text-center py-20">Program not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">{program.name}</h1>
        <p className="text-xl text-muted-foreground mb-6">
          {program.description}
        </p>

        <div className="flex gap-4 flex-wrap">
          <Link
            href="/register"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-medium inline-flex items-center gap-2"
          >
            Enroll Now <ArrowRight className="w-4 h-4" />
          </Link>
          <button className="px-6 py-3 border rounded-lg hover:bg-secondary transition font-medium inline-flex items-center gap-2">
            <Play className="w-4 h-4" /> Preview
          </button>
        </div>
      </div>

      {/* Courses */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Courses in this Program</h2>
        <div className="space-y-4">
          {programCourses.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.id}`}
              className="block p-6 border rounded-lg hover:border-primary transition hover:bg-secondary/50"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{course.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {course.description}
                  </p>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <span>{course.lessons} lessons</span>
                    <span>-</span>
                    <span>{course.duration}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">
                    {course.progress}%
                  </div>
                  <p className="text-xs text-muted-foreground">Progress</p>
                </div>
              </div>
              {/* Progress bar */}
              <div className="mt-4 h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
