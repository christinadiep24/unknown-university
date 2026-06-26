'use client';

import { FormEvent, useEffect, useMemo, useState } from 'react';
import type { RealtimeChannel } from '@supabase/supabase-js';
import { Radio, Send, Users } from 'lucide-react';
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
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  ChatMessage,
  onlineDemoUsers,
  sampleChatMessages,
} from '@/lib/campus-data';
import {
  getCurrentUser,
  isSupabaseConfigured,
  supabase,
} from '@/lib/supabase';

type PresenceUser = {
  id: string;
  name: string;
  room: string;
  color: string;
};

type SupabaseChatRow = {
  id: string;
  author: string | null;
  body: string;
  room: string | null;
  created_at: string;
};

type PresenceMeta = {
  id: string;
  name: string;
  room: string;
  color: string;
};

const presenceColors = [
  'bg-fuchsia-500',
  'bg-cyan-500',
  'bg-amber-500',
  'bg-emerald-500',
  'bg-rose-500',
];

function formatMessageTime(value: string) {
  if (!value.includes('T')) return value;

  return new Intl.DateTimeFormat('en', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(value));
}

function rowToMessage(row: SupabaseChatRow): ChatMessage {
  const author = row.author || 'Anonymous';

  return {
    id: row.id,
    author,
    avatar: author.slice(0, 1).toUpperCase(),
    body: row.body,
    room: row.room || 'social',
    createdAt: formatMessageTime(row.created_at),
  };
}

export default function SocialHubPage() {
  const [messages, setMessages] = useState<ChatMessage[]>(sampleChatMessages);
  const [onlineUsers, setOnlineUsers] =
    useState<PresenceUser[]>(onlineDemoUsers);
  const [name, setName] = useState('Guest Builder');
  const [draft, setDraft] = useState('');
  const [status, setStatus] = useState(
    isSupabaseConfigured ? 'Connecting to Supabase...' : 'Demo mode'
  );

  const canSend = useMemo(() => draft.trim().length > 0, [draft]);

  useEffect(() => {
    let channel: RealtimeChannel | null = null;
    let mounted = true;

    async function connectRealtime() {
      if (!isSupabaseConfigured) return;

      const { data } = await getCurrentUser();
      const metadata = data.user?.user_metadata as { name?: string } | undefined;
      const userName =
        metadata?.name || data.user?.email?.split('@')[0] || 'Campus Guest';

      if (!mounted) return;
      setName(userName);

      const userId =
        data.user?.id || `guest-${Math.random().toString(36).slice(2)}`;
      const color =
        presenceColors[Math.floor(Math.random() * presenceColors.length)];

      channel = supabase
        .channel('unknown-metaverse-social', {
          config: {
            presence: {
              key: userId,
            },
          },
        })
        .on(
          'postgres_changes',
          {
            event: 'INSERT',
            schema: 'public',
            table: 'social_messages',
            filter: 'room=eq.social',
          },
          (payload) => {
            const nextMessage = rowToMessage(payload.new as SupabaseChatRow);
            setMessages((current) => {
              if (current.some((message) => message.id === nextMessage.id)) {
                return current;
              }

              return [...current, nextMessage];
            });
          }
        )
        .on('presence', { event: 'sync' }, () => {
          if (!channel) return;

          const state = channel.presenceState() as Record<string, PresenceMeta[]>;
          const users = Object.values(state).flat().map((presence) => ({
            id: presence.id,
            name: presence.name,
            room: presence.room,
            color: presence.color,
          }));

          setOnlineUsers(users.length > 0 ? users : onlineDemoUsers);
        })
        .subscribe(async (event) => {
          if (event === 'SUBSCRIBED' && channel) {
            await channel.track({
              id: userId,
              name: userName,
              room: 'Social Hub',
              color,
            });
            setStatus('Live via Supabase realtime');
          }
        });
    }

    connectRealtime();

    return () => {
      mounted = false;
      if (channel) {
        channel.unsubscribe();
      }
    };
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSend) return;

    const body = draft.trim();
    setDraft('');

    if (!isSupabaseConfigured) {
      setMessages((current) => [
        ...current,
        {
          id: `local-${Date.now()}`,
          author: name,
          avatar: name.slice(0, 1).toUpperCase(),
          body,
          room: 'social',
          createdAt: formatMessageTime(new Date().toISOString()),
        },
      ]);
      return;
    }

    const { error } = await supabase.from('social_messages').insert({
      author: name,
      body,
      room: 'social',
    });

    if (error) {
      setStatus(`Realtime insert failed: ${error.message}`);
      setMessages((current) => [
        ...current,
        {
          id: `fallback-${Date.now()}`,
          author: name,
          avatar: name.slice(0, 1).toUpperCase(),
          body,
          room: 'social',
          createdAt: formatMessageTime(new Date().toISOString()),
        },
      ]);
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <RoomHeader
        eyebrow="Social Hub"
        title="Realtime campus chat"
        description="A Discord-inspired lounge with Supabase realtime messages and presence. Without Supabase credentials, it stays interactive in local demo mode."
        status={status}
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <Card className="overflow-hidden">
          <CardHeader className="border-b bg-secondary/30">
            <CardTitle className="flex items-center gap-2">
              <Radio className="h-5 w-5 text-primary" />
              # social-hub
            </CardTitle>
            <CardDescription>
              Messages publish to the social_messages table when configured.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="flex h-[560px] flex-col">
              <div className="flex-1 space-y-4 overflow-y-auto p-5">
                {messages.map((message) => (
                  <div key={message.id} className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                      {message.avatar}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="mb-1 flex flex-wrap items-center gap-2">
                        <p className="font-medium">{message.author}</p>
                        <span className="text-xs text-muted-foreground">
                          {message.createdAt}
                        </span>
                      </div>
                      <p className="rounded-2xl bg-secondary/60 p-4 text-sm leading-6">
                        {message.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-3 border-t p-4">
                <Input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Display name"
                />
                <Textarea
                  value={draft}
                  onChange={(event) => setDraft(event.target.value)}
                  placeholder="Share an update, question, or build..."
                  className="min-h-[88px] resize-none"
                />
                <div className="flex justify-end">
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
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Online now
              </CardTitle>
              <CardDescription>Presence syncs through Supabase channels.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {onlineUsers.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between rounded-2xl border bg-background p-3"
                >
                  <div className="flex items-center gap-3">
                    <span className={`h-3 w-3 rounded-full ${user.color}`} />
                    <div>
                      <p className="text-sm font-medium">{user.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {user.room}
                      </p>
                    </div>
                  </div>
                  <Badge variant="success">online</Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Badge variant="outline">Schema</Badge>
              <CardTitle>social_messages</CardTitle>
              <CardDescription>
                Expected columns: id, author, body, room, created_at. Enable
                realtime on this table in Supabase for live inserts.
              </CardDescription>
            </CardHeader>
          </Card>
        </aside>
      </div>
    </div>
  );
}
