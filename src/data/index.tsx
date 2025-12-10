import { FaHome, FaUserAlt, FaFolderOpen } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";

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

export const FLOAT_SOCIAL_MEDIA_LINKS = [
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
