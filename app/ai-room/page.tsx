'use client';

import { FormEvent, useMemo, useState } from 'react';
import { Bot, Send, Sparkles, User } from 'lucide-react';
import { RoomHeader } from '@/components/room-header';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

type AiMessage = {
  id: string;
  role: 'assistant' | 'user';
  content: string;
};

const starterMessages: AiMessage[] = [
  {
    id: 'assistant-welcome',
    role: 'assistant',
    content:
      'Welcome to the AI Room. Ask me to summarize a lesson, brainstorm a startup idea, or create a study plan.',
  },
];

const promptSuggestions = [
  'Turn my startup idea into an MVP scope',
  'Explain Supabase realtime presence',
  'Create a 30-minute study plan for AI basics',
];

async function askCampusAi(prompt: string) {
  return `OpenAI placeholder response: I would send "${prompt}" to your server action or API route, then stream the model answer back into this chat UI. For now, here is a campus-ready next step: define the user goal, list the smallest useful action, and ship it in one room first.`;
}

export default function AiRoomPage() {
  const [messages, setMessages] = useState<AiMessage[]>(starterMessages);
  const [draft, setDraft] = useState('');
  const [loading, setLoading] = useState(false);

  const canSend = useMemo(() => draft.trim().length > 0 && !loading, [
    draft,
    loading,
  ]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSend) return;

    const prompt = draft.trim();
    const userMessage: AiMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: prompt,
    };

    setMessages((current) => [...current, userMessage]);
    setDraft('');
    setLoading(true);

    const answer = await askCampusAi(prompt);
    setMessages((current) => [
      ...current,
      {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: answer,
      },
    ]);
    setLoading(false);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <RoomHeader
        eyebrow="AI Room"
        title="Campus AI chat"
        description="A ChatGPT-style workspace for tutoring, ideation, and research. The UI is ready for an OpenAI-backed API route when credentials are added."
        status="Placeholder AI"
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <Card className="overflow-hidden">
          <CardHeader className="border-b bg-secondary/30">
            <CardTitle className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-primary" />
              AI tutor session
            </CardTitle>
            <CardDescription>
              Messages are local in this MVP until an OpenAI endpoint is wired.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="flex h-[520px] flex-col">
              <div className="flex-1 space-y-5 overflow-y-auto p-5">
                {messages.map((message) => {
                  const isUser = message.role === 'user';

                  return (
                    <div
                      key={message.id}
                      className={`flex gap-3 ${isUser ? 'justify-end' : ''}`}
                    >
                      {!isUser ? (
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
                          <Bot className="h-4 w-4 text-primary" />
                        </div>
                      ) : null}
                      <div
                        className={`max-w-[82%] rounded-3xl px-4 py-3 text-sm leading-6 ${
                          isUser
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-secondary text-foreground'
                        }`}
                      >
                        {message.content}
                      </div>
                      {isUser ? (
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary">
                          <User className="h-4 w-4" />
                        </div>
                      ) : null}
                    </div>
                  );
                })}
                {loading ? (
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                    Thinking through your campus context...
                  </div>
                ) : null}
              </div>

              <form onSubmit={handleSubmit} className="border-t p-4">
                <Textarea
                  value={draft}
                  onChange={(event) => setDraft(event.target.value)}
                  placeholder="Ask the AI Room for a lesson summary, build plan, or research outline..."
                  className="min-h-[96px] resize-none"
                />
                <div className="mt-3 flex justify-end">
                  <Button type="submit" disabled={!canSend}>
                    Send <Send className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            </div>
          </CardContent>
        </Card>

        <aside className="space-y-5">
          <Card>
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Prompt starters</CardTitle>
              <CardDescription>
                Click a prompt to load it into the composer.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {promptSuggestions.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => setDraft(prompt)}
                  className="w-full rounded-2xl border bg-background p-4 text-left text-sm transition hover:border-primary/50 hover:bg-secondary/60"
                >
                  {prompt}
                </button>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Badge variant="outline">Integration note</Badge>
              <CardTitle>OpenAI-ready seam</CardTitle>
              <CardDescription>
                Replace the local placeholder function with a secure API route
                or server action that calls OpenAI from the server.
              </CardDescription>
            </CardHeader>
          </Card>
        </aside>
      </div>
    </div>
  );
}
