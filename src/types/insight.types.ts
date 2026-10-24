export type TInsight = {
  id: number;
  created_at: string;
  image: string;
  title: string;
  excerpt: string;
  tags: string[];
  linkedInLink: string;
  readingTime: number;
  publishDate: string;
};

export interface IInsightsApiResponse {
  status: "SUCCESS" | "ERROR";
  data?: TInsight[];
  message?: string;
}
