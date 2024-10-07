import {
  building,
  camera,
  coffee,
  contact,
  css,
  dollar,
  express,
  figma,
  git,
  github,
  html,
  javascript,
  lespetitsplats,
  linkedin,
  mariadb,
  mongodb,
  motion,
  mui,
  mysql,
  nextjs,
  nodejs,
  php,
  react,
  redux,
  sass,
  sport,
  tailwindcss,
  typescript,
  vercel,
  vitejs,
  woocommerce,
  wordpress,
} from "../assets/icons";
import { erdus, gmf, minarm, psa } from "../assets/images";

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: vitejs,
    name: "Vitejs",
    type: "Frontend",
  },
  {
    imageUrl: php,
    name: "PHP",
    type: "Backend",
  },
  {
    imageUrl: wordpress,
    name: "WordPress",
    type: "CMS",
  },
  {
    imageUrl: woocommerce,
    name: "WooCommerce",
    type: "CMS",
  },
  {
    imageUrl: figma,
    name: "Figma",
    type: "Design",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: mysql,
    name: "MySql",
    type: "Database",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: mariadb,
    name: "MariaDB",
    type: "Database",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: vercel,
    name: "Vercel",
    type: "Version Control",
  },
];

export const experiences = [
  {
    title: "Freelance Web Developer",
    company_name: "Erdus",
    icon: erdus,
    iconBg: "#333333",
    date: "Oct. 2023 - Present",
    points: [
      "Optimization of online presence",
      "Creation and maintenance of showcase or e-commerce sites",
      "Training in the use of digital tools",
    ],
  },
  {
    title: "Assistant Project Manager",
    company_name: "French Ministry of Armed Forces",
    icon: minarm,
    iconBg: "#fbc3bc",
    date: "Oct. 2019 - Aug. 2021",
    points: [
      "BIM (Building Information Modeling) project monitoring",
      "Production of functional specifications",
      "Market research on CAD (Computer Aided Design) software",
    ],
  },
  {
    title: "IT and logistics manager",
    company_name: "GMF",
    icon: gmf,
    iconBg: "#accbe1",
    date: "Aug. 2017 - Aug. 2019",
    points: ["IT Asset Manager", "Support technician"],
  },
  {
    title: "SharePoint Administrator",
    company_name: "PSA Peugeot-Citroën",
    icon: psa,
    iconBg: "#dddddd",
    date: "Sept. 2015 - Aug. 2016",
    points: ["SharePoint referent and developer"],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: lespetitsplats,
    theme: "btn-back-orange",
    name: "Les Petits Plats",
    description: "Developed a complex search algorithm for a recipe website.",
    link: "https://esseb92.github.io/OCReactProjet7_LesPetitsPlats/",
  },
  {
    iconUrl: figma,
    theme: "btn-back-yellow",
    name: "FigPro",
    description: "Developed a clone of the Figma web application.",
    link: "https://figma-clone-zeta-one.vercel.app/",
  },
  {
    iconUrl: coffee,
    theme: "btn-back-blue",
    name: "Simple Coffee",
    description:
      "Developed a web application that implements a reusable card component with different variables.",
    link: "https://dev-challenge-io-simple-coffee-listing.vercel.app/",
  },
  {
    iconUrl: dollar,
    theme: "btn-back-green",
    name: "Argent Bank",
    description:
      "Developed a web application enabling customers to log in and manage their accounts and profiles.",
    link: "https://oc-react-projet13-argent-bank.vercel.app/",
  },
  {
    iconUrl: sport,
    theme: "btn-back-black",
    name: "SportSee",
    description:
      "Developed the site's profile page, enabling users to track the number of sessions completed and calories burned.",
    link: "https://oc-react-projet12-sport-see-frontend.vercel.app/",
  },
  {
    iconUrl: building,
    theme: "btn-back-red",
    name: "Kasa",
    description:
      "Developed a new web application for a real estate agency referencing the various properties.",
    link: "https://oc-react-projet11-kasa-3eme.vercel.app/",
  },
  {
    iconUrl: camera,
    theme: "btn-back-pink",
    name: "Fisheye",
    description:
      "Developed a website that allows freelance photographers to showcase their best work.",
    link: "https://esseb92.github.io/OCReactProjet6_Fisheye/",
  },
];
