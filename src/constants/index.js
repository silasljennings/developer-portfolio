export const navLinks = [
  {
    id: 1,
    name: '',
    href: '#home',
  },
  {
    id: 2,
    name: 'Bio',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Cashboard App - Geolocation Digital Rewards System',
    desc: 'Cashboard App is a new and innovative way to connect vendors to consumers via digital rewards. It allows brands to configure and gamify the delivery of digital offers trough geo lotteries as well as event based scenarios.',
    subdesc:
      'Built as a consumer phone app with SwiftUI and Firebase is designed for user reach. Vendor platform built with Angular, Typescript, Firebase and GCP for max performance and scalability. This application is approaching launch.',
    href: 'https://www.cashboardapp.co',
    texture: '/textures/project/project1.mp4', //TODO:
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png', //TODO:
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 3,
        name: 'Firebase',
        path: '/assets/typescript.png', //TODO:
      },
    ],
  },
  {
    title: 'Dirty Santa Gift - Christmas Ecommerce platform',
    desc: 'dirtysantagift.com is a seasonal ecommerce platform centered around providing awesome dirty/secret santa gifts.',
    subdesc:
      'Built as a web application with React, Tailwind CSS, TypeScript, and Firebase Functions. Currently in active development.',
    href: 'https://www.dirtysantagift.com',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
    ],
  },
  {
    title: 'Dev Converters - All in one file and type converter',
    desc: 'devconverters.com is your go-to tool for quick data formatting and conversions. Whether you\'re working with timestamps, numbers, or other developer assets, this tool simplifies the process in just one field and one click.',
    subdesc:
      'Built as a web application with React, Tailwind CSS, and TypeScript. This application is approaching maturity.',
    href: 'https://www.devconverters.com',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
    ],
  },
  {
    title: 'Dev Deviants - Personal Brand',
    desc: 'devdeviants.com is my personal brand where I host my tech blog and the portfolio you are currently viewing.',
    subdesc:
      'Built as a web application with React, Vite, Tailwind CSS, TypeScript, and Jekyll. This application is ongoing and actively being updated as I grow my experience through my work and interactions.',
    href: 'https://www.devdeviants.com',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Vite',
        path: '/assets/react.svg',
      },
      {
        id: 3,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 4,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 5,
        name: 'Jekyll',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Altec Industries, Inc',
    pos: 'Senior Software Developer',
    duration: '2022 - Present',
    icon: '/assets/framer.svg', //TODO:
    title: "Engineered AWS- and IoT-enabled, containerized microservices with Angular/Spring Boot UIs and Docker/Python tooling to process, analyze, and optimize ETL for over a billion telematics signals.",
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Cent Holdings, LLC',
    pos: 'Full Stack Software Engineer',
    duration: '2020 - 2022',
    title: "Spearheaded the end-to-end development of a high-performance financial analytics platform—integrating private cloud Kubernetes clusters, Bloomberg Terminal, Wolfram notebooks, and VMWare virtualization—to process sub-second market data for 500+ securities while delivering custom user management and story-driven product requirements",
    icon: '/assets/figma.svg', //TODO:
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Intuitive Research & Technology',
    pos: 'Software Development Engineer',
    duration: '2019 - 2020',
    title: "Developed and maintained the Aviation Mission Planning System (AMPS) using C#, .NET, and Node.js to deliver secure, combat-ready pre-flight planning and in-flight analysis tools for US Army Blackhawk and Chinook helicopter pilots.",
    icon: '/assets/notion.svg', //TODO:
    animation: 'salute',
  },
  {
    id: 4,
    name: 'NASA',
    pos: 'Software Developer Intern',
    duration: '2018 - 2018',
    title: "Developed Advanced Concepts Office plugins that automated cross-disciplinary data aggregation—partnering with propulsion, aerospace, materials, and rocket engineers—to streamline project workflows and save management 10 hours per sprint.",
    icon: '/assets/notion.svg', //TODO:
    animation: 'clapping',
  },
];
