'use client';

import Link from 'next/link';
import { userProgress, programs } from '@/lib/sample-data';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { BookOpen, Award, Flame, TrendingUp } from 'lucide-react';

const weeklyData = [
  { day: 'Mon', minutes: 45 },
  { day: 'Tue', minutes: 60 },
  { day: 'Wed', minutes: 30 },
  { day: 'Thu', minutes: 75 },
  { day: 'Fri', minutes: 90 },
  { day: 'Sat', minutes: 120 },
  { day: 'Sun', minutes: 50 },
];

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">My Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <div className="p-6 border rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-muted-foreground text-sm">Total Courses</span>
            <BookOpen className="w-5 h-5 text-primary" />
          </div>
          <div className="text-3xl font-bold">{userProgress.totalCoursesEnrolled}</div>
          <p className="text-xs text-muted-foreground mt-2">
            {userProgress.inProgressCourses} in progress
          </p>
        </div>

        <div className="p-6 border rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-muted-foreground text-sm">Completed</span>
            <Award className="w-5 h-5 text-accent" />
          </div>
          <div className="text-3xl font-bold">{userProgress.completedCourses}</div>
          <p className="text-xs text-muted-foreground mt-2">courses finished</p>
        </div>

        <div className="p-6 border rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-muted-foreground text-sm">Average Grade</span>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <div className="text-3xl font-bold">{userProgress.averageGrade}%</div>
          <p className="text-xs text-muted-foreground mt-2">overall performance</p>
        </div>

        <div className="p-6 border rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-muted-foreground text-sm">Current Streak</span>
            <Flame className="w-5 h-5 text-orange-500" />
          </div>
          <div className="text-3xl font-bold">{userProgress.currentStreak}</div>
          <p className="text-xs text-muted-foreground mt-2">days learning</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-8">
        {/* Learning Activity */}
        <div className="lg:col-span-2 border rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Weekly Activity</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="minutes" stroke="#3b82f6" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Quick Stats */}
        <div className="border rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Progress</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Lessons</span>
                <span className="font-semibold">{userProgress.totalLessonsCompleted}/50</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-primary" style={{ width: '48%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Assignments</span>
                <span className="font-semibold">
                  {userProgress.submittedAssignments}/{userProgress.totalAssignments}
                </span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-accent" style={{ width: '67%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Programs */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Recommended Programs</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {programs.slice(0, 2).map((program) => (
            <Link
              key={program.id}
              href={`/programs/${program.id}`}
              className="border rounded-lg overflow-hidden hover:border-primary transition hover:shadow-lg"
            >
              <div
                className="h-32 bg-gradient-to-br from-blue-500 to-blue-600"
                style={{
                  backgroundImage: `url(${program.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">{program.name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {program.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
