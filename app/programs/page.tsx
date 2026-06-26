import Link from 'next/link';
import { programs } from '@/lib/sample-data';
import { Users, BookOpen, BarChart3 } from 'lucide-react';

export const metadata = {
  title: 'Programs - Unknown University',
};

export default function ProgramsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Programs</h1>
        <p className="text-xl text-muted-foreground">
          Choose from our carefully curated programs designed for all skill levels
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {programs.map((program) => (
          <Link key={program.id} href={`/programs/${program.id}`}>
            <div className="border rounded-lg overflow-hidden hover:border-primary transition hover:shadow-lg cursor-pointer h-full">
              {/* Program Image */}
              <div
                className="h-48 bg-gradient-to-br from-blue-500 to-blue-600"
                style={{
                  backgroundImage: `url(${program.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />

              {/* Program Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{program.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {program.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4 py-4 border-y">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-primary" />
                    <span className="text-sm">{program.courses} Courses</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-sm">{program.students.toLocaleString()} Students</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-primary" />
                    <span className="text-sm">{program.difficulty}</span>
                  </div>
                </div>

                {/* Instructor */}
                <p className="text-sm text-muted-foreground">
                  Instructor: <span className="font-medium">{program.instructor}</span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
