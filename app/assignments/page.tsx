'use client';

import { useState } from 'react';
import { assignments } from '@/lib/sample-data';
import { Upload, CheckCircle2, Clock, AlertCircle } from 'lucide-react';

export default function AssignmentsPage() {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'submitted':
        return <CheckCircle2 className="w-5 h-5 text-accent" />;
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'not-submitted':
        return <AlertCircle className="w-5 h-5 text-destructive" />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">My Assignments</h1>

      <div className="space-y-4">
        {assignments.map((assignment) => (
          <div
            key={assignment.id}
            className="border rounded-lg p-6 hover:border-primary transition"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold">{assignment.title}</h3>
                  {getStatusIcon(assignment.status)}
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  {assignment.description}
                </p>

                <div className="flex gap-6 text-sm text-muted-foreground">
                  <span>Due: {assignment.dueDate}</span>
                  <span>
                    Status:{' '}
                    <span className="capitalize font-medium">
                      {assignment.status.replace('-', ' ')}
                    </span>
                  </span>
                  {assignment.grade && (
                    <span>Grade: {assignment.grade}%</span>
                  )}
                </div>
              </div>
            </div>

            {/* Upload Section */}
            {assignment.status === 'not-submitted' && (
              <div className="mt-4 p-4 border border-dashed rounded-lg bg-secondary/50">
                <div className="flex items-center gap-4">
                  <Upload className="w-8 h-8 text-muted-foreground" />
                  <div className="flex-1">
                    <label className="block">
                      <span className="text-sm font-medium cursor-pointer hover:text-primary transition">
                        Click to upload or drag and drop
                      </span>
                      <input
                        type="file"
                        className="hidden"
                        onChange={(e) => setSelectedFile(e.target.files?.[0]?.name || null)}
                      />
                    </label>
                    {selectedFile && (
                      <p className="text-sm text-accent mt-1">Selected: {selectedFile}</p>
                    )}
                  </div>
                  <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition text-sm font-medium">
                    Submit
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
