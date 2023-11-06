import { SkillsAndTechnologiesItem } from "src/components/SkillsAndTechnologies/types";

interface links {
  github?: {
    title?: string;
    url: string;
  };
  deployed?: {
    title?: string;
    urlName?: string;
    url: string;
  };
}

export interface ImageAlbumItem {
  id: string;
  imageUrl: string;
  title?: string;
  description?: string;
}

export interface VideoItem {
  url: string;
  poster?: string;
  title?: string;
  description?: string;
}
export interface IPortfolioProject {
  id: string;
  title: string;
  description?: string;
  category: string;
  links?: links;
  isFeatured?: boolean;
  createdAt: Date;
  screenSaver?: string;
  skillsAndTechnologies?: SkillsAndTechnologiesItem[];
  imageAlbum?: ImageAlbumItem[];
  video: VideoItem;
}
