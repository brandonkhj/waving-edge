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
    slug: 'build-a-new-product',
    pageTitle: 'Build a new product',
    lead:
      'Turning an idea into working software is mostly a sequencing problem. The first version should prove the idea and carry real users — not carry every feature you will eventually want.',
    fit: 'Founders and teams with an idea, a pilot customer or an internal proposal that needs to exist as working software.',
    outcomes: [
      'A scoped first release you can put in front of real users',
      'Architecture that leaves room for the second and third versions',
      'Deployment, environments and monitoring set up from the start',
      'A backlog of what was deliberately left out, and why',
    ],
    desc: 'Turn an idea into a practical MVP or production-ready web app without over-engineering the first version.',
    examples: ['SaaS platforms', 'MVPs', 'Customer portals', 'Web apps'],
    color: 'teal',
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
    slug: 'digitise-business-operations',
    pageTitle: 'Digitise business operations',
    lead:
      'Most operational software replaces a spreadsheet, a WhatsApp thread and a filing habit all at once. The job is to model how the work actually happens, not how a generic product assumes it happens.',
    fit: 'Businesses running day-to-day operations on spreadsheets, manual handoffs or tools that do not talk to each other.',
    outcomes: [
      'One system covering the workflow end to end, instead of several partial ones',
      'Roles and permissions that match how your team is actually organised',
      'Reporting built on the data you already capture',
      'A migration path off the spreadsheets, not a parallel system beside them',
    ],
    desc: 'Replace spreadsheets, manual processes and disconnected tools with an app designed around your actual workflows.',
    examples: [
      'Internal management systems',
      'Booking systems',
      'Rental systems',
      'Inventory systems',
      'Operations dashboards',
    ],
    color: 'cyan',
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
    slug: 'integrations-and-automation',
    pageTitle: 'Integrations and automation',
    lead:
      'Repetitive manual work is usually a sign that two systems that should be talking to each other are not. Integration work is less about the connection itself than about what happens when it fails.',
    fit: 'Teams re-keying data between systems, or running a manual step that has to happen every day without fail.',
    outcomes: [
      'The manual step removed, with the systems kept in sync',
      'Sensible handling of retries, failures and partial data',
      'Credentials and webhooks managed properly rather than hardcoded',
      'Visibility into what ran, what failed and what needs attention',
    ],
    desc: 'Connect the systems you already use and remove repetitive, manual work.',
    examples: [
      'API integrations',
      'Payment gateways',
      'SMS / messaging',
      'Email systems',
      'Shopify integrations',
      'Third-party services',
    ],
    color: 'blue',
    icon: (
      <>
        <path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1.5 1.5" />
        <path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1.5-1.5" />
      </>
    ),
  },
  {
    title: 'Improve existing software',
    slug: 'improve-existing-software',
    pageTitle: 'Improve existing software',
    lead:
      'Software a business already depends on is rarely worth rewriting. It is usually worth understanding first — then extending, repairing or modernising in the places that are actually costing you.',
    fit: 'Businesses with an app that works but is slow, dated, fragile, or that nobody is maintaining any more.',
    outcomes: [
      'A read on what the system does before anything is changed',
      'The specific problems fixed, rather than a speculative rewrite',
      'Dependencies and deployment brought back up to date',
      'Handover notes so the next person is not starting from nothing',
    ],
    desc: 'Modernise, extend, maintain or repair the app your business already relies on.',
    examples: [
      'Feature development',
      'UI modernisation',
      'Performance improvements',
      'Legacy system improvements',
      'Ongoing maintenance',
    ],
    color: 'indigo',
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

/* The questions that otherwise get asked over email before anyone commits.
   Rendered as native <details>/<summary>, so they are keyboard-operable with
   no JavaScript, and mirrored into FAQPage JSON-LD by scripts/prerender.mjs. */
export const faqs = [
  {
    q: 'What does a project usually cost?',
    a: 'It depends on scope, but we scope before we quote. After the first conversation you get a written breakdown of the recommended solution, what it covers and the estimated effort — so you are comparing a real number against a real scope, not a range against a guess.',
  },
  {
    q: 'How long does a first version take?',
    a: 'Most first releases are measured in weeks rather than months, because the first version is deliberately scoped to prove the idea and carry real users. Larger operational systems take longer, and we say so during scoping rather than after.',
  },
  {
    q: 'Who owns the code?',
    a: 'You do. You get the repository, the deployment setup and the documentation. There is no lock-in to us as a vendor, and nothing in the stack that only we can maintain.',
  },
  {
    q: 'Will you sign an NDA?',
    a: 'Yes. Send yours over before the first conversation, or ask and we will provide one.',
  },
  {
    q: 'What happens after launch?',
    a: 'Launch is a milestone, not the end of the engagement. We continue improving, maintaining and supporting the app — and if you would rather take it in-house, the handover is part of the work, not an extra.',
  },
  {
    q: 'Do you work with clients outside Malaysia?',
    a: 'Yes. We are based in Malaysia and work with clients internationally. Most collaboration is asynchronous, with calls scheduled around your timezone.',
  },
];

/* Social proof. Both arrays are intentionally empty — Proof.jsx renders nothing
   until they are filled, because invented case studies and placeholder numbers
   damage credibility more than an absent section does.

   proofStats: [{ label: 'Projects delivered', value: '20+' }]
   caseStudies: [{ title, problem, built, outcome }] — real projects only, with
   the client's permission, or anonymised ('a Klang Valley rental operator'). */
export const proofStats = [];
export const caseStudies = [];
