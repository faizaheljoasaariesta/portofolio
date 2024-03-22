import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  fablab,
  mesinIndonesia,
  carrent,
  jobit,
  tripguide,
  firebase,
  instagramContact,
  linkedinContact,
  githubContact,
} from "../assets";

export const navLinks = [
  {
    id: "About",
    title: "About",
  },
  {
    id: "Experience",
    title: "Experience",
  },
  {
    id: "Skills",
    title: "Skills",
  },
];

const services = [
  {
    title: "Full-Stack Web Developer",
    icon: web,
  },
  {
    title: "IoT System Developer",
    icon: mobile,
  },
  {
    title: "DevOps Engineer",
    icon: backend,
  },
  {
    title: "Instrumentation Control",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full-Stack Developer Intern",
    company_name: "PT. Arqom Technology Innovation Mesin Indonesia",
    icon: mesinIndonesia,
    iconBg: "#383E56",
    date: "Septamber 2022 - February 2023",
    points: [
      "Lead in the design, development, and implementation of the graphic, layout, and production communication materials.",
      "Created an attractive responsive appearance in all devices owned by all customers.",
      "Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design. Assist in the development of a portfolio of company profiles that are very influential in achieving work patnership",
    ],
  },
  {
    title: "Front-End Developer Freelance",
    company_name: "Fabrication Laboratory Jogjakarta (UGM)",
    icon: fablab,
    iconBg: "#E6DEDD",
    date: "December 2022 - Present",
    points: [
      "Updated the appearance of the company profile according to the desk job you have.",
      "Provided convenience in using the website creation technology they want.",
      "Contribute to the smoothness of achieving the target market by collaborating to create a professional company profile for the company.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

const socials = [
  {
    name: "instagram",
    src: instagramContact,
    link: "https://www.instagram.com/faizzahell/",
  },
  {
    name: "linkedin",
    src: linkedinContact,
    link: "https://www.linkedin.com/in/faizahel/",
  },
  {
    name: "github",
    src: githubContact,
    link: "https://github.com/faizaheljoasa",
  },
];

export { services, technologies, experiences, testimonials, projects, socials };