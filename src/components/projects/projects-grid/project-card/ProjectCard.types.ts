type TProjectType = "frontend" | "fullstack" | "wordpress";

export default interface IProjectCardProps {
  image: string;
  title: string;
  technologies: string[];
  githubLink: string | null;
  liveDemoLink: string | null;
  projectType: TProjectType;
  isPrivate: boolean;
}
