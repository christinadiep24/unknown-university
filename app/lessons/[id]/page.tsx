'use client';

import { useState } from 'react';
import { lessons } from '@/lib/sample-data';
import { Send, RotateCw } from 'lucide-react';

export default function LessonPage({ params }: { params: { id: string } }) {
  const lesson = lessons.find((l) => l.id === params.id);
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      type: 'bot' as const,
      message: 'Hi! I\'m your AI tutor. Feel free to ask me any questions about this lesson!',
    },
  ]);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  if (!lesson) {
    return <div className="text-center py-20">Lesson not found</div>;
  }

  const handleAskQuestion = () => {
    if (!currentQuestion.trim()) return;

    setChatMessages([
      ...chatMessages,
      { id: chatMessages.length + 1, type: 'user', message: currentQuestion },
      {
        id: chatMessages.length + 2,
        type: 'bot',
        message: `Great question! Based on the lesson content, ${currentQuestion.substring(0, 30)}... is an important concept. Try to relate it back to the main ideas we discussed.`,
      },
    ]);
    setCurrentQuestion('');
  };

  const quizQuestions = [
    {
      id: 1,
      question: 'What is React primarily used for?',
      options: [
        'Building user interfaces',
        'Data analysis',
        'Game development',
        'System administration',
      ],
      correct: 'Building user interfaces',
    },
    {
      id: 2,
      question: 'What is JSX?',
      options: [
        'A JavaScript syntax extension',
        'A CSS preprocessor',
        'A database language',
        'A package manager',
      ],
      correct: 'A JavaScript syntax extension',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Video Section */}
          <div>
            <h1 className="text-3xl font-bold mb-4">{lesson.title}</h1>
            <div className="w-full aspect-video bg-black rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src={lesson.videoUrl}
                title={lesson.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Summary Section */}
          <div className="bg-secondary/50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Lesson Summary</h2>
            <div className="prose prose-invert max-w-none dark:prose-invert">
              {lesson.summary.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="text-muted-foreground whitespace-pre-wrap">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Quiz Section */}
          <div className="bg-secondary/50 p-6 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Lesson Quiz</h2>
              {showQuiz && (
                <button
                  onClick={() => setShowQuiz(false)}
                  className="text-sm text-primary hover:underline flex items-center gap-1"
                >
                  <RotateCw className="w-4 h-4" /> Reset
                </button>
              )}
            </div>

            {!showQuiz ? (
              <button
                onClick={() => setShowQuiz(true)}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition"
              >
                Start Quiz
              </button>
            ) : (
              <div className="space-y-6">
                {quizQuestions.map((q, idx) => (
                  <div key={q.id}>
                    <h3 className="font-semibold mb-3">
                      Question {idx + 1}: {q.question}
                    </h3>
                    <div className="space-y-2">
                      {q.options.map((option) => (
                        <label
                          key={option}
                          className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-secondary transition"
                        >
                          <input
                            type="radio"
                            name={`question-${q.id}`}
                            value={option}
                            onChange={(e) => setSelectedAnswer(e.target.value)}
                            className="mr-3"
                          />
                          <span>{option}</span>
                          {selectedAnswer === option && option === q.correct && (
                            <span className="ml-auto text-accent">✓</span>
                          )}
                          {selectedAnswer === option &&
                            option !== q.correct && (
                              <span className="ml-auto text-destructive">✗</span>
                            )}
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* AI Tutor Chat Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-20 border rounded-lg p-4 h-[600px] flex flex-col bg-secondary/50">
            <h3 className="font-semibold mb-4">AI Tutor</h3>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto mb-4 space-y-3">
              {chatMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`text-sm p-3 rounded-lg ${
                    msg.type === 'user'
                      ? 'bg-primary text-primary-foreground ml-auto max-w-xs'
                      : 'bg-muted text-muted-foreground max-w-xs'
                  }`}
                >
                  {msg.message}
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="flex gap-2">
              <input
                type="text"
                value={currentQuestion}
                onChange={(e) => setCurrentQuestion(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAskQuestion()}
                placeholder="Ask a question..."
                className="flex-1 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                onClick={handleAskQuestion}
                className="p-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
