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
  smeshub,
  kmdts,
  aditya,
  setiawan,
  marshafita,
  marhaendra,
  webMesinIndonesia,
  webFablab,
  webKmdts,
  firebase,
  instagramContact,
  linkedinContact,
  githubContact,
  dbsExpert,
  dbsIntermediate,
  harisenin,
  dicodingAws,
  dicodingBackend,
  dicodingDevops,
  cyberscurity,
  networking,
  configuration,
} from "../assets";

export const navLinks = [
  {
    id: "maintenance",
    title: "About",
  },
  {
    id: "certificate",
    title: "Certificate",
  },
  {
    id: "contact",
    title: "Contact",
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
  {
    title: "Consultants and Software Engineers Outsourcing",
    company_name: "PT. Smeshub Bangun Negeri",
    icon: smeshub,
    iconBg: "#383E56",
    date: "March 2023 - Septamber 2023",
    points: [
      "Providing services related to the importance of a website in developing a company profile.",
      "Expert services in realizing the results of the consultation in the form of building a company profile website for startups.",
      "Collaborating in providing services to MSME and startup actors in building professional companies that meet standards in providing the convenience of their clients.",
    ],
  },
  {
    title: "Front-End Developer Freelance",
    company_name: "Keluarga Mahasiswa Departemen Teknik Sipil",
    icon: kmdts,
    iconBg: "#E6DEDD",
    date: "April 2024 - Present",
    points: [
      "The website is optimized to display well on a variety of devices, including desktops, tablets, and smartphones. This will ensure user experience.",
      "Design a layout and visual design that matches the organization's identity. An attractive design will increase visitor attraction and increase positive impressions about the organization.",
      "Services are tailored to an organization's specific needs. We work closely with organizations to understand needs and provide solutions that suit the organization's vision and goals.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Faizahel proved me wrong.",
    name: "Aditya Ramadhona",
    designation: "CEO",
    company: "Mesin Indonesia",
    image: aditya,
  },
  {
    testimonial:
      "Quality work performance, and friendly cooperation in continuing to update the company website.",
    name: "Setiawan",
    designation: "COO",
    company: "FabLab Jogjakarta",
    image: setiawan,
  },
  {
    testimonial:
      "Communication skills are commendable. SMEsHub is a trusted partner for businesses seeking IT consultant.",
    name: "Marshafita Syafitri",
    designation: "BAM",
    company: "SMEsHub",
    image: marshafita,
  },
  {
    testimonial:
      "Very helpful in building a website that helps our organization, and determining the layout of beautiful website content",
    name: "Marhaendra Adhi",
    designation: "Leader",
    company: "KMDTS - SV UGM",
    image: marhaendra,
  },
];

const projects = [
  {
    name: "Web - Mesin Indonesia",
    description:
      "Web company profile which aims to facilitate communication, equipped with a contact feature that can directly order the desired machine product, or simply provide a consultation.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: webMesinIndonesia,
    source_code_link: "https://mesinindonesia.com/",
  },
  {
    name: "Web - Fablab Jogjakarta",
    description:
      "Web company profile which is useful as a means of introducing the company's background by explaining several services and as a learning website for Public/MSMEs.",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "PageBuilder",
        color: "pink-text-gradient",
      },
    ],
    image: webFablab,
    source_code_link: "https://fablabjogja.ditpui.ugm.ac.id/",
  },
  {
    name: "Web - KMDTS SV UGM",
    description:
      "This organization's web profile is a formal communication tool for the general public, in understanding the organization's activities, and as a means of updating events being held.",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "PageBuilder",
        color: "pink-text-gradient",
      },
    ],
    image: webKmdts,
    source_code_link: "https://kmdts.sv.ugm.ac.id/",
  },
];

const certificates = [
  {
    name: "Full-Stack Web Developer",
    description:
      "Bootcamp held at Harisenin.com with learning material on understanding components, styling, ERD/database, and several lessons related to Full-Stack Web Developer.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: harisenin,
    source_code_link: "https://drive.google.com/file/d/1D9OigXffSw2moG6nNdRVSCoYvCLvqR0x/view?usp=sharing",
  },
  {
    name: "DevOps Intermediate",
    description:
      "Training held by Bank DBS Foundation together with Dicoding which trains in integration specs and communication between other developers, thereby forming a stable ecosystem.",
    tags: [
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
      {
        name: "Networking",
        color: "green-text-gradient",
      },
      {
        name: "Linux System",
        color: "pink-text-gradient",
      },
    ],
    image: dbsIntermediate,
    source_code_link: "https://drive.google.com/file/d/1xxur7sXGq5hrP_nEvH7MGuhLAwVvmSoe/view?usp=sharing",
  },
  {
    name: "DevOps Engineer Expert",
    description:
      "This training also comes from the Bank DBS Foundation as an advanced class to become a DevOps Engineer Expert. In this training I became the best graduate on a national scale.",
    tags: [
      {
        name: "CI/CD",
        color: "blue-text-gradient",
      },
      {
        name: "Microservice",
        color: "green-text-gradient",
      },
      {
        name: "Monitoring",
        color: "pink-text-gradient",
      },
    ],
    image: dbsExpert,
    source_code_link: "https://drive.google.com/file/d/1eNMA3qvEpm4cWHWevRYZVNrHWASPjWkF/view?usp=sharing",
  },
  {
    name: "DevOps Basics",
    description:
      "This training is provided by Dicoding Indonesia as a learning class related to the basics and tools used in operating DevOps together and with one goal.",
    tags: [
      {
        name: "Pipeline",
        color: "blue-text-gradient",
      },
      {
        name: "Workplace",
        color: "green-text-gradient",
      },
      {
        name: "Cloud",
        color: "pink-text-gradient",
      },
    ],
    image: dicodingDevops,
    source_code_link: "https://drive.google.com/file/d/17EFEKBvaREeOfolsUEr-Nl5Bw4Qn6-GP/view?usp=sharing",
  },
  {
    name: "Backend Web Developer",
    description:
      "This training was provided by Dicoding Indonesia as initial learning in understanding the concept of creating a Backend system and some of the risks involved.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Node JS",
        color: "green-text-gradient",
      },
      {
        name: "Postman",
        color: "pink-text-gradient",
      },
    ],
    image: dicodingBackend,
    source_code_link: "https://drive.google.com/file/d/1ZjVJtpJv5cwPhQKx4Dijlcy4UGqA0w6H/view?usp=sharing",
  },
  {
    name: "Cloud Engineer AWS",
    description:
      "This training supports understanding of being a Backend Engineer. Systematic Cloud must and is necessary in understanding and placing the database to be created.",
    tags: [
      {
        name: "DynamoDB",
        color: "blue-text-gradient",
      },
      {
        name: "CloudWatch",
        color: "green-text-gradient",
      },
      {
        name: "Snow Family",
        color: "pink-text-gradient",
      },
    ],
    image: dicodingAws,
    source_code_link: "https://drive.google.com/file/d/1BdtHHvRzwmUp4FlWbp7DdFG8TYhSBTPj/view?usp=sharing",
  },
  {
    name: "Introduction Cyberscurity",
    description:
      "The certification issued by Cisco Academy in understanding cyber security which can secure and maintain a website from hacking or malware that endangers its database.",
    tags: [
      {
        name: "Authentication",
        color: "blue-text-gradient",
      },
      {
        name: "Encryption",
        color: "green-text-gradient",
      },
      {
        name: "BackUp",
        color: "pink-text-gradient",
      },
    ],
    image: cyberscurity,
    source_code_link: "https://drive.google.com/file/d/1IosQumpcRGQWgY2OvJPjkKPfHBjqaicY/view?usp=sharing",
  },
  {
    name: "Networking Basics",
    description:
      "The certification issued by Cisco Academy in understanding a network that is used for communication between several computers in the same or different places.",
    tags: [
      {
        name: "Protocol",
        color: "blue-text-gradient",
      },
      {
        name: "Routing",
        color: "green-text-gradient",
      },
      {
        name: "Testing",
        color: "pink-text-gradient",
      },
    ],
    image: networking,
    source_code_link: "https://drive.google.com/file/d/1vRh9TGX0Gj6BIxdUtwcNZ9pfWpheIvSG/view?usp=sharing",
  },
  {
    name: "Initial Configuration",
    description:
      "The certification issued by Cisco Academy in the application of previous training is in the form of several initial configurations, process of configuring a system through a network.",
    tags: [
      {
        name: "Webster",
        color: "blue-text-gradient",
      },
      {
        name: "Configure",
        color: "green-text-gradient",
      },
      {
        name: "ICMP",
        color: "pink-text-gradient",
      },
    ],
    image: configuration,
    source_code_link: "https://drive.google.com/file/d/1Qq3CAFozeK5tOewwY8eLB7yaQ7NLLoU_/view?usp=sharing",
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

export { services, technologies, experiences, testimonials, projects, certificates, socials };