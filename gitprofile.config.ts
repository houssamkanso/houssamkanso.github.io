// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'houssamkanso', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        //projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Houssam Kanso',
    description: 'Ph.D. | Computer Science Researcher and Engineer',
    imageURL: '',
  },
  social: {
    linkedin: 'houssamkanso',
    twitter: '',
    mastodon: '',
    googlescolar: 'fucKNAcAAAAJ',
    researchGate: 'Houssam-Kanso',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '+33 7 87 40 41 26',
    email: 'houssam.kanso@univ-pau.fr',
    emaill: 'houssam_kanso@hotmail.com', // add information here, and in global.d.ts, global.tsx, sanitized-config.tsx, and detailed-card/index.tsx
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1OW2atAzR-Kw5iSKe8_kq-a3krZBJ3ux5/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    'Nest.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'PHPUnit',
    'CSS',
    'Antd',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Company Name',
      position: 'Position',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    },
  ],
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2012',
      to: '2014',
    },
  ],
  publications: [
    {
      title: 'A preliminary study of the energy impact of software in raspberry pi devices',
      conferenceName: '2020 IEEE 29th International Conference on Enabling Technologies: Infrastructure for Collaborative Enterprises (WETICE)',
      journalName: '',
      authors: 'K Kesrouani, H Kanso, A Noureddine',
      link: 'https://example.com',
      description:
        '',
    },
    {
      title: 'Automated power modeling of computing devices: Implementation and use case for Raspberry Pis',
      conferenceName: '',
      journalName: 'Sustainable Computing: Informatics and Systems',
      authors: 'H Kanso, A Noureddine, E Exposito',
      link: 'https://example.com',
      description:
        '',
    },
    {
      title: 'A Review of Energy Aware Cyber-Physical Systems',
      conferenceName: '',
      journalName: 'T&F Cyber-Physical Systems',
      authors: 'H Kanso, A Noureddine, E Exposito',
      link: 'https://example.com',
      description:
        '',
    },
    {
      title: 'CPU Power Bench: An Automated Benchmark Tool for Power Estimation in Single-Board Computers',
      conferenceName: '9th International Conference on Information and Communications Technology for Sustainability',
      journalName: '',
      authors: 'H Kanso, A Noureddine, E Exposito',
      link: 'https://example.com',
      description:
        '',
    },
    {
      title: 'An automated energy management framework for smart homes',
      conferenceName: '',
      journalName: 'Journal of Ambient Intelligence and Smart Environments',
      authors: 'H Kanso, A Noureddine, E Exposito',
      link: 'https://example.com',
      description:
        '',
    },
    {
      title: 'A Preliminary Study of the Impact of Code Coverage on Software Energy Consumption',
      conferenceName: '36th IEEE/ACM International Conference on Automated Software Engineering Workshops (ASEW)',
      journalName: '',
      authors: 'A Noureddine, M Martinez, H Kanso',
      link: 'https://example.com',
      description:
        '',
    },
    {
      title: '[Ph.D. Thesis] Contributing to the Energy Efficiency of Smart Homes: An Automated Management Framework',
      conferenceName: 'Université de Pau et des Pays de l\'Adour',
      journalName: '',
      authors: 'H Kanso',
      link: 'https://example.com',
      description:
        '',
    },
    {
      title: 'Is well-tested code more energy efficient?',
      conferenceName: 'Workshops at 18th International Conference on Intelligent Environments (IE2022)',
      journalName: '',
      authors: 'A Noureddine, M Martinez, H Kanso, N Bru',
      link: 'https://example.com',
      description:
        '',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'corporate',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
