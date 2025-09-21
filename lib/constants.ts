export const APP_CONFIG = {
  name: 'DeciSmart',
  tagline: 'Intelligent Decisions, Accelerated',
  version: '1.0.0',
} as const;

export const CHART_COLORS = {
  primary: '#4A90E2',
  accent: '#50E3C2',
  success: '#7ED321',
  warning: '#F5A623',
  error: '#D0021B',
  neutral: '#9B9B9B',
} as const;

export const ANIMATION_DURATION = {
  fast: 150,
  base: 250,
  slow: 400,
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;

export const MOCK_METRICS = [
  {
    id: '1',
    title: 'Revenue Impact',
    value: '150.7%',
    change: 25.3,
    trend: 'up' as const,
    format: 'percentage' as const,
  },
  {
    id: '2',
    title: 'User Engagement',
    value: '89.2%',
    change: -2.1,
    trend: 'down' as const,
    format: 'percentage' as const,
  },
  {
    id: '3',
    title: 'Conversion Rate',
    value: '6.75%',
    change: 1.2,
    trend: 'up' as const,
    format: 'percentage' as const,
  },
  {
    id: '4',
    title: 'Risk Score',
    value: '24%',
    change: -5.4,
    trend: 'down' as const,
    format: 'percentage' as const,
  },
];

export const MOCK_CHART_DATA = [
  { name: 'Jan', value: 4000, change: 5.2 },
  { name: 'Feb', value: 3000, change: -2.1 },
  { name: 'Mar', value: 2000, change: -8.3 },
  { name: 'Apr', value: 2780, change: 12.4 },
  { name: 'May', value: 1890, change: -15.2 },
  { name: 'Jun', value: 2390, change: 8.7 },
  { name: 'Jul', value: 3490, change: 18.9 },
];
