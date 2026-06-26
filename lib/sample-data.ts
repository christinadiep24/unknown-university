export const programs = [
  {
    id: '1',
    name: 'Web Development Bootcamp',
    description: 'Master modern web development with React, Node.js, and more',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    courses: 4,
    students: 1245,
    instructor: 'Sarah Chen',
    difficulty: 'Intermediate',
  },
  {
    id: '2',
    name: 'AI & Machine Learning',
    description: 'Deep dive into AI, machine learning, and neural networks',
    image: 'https://images.unsplash.com/photo-1677442d019cecf8f6a3fa90e128262e?w=500&h=300&fit=crop',
    courses: 5,
    students: 892,
    instructor: 'Dr. James Park',
    difficulty: 'Advanced',
  },
  {
    id: '3',
    name: 'Data Science Fundamentals',
    description: 'Learn data analysis, visualization, and statistical modeling',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    courses: 3,
    students: 2105,
    instructor: 'Emily Rodriguez',
    difficulty: 'Beginner',
  },
  {
    id: '4',
    name: 'Cloud Architecture',
    description: 'AWS, Azure, and Google Cloud essentials',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    courses: 4,
    students: 567,
    instructor: 'Mike Thompson',
    difficulty: 'Advanced',
  },
];

export const courses = [
  {
    id: '1',
    programId: '1',
    name: 'React Fundamentals',
    description: 'Learn React from scratch',
    duration: '4 weeks',
    lessons: 12,
    progress: 45,
  },
  {
    id: '2',
    programId: '1',
    name: 'Node.js Backend',
    description: 'Build scalable backend services',
    duration: '5 weeks',
    lessons: 15,
    progress: 20,
  },
  {
    id: '3',
    programId: '1',
    name: 'Database Design',
    description: 'Master SQL and database optimization',
    duration: '3 weeks',
    lessons: 10,
    progress: 0,
  },
  {
    id: '4',
    programId: '1',
    name: 'Deployment & DevOps',
    description: 'Deploy applications to production',
    duration: '2 weeks',
    lessons: 8,
    progress: 0,
  },
];

export const lessons = [
  {
    id: '1',
    courseId: '1',
    title: 'Introduction to React',
    description: 'Learn the basics of React and JSX',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    summary: `React is a JavaScript library for building user interfaces with reusable components.

Key concepts:
- Components: Building blocks of React applications
- JSX: Syntax extension for JavaScript
- Props: Pass data between components
- State: Component data that can change
- Lifecycle: Methods that run at different stages

React makes building interactive UIs painless by allowing you to design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.`,
    duration: '45 min',
    completed: true,
  },
  {
    id: '2',
    courseId: '1',
    title: 'Components and Props',
    description: 'Understanding component composition',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    summary: `Components are the building blocks of any React application.

Types of Components:
- Functional Components: JavaScript functions
- Class Components: ES6 classes (legacy)

Props:
- Props are arguments passed into React components
- Props are passed to components similar to function parameters
- Props are read-only and cannot be modified
- Data flows down from parent to child components`,
    duration: '50 min',
    completed: true,
  },
  {
    id: '3',
    courseId: '1',
    title: 'State and Hooks',
    description: 'Managing component state with hooks',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    summary: `Hooks allow you to use state and other React features in functional components.

Common Hooks:
- useState: Add state to functional components
- useEffect: Handle side effects
- useContext: Access context values
- useReducer: Complex state management
- Custom Hooks: Reuse stateful logic

Rules of Hooks:
- Only call hooks at the top level
- Only call hooks from React functions
- Use the ESLint plugin to enforce these rules`,
    duration: '60 min',
    completed: false,
  },
];

export const assignments = [
  {
    id: '1',
    courseId: '1',
    title: 'Build a Todo App',
    description: 'Create a simple todo application with React',
    dueDate: '2024-02-15',
    status: 'submitted',
    grade: 95,
  },
  {
    id: '2',
    courseId: '1',
    title: 'Weather App Project',
    description: 'Build a weather app using an API',
    dueDate: '2024-02-22',
    status: 'pending',
    grade: null,
  },
  {
    id: '3',
    courseId: '1',
    title: 'E-commerce UI',
    description: 'Design an e-commerce product page',
    dueDate: '2024-03-01',
    status: 'not-submitted',
    grade: null,
  },
];

export const communityPosts = [
  {
    id: '1',
    author: 'Alex Johnson',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
    timestamp: '2 hours ago',
    content: 'Just finished the React hooks module! Best explained I\'ve seen so far. Anyone else working on the Todo app assignment?',
    likes: 24,
    replies: 5,
    tags: ['react', 'help', 'assignment'],
  },
  {
    id: '2',
    author: 'Maya Patel',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maya',
    timestamp: '4 hours ago',
    content: 'Tip: If you\'re stuck on state management, try drawing out your component tree first. It really helps visualize the data flow!',
    likes: 156,
    replies: 32,
    tags: ['tips', 'state', 'component'],
  },
  {
    id: '3',
    author: 'Chen Wei',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Chen',
    timestamp: '6 hours ago',
    content: 'Is anyone interested in forming a study group for the upcoming capstone project? Looking for 2-3 people to collaborate with.',
    likes: 42,
    replies: 8,
    tags: ['study-group', 'capstone', 'collaboration'],
  },
  {
    id: '4',
    author: 'Jordan Smith',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan',
    timestamp: '1 day ago',
    content: 'Finally deployed my first React app! The deployment module was challenging but totally worth it. Next stop: TypeScript!',
    likes: 89,
    replies: 15,
    tags: ['deployment', 'deployment-success', 'javascript'],
  },
];

export const userProgress = {
  totalCoursesEnrolled: 4,
  completedCourses: 1,
  inProgressCourses: 2,
  totalLessonsCompleted: 24,
  totalAssignments: 12,
  submittedAssignments: 8,
  averageGrade: 91,
  currentStreak: 7,
  lastActivityDate: new Date(Date.now() - 2 * 60 * 60 * 1000),
};

export const userProfile = {
  id: '1',
  name: 'Jordan Taylor',
  email: 'jordan@example.com',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan',
  bio: 'Passionate about learning web development and building cool projects.',
  joinDate: '2023-09-15',
  location: 'San Francisco, CA',
  website: 'https://example.com',
};
