import { lessons, courses } from '@/lib/sample-data';
import Link from 'next/link';
import { CheckCircle2, Circle } from 'lucide-react';

export default async function CoursePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const course = courses.find((c) => c.id === id);
  const courseLessons = lessons.filter((l) => l.courseId === id);

  if (!course) {
    return <div className="text-center py-20">Course not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">{course.name}</h1>
        <p className="text-xl text-muted-foreground mb-6">
          {course.description}
        </p>

        {/* Progress */}
        <div className="bg-secondary/50 p-6 rounded-lg mb-6">
          <div className="flex items-center justify-between mb-4">
            <span className="font-medium">Course Progress</span>
            <span className="text-2xl font-bold text-primary">{course.progress}%</span>
          </div>
          <div className="h-3 bg-secondary rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all"
              style={{ width: `${course.progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Lessons */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Lessons</h2>
        <div className="space-y-3">
          {courseLessons.map((lesson, index) => (
            <Link
              key={lesson.id}
              href={`/lessons/${lesson.id}`}
              className="block p-4 border rounded-lg hover:border-primary transition hover:bg-secondary/50"
            >
              <div className="flex items-center gap-4">
                {lesson.completed ? (
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                ) : (
                  <Circle className="w-6 h-6 text-muted-foreground flex-shrink-0" />
                )}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-muted-foreground">
                      Lesson {index + 1}
                    </span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      {lesson.duration}
                    </span>
                  </div>
                  <h3 className="font-semibold">{lesson.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {lesson.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
