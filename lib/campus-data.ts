export type CampusRoomHref =
  | '/library'
  | '/ai-room'
  | '/social'
  | '/startup-lab'
  | '/events'
  | '/profile';

export type CampusRoom = {
  name: string;
  href: CampusRoomHref;
  description: string;
  status: string;
  accent: string;
  activity: string;
  members: number;
};

export type LibraryCourse = {
  title: string;
  category: string;
  level: string;
  duration: string;
  progress: number;
  summary: string;
};

export type Resource = {
  title: string;
  type: string;
  reads: string;
};

export type ChatMessage = {
  id: string;
  author: string;
  avatar: string;
  body: string;
  room: string;
  createdAt: string;
};

export type StartupProject = {
  name: string;
  stage: string;
  founder: string;
  summary: string;
  stack: string[];
  lookingFor: string;
};

export type CampusEvent = {
  title: string;
  date: string;
  time: string;
  host: string;
  type: string;
  attendees: number;
};

export const campusRooms: CampusRoom[] = [
  {
    name: 'Library',
    href: '/library',
    description: 'Courses, guides, recordings, and saved research paths.',
    status: 'Quiet study',
    accent: 'from-amber-300 to-orange-500',
    activity: '18 learners reading',
    members: 128,
  },
  {
    name: 'AI Room',
    href: '/ai-room',
    description: 'Ask the campus AI tutor questions and prototype ideas.',
    status: 'AI tutor online',
    accent: 'from-cyan-300 to-blue-600',
    activity: '7 prompts active',
    members: 42,
  },
  {
    name: 'Social Hub',
    href: '/social',
    description: 'Realtime lounge for students, builders, and mentors.',
    status: 'Live chat',
    accent: 'from-fuchsia-300 to-purple-600',
    activity: '24 users online',
    members: 310,
  },
  {
    name: 'Startup Lab',
    href: '/startup-lab',
    description: 'Ship projects, find collaborators, and pitch experiments.',
    status: 'Demo day prep',
    accent: 'from-emerald-300 to-teal-600',
    activity: '12 projects building',
    members: 86,
  },
  {
    name: 'Events Hall',
    href: '/events',
    description: 'Campus talks, workshops, office hours, and live cohorts.',
    status: 'Next event soon',
    accent: 'from-rose-300 to-red-600',
    activity: '3 events today',
    members: 204,
  },
  {
    name: 'Profile Space',
    href: '/profile',
    description: 'Your campus identity, portfolio, achievements, and links.',
    status: 'Portfolio ready',
    accent: 'from-slate-300 to-slate-700',
    activity: '5 badges earned',
    members: 1,
  },
];

export const libraryCourses: LibraryCourse[] = [
  {
    title: 'Prompt Engineering Studio',
    category: 'AI',
    level: 'Beginner',
    duration: '2h 40m',
    progress: 68,
    summary: 'Learn prompt patterns for research, product thinking, and coding.',
  },
  {
    title: 'Realtime Apps with Supabase',
    category: 'Engineering',
    level: 'Intermediate',
    duration: '4h 15m',
    progress: 35,
    summary: 'Build auth, presence, and collaborative data flows with Supabase.',
  },
  {
    title: 'Founder OS: From Idea to MVP',
    category: 'Startup',
    level: 'All levels',
    duration: '3h 05m',
    progress: 12,
    summary: 'Validate a problem, scope a product, and launch a focused MVP.',
  },
];

export const libraryResources: Resource[] = [
  {
    title: 'Campus Handbook',
    type: 'Notion guide',
    reads: '2.4k reads',
  },
  {
    title: 'AI Research Sprint Template',
    type: 'Workspace',
    reads: '918 copies',
  },
  {
    title: 'Realtime Product Checklist',
    type: 'Playbook',
    reads: '1.1k reads',
  },
];

export const sampleChatMessages: ChatMessage[] = [
  {
    id: 'demo-1',
    author: 'Maya',
    avatar: 'M',
    body: 'Welcome to the Social Hub. Drop your current build or ask for feedback.',
    room: 'social',
    createdAt: '09:42',
  },
  {
    id: 'demo-2',
    author: 'Kenji',
    avatar: 'K',
    body: 'I am pairing on Supabase realtime if anyone wants to debug presence together.',
    room: 'social',
    createdAt: '09:48',
  },
  {
    id: 'demo-3',
    author: 'Ari',
    avatar: 'A',
    body: 'Just shipped a portfolio card in Profile Space. The campus loop is starting to feel alive.',
    room: 'social',
    createdAt: '10:03',
  },
];

export const onlineDemoUsers = [
  { id: 'maya', name: 'Maya', room: 'Social Hub', color: 'bg-fuchsia-500' },
  { id: 'kenji', name: 'Kenji', room: 'AI Room', color: 'bg-cyan-500' },
  { id: 'ari', name: 'Ari', room: 'Library', color: 'bg-amber-500' },
  { id: 'nova', name: 'Nova', room: 'Startup Lab', color: 'bg-emerald-500' },
];

export const startupProjects: StartupProject[] = [
  {
    name: 'MentorMesh',
    stage: 'Prototype',
    founder: 'Leah Park',
    summary: 'Matches students with mentors based on goals, schedule, and learning signals.',
    stack: ['Next.js', 'Supabase', 'Vector search'],
    lookingFor: 'Design partner',
  },
  {
    name: 'PitchPad AI',
    stage: 'MVP',
    founder: 'Owen Lee',
    summary: 'Turns rough startup notes into a pitch narrative, risks list, and demo script.',
    stack: ['OpenAI placeholder', 'Tailwind', 'Edge functions'],
    lookingFor: 'Beta testers',
  },
  {
    name: 'StudyPods',
    stage: 'Idea validation',
    founder: 'Nia Santos',
    summary: 'Creates temporary cohort rooms for people taking the same course this week.',
    stack: ['Realtime', 'Calendars', 'Presence'],
    lookingFor: 'Realtime engineer',
  },
];

export const campusEvents: CampusEvent[] = [
  {
    title: 'AI Tutor Jam',
    date: 'Today',
    time: '14:00 UTC',
    host: 'Unknown Faculty',
    type: 'Workshop',
    attendees: 64,
  },
  {
    title: 'Founder Office Hours',
    date: 'Tomorrow',
    time: '17:30 UTC',
    host: 'Startup Lab Mentors',
    type: 'Live session',
    attendees: 38,
  },
  {
    title: 'Realtime Campus Build Review',
    date: 'Friday',
    time: '20:00 UTC',
    host: 'Engineering Guild',
    type: 'Critique',
    attendees: 92,
  },
];

export const profilePortfolio = {
  name: 'Jordan Taylor',
  role: 'AI product builder',
  location: 'Remote campus',
  bio: 'Building useful AI workflows, realtime learning tools, and small products with fast feedback loops.',
  links: ['unknown.dev', 'github.com/jordan', 'linkedin.com/in/jordan'],
  stats: [
    { label: 'Courses', value: '12' },
    { label: 'Projects', value: '4' },
    { label: 'Badges', value: '5' },
  ],
  projects: [
    'Realtime study room',
    'AI lesson summarizer',
    'Founder discovery board',
  ],
  badges: ['Realtime Builder', 'AI Room Regular', 'Campus Mentor'],
};
