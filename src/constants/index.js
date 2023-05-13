import {
  leetcode,
  gitpull,
  twitter,
  linkedin,
  chesslondon,
  mobile,
  backend,
  creator,
  web,
  chess,
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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  github,
  java,
  ruylopezop,
  siciliandefenceopvariation,
  frenchdefenceopvariation,
  pubg,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "chess",
    title: "Chess",
  },
];

const services = [
  {
    title: "Web Developent",
    icon: web,
  },
  {
    title: "Devops",
    icon: mobile,
  },
  {
    title: "Data Structures & Algoritms",
    icon: backend,
  },
  
  {
    title: "Computer Net Working",
    icon: creator,
  },
];

const contactservices = [
  {
    title: "Web Developent",
    icon: web,
  },
  {
    title: "Devops",
    icon: mobile,
  },
  {
    title: "Data Structures & Algoritms",
    icon: backend,
  },
  
  {
    title: "Computer Net Working",
    icon: creator,
  },
];

const chessservices = [
  {
    title: "London System",
    icon: chesslondon,
  },
  {
    title: "Ruy Lo pez Variation",
    icon: ruylopezop,
  },
  {
    title: "Sicilian Defence",
    icon: siciliandefenceopvariation,
  },
  
  {
    title: "French Defence",
    icon: frenchdefenceopvariation,
  },
];


const technologies = [
  {
    name:"java",
    icon:java,
  },

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
    name: "React JS",
    icon: reactjs,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "chess",
    icon: chess,
  },
];

const experiences = [
  {
    title: "BGMI Hub",
    company_name: "Krafton",
    icon: web,
    iconBg: "#383E56",
    date: "March 2020 - April 2022",
    points: [
      "Landing Page of game Lobby.",
      "Weapons that are mostly liked by players all time.",
      "Redirecting to the history of them.",
    ],
  },
  {
    title: "Text Analyzer",
    company_name: "code with baby",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "April 2022 - May 2022",
    points: [
      "A React website that helps users to modify the text.",
      "Summarizes the text, ReadTime Counter.",
      "Folks can toggle between light and dark themes.",
    ],
  },
  {
    title: "Go-to Resource",
    company_name: "Bhaskar Nation",
    icon: web,
    iconBg: "#383E56",
    date: "July 2022 - Aug 2022",
    points: [
      "MERN Application to provide ultimate references to learn Development.",
      "People can contribute best resources to the community.",
      "A complete responsive and interactive website.",
    ],
  },
  {
    title: "TicTacToe",
    company_name: "Yogesh Baby",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "August 2022",
    points: [
      "A user interactive TicTacToe Game.",
      "Built with Java, integrate with website in future.",
      "Two player game, inspires from LeetCode Problem",
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

export { services, technologies, experiences, testimonials, projects, chessservices, contactservices };
