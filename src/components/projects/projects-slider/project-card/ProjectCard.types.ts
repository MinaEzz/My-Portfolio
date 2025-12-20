type TProjectType = "frontend" | "fullstack";

export default interface IProjectCardProps {
  image: string;
  title: string;
  technologies: string[];
  githubLink: string;
  liveDemoLink: string;
  projectType: string;
}
