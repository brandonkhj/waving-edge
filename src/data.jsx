export const trustPoints = [
  {
    label: 'Practical solutions',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" />
      </>
    ),
  },
  {
    label: 'Direct collaboration',
    icon: (
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
    ),
  },
  {
    label: 'Long-term support',
    icon: (
      <>
        <path d="M12 2 4 5v6c0 5.25 3.4 9.74 8 11 4.6-1.26 8-5.75 8-11V5l-8-3Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
];

export const services = [
  {
    title: 'Build a new product',
    desc: 'Turn an idea into a practical MVP or production-ready web app without over-engineering the first version.',
    examples: ['SaaS platforms', 'MVPs', 'Customer portals', 'Web apps'],
    color: 'mint',
    icon: (
      <>
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </>
    ),
  },
  {
    title: 'Digitise business operations',
    desc: 'Replace spreadsheets, manual processes and disconnected tools with an app designed around your actual workflows.',
    examples: [
      'Internal management systems',
      'Booking systems',
      'Rental systems',
      'Inventory systems',
      'Operations dashboards',
    ],
    color: 'sky',
    icon: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </>
    ),
  },
  {
    title: 'Integrations and automation',
    desc: 'Connect the systems you already use and remove repetitive, manual work.',
    examples: [
      'API integrations',
      'Payment gateways',
      'SMS / messaging',
      'Email systems',
      'Shopify integrations',
      'Third-party services',
    ],
    color: 'peach',
    icon: (
      <>
        <path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1.5 1.5" />
        <path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1.5-1.5" />
      </>
    ),
  },
  {
    title: 'Improve existing software',
    desc: 'Modernise, extend, maintain or repair the app your business already relies on.',
    examples: [
      'Feature development',
      'UI modernisation',
      'Performance improvements',
      'Legacy system improvements',
      'Ongoing maintenance',
    ],
    color: 'lavender',
    icon: (
      <>
        <path d="M4 20V10" />
        <path d="M12 20V4" />
        <path d="M20 20v-6" />
      </>
    ),
  },
];

export const approachPoints = [
  {
    label: 'Direct collaboration',
    icon: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
      </>
    ),
  },
  {
    label: 'Clear communication',
    icon: (
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
    ),
  },
  {
    label: 'Long-term value',
    icon: (
      <>
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M17 7h4v4" />
      </>
    ),
  },
];

export const steps = [
  { num: '1', title: 'Understand', desc: 'Discuss the business problem, workflow and requirements.' },
  { num: '2', title: 'Scope', desc: 'Define the recommended solution, project scope and estimated effort.' },
  { num: '3', title: 'Build', desc: 'Design and develop the app iteratively with regular feedback.' },
  { num: '4', title: 'Launch', desc: 'Deploy, test and prepare the system for real users.' },
  { num: '5', title: 'Support', desc: 'Continue improving, maintaining and supporting the app.' },
];

const checkIcon = (
  <path d="M20 6 9 17l-5-5" />
);

export const solutions = [
  { label: 'E-commerce', icon: checkIcon },
  { label: 'SaaS products', icon: checkIcon },
  { label: 'Business systems', icon: checkIcon },
  { label: 'Internal tools', icon: checkIcon },
  { label: 'Client portals', icon: checkIcon },
  { label: 'Reporting dashboards', icon: checkIcon },
  { label: 'Automation', icon: checkIcon },
  { label: 'Integrations', icon: checkIcon },
];

export const techStack = [
  'Laravel',
  'PHP',
  'React',
  'Next.js',
  'TypeScript',
  'MySQL',
  'Shopify',
  'Tailwind CSS',
  'REST APIs',
  'Cloud',
];

export const aboutPoints = [
  { label: 'Focused on real business problems', icon: trustPoints[0].icon },
  { label: 'Direct and practical collaboration', icon: trustPoints[1].icon },
  { label: 'Committed to long-term support', icon: trustPoints[2].icon },
];
