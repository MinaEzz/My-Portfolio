export type TProjectType = "frontend" | "fullstack" | "wordpress";

export type TProject = {
  id: number;
  created_at: string;
  image: string;
  title: string;
  technologies: string[];
  githubLink: string | null;
  liveDemoLink: string | null;
  projectType: TProjectType;
  isPrivate: boolean;
};

export interface IProjectsApiResponse {
  status: "SUCCESS" | "ERROR";
  data?: TProject[];
  message?: string;
}
