import { FaHome, FaUserAlt, FaFolderOpen, FaPhoneAlt } from "react-icons/fa";
import { BsEnvelopeAtFill } from "react-icons/bs";
import { FaMessage } from "react-icons/fa6";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";
import HTML_LOGO from "../assets/icons/HTML.svg";
import CSS_LOGO from "../assets/icons/CSS.svg";
import JS_LOGO from "../assets/icons/JS.svg";
import BOOTSTRAP_LOGO from "../assets/icons/BOOTSTRAP.svg";
import JQUERY_LOGO from "../assets/icons/JQUERY.svg";
import REACT_LOGO from "../assets/icons/REACT.svg";
import TAILWIND_LOGO from "../assets/icons/TAILWIND.svg";
import TS_LOGO from "../assets/icons/TS.svg";
import NODE_LOGO from "../assets/icons/NODE.svg";
import MONGODB_LOGO from "../assets/icons/MONGODB.svg";
import NEXT_LOGO from "../assets/icons/NEXT.svg";
import REDUX_LOGO from "../assets/icons/REDUX.svg";
import GIT_LOGO from "../assets/icons/GIT.svg";
import GITHUB_LOGO from "../assets/icons/GITHUB.svg";
import NPM_LOGO from "../assets/icons/NPM.svg";
import POSTMAN_LOGO from "../assets/icons/POSTMAN.svg";
import PRISMA_LOGO from "../assets/icons/PRISMA.svg";
import ZOD_LOGO from "../assets/icons/ZOD.svg";

export const NAVIGATION_LINKS = [
  {
    icon: <FaHome />,
    label: "Home",
    href: "/",
  },
  {
    icon: <FaUserAlt />,
    label: "About Me",
    href: "/about",
  },
  {
    icon: <FaFolderOpen />,
    label: "Projects",
    href: "/projects",
  },
  {
    icon: <FaMessage />,
    label: "Contact Me",
    href: "/contact",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/MinaSuleiman19",
    icon: <FaFacebook />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/_minasuleiman",
    icon: <FaInstagram />,
  },
  {
    name: "Twitter",
    href: "https://x.com/_MinaSuleiman",
    icon: <FaXTwitter />,
  },
  {
    name: "Github",
    href: "https://github.com/MinaEzz",
    icon: <FaGithub />,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/mina-ezzat-16a541218",
    icon: <FaLinkedin />,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/201016056294",
    icon: <FaWhatsapp />,
  },
];

export const ABOUT_TEXT = [
  "I graduated from the Faculty of Business Information Systems (BIS) in 2024, where I gained a solid foundation in business management principles.",
  "I started studying software development in 2022, and quickly developed a passion for frontend development. Over time, I specialized in creating modern, responsive, and user-friendly web interfaces.",
  "Although my main focus is frontend development, I also have experience with backend technologies and databases. I have completed several full MERN stack projects and understand how to integrate the frontend with backend systems efficiently.",
  "I have been working in professional companies for over a year, contributing to real-world projects and collaborating with teams to deliver high-quality web applications. This experience has strengthened my problem-solving skills and understanding of industry best practices.",
];

export const SKILLS = [
  { name: "HTML", icon: HTML_LOGO, ariaLabel: "HTML logo" },
  { name: "CSS", icon: CSS_LOGO, ariaLabel: "CSS logo" },
  { name: "JavaScript", icon: JS_LOGO, ariaLabel: "JavaScript logo" },
  { name: "Bootstrap", icon: BOOTSTRAP_LOGO, ariaLabel: "Bootstrap logo" },
  { name: "jQuery", icon: JQUERY_LOGO, ariaLabel: "jQuery logo" },
  { name: "NPM", icon: NPM_LOGO, ariaLabel: "NPM logo" },
  { name: "React", icon: REACT_LOGO, ariaLabel: "ReactJS logo" },
  { name: "Tailwind CSS", icon: TAILWIND_LOGO, ariaLabel: "Tailwind CSS logo" },
  { name: "Redux", icon: REDUX_LOGO, ariaLabel: "Redux logo" },
  { name: "Prisma", icon: PRISMA_LOGO, ariaLabel: "Prisma logo" },
  { name: "Node JS", icon: NODE_LOGO, ariaLabel: "NodeJS logo" },
  { name: "MongoDB", icon: MONGODB_LOGO, ariaLabel: "MongoDB logo" },
  { name: "Postman", icon: POSTMAN_LOGO, ariaLabel: "Postman logo" },
  { name: "TypeScript", icon: TS_LOGO, ariaLabel: "TypeScript logo" },
  { name: "Next JS", icon: NEXT_LOGO, ariaLabel: "NextJS logo" },
  { name: "Git", icon: GIT_LOGO, ariaLabel: "Git logo" },
  { name: "GitHub", icon: GITHUB_LOGO, ariaLabel: "GitHub logo" },
  { name: "Zod", icon: ZOD_LOGO, ariaLabel: "Zod logo" },
];

export const CONTACT_INFO = [
  {
    icon: <BsEnvelopeAtFill />,
    title: "Reach Me By Email",
    value: "minaezzat98@gmail.com",
    href: "mailto:minaezzat98@gmail.com",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Call Me Anytime",
    value: "+201016056294",
    href: "tel:+201016056294",
  },
];

export const FILTER_OPTIONS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Front-End",
    value: "frontend",
  },
  // {
  //   label: "Back-End",
  //   value: "backend",
  // },
  {
    label: "Full-Stack",
    value: "fullstack",
  },
  // {
  //   label: "Wordpress",
  //   value: "wordpress",
  // },
];
