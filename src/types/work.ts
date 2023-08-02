interface ProjectLinks {
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

export interface SkillsAndTechnologiesItem {
  key: string;
  title?: string;
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
export interface IWorkItem {
  id: string;
  title: string;
  description?: string;
  category: string;
  projectLinks?: ProjectLinks;
  isFeatured?: boolean;
  createdAt: Date;
  screenSaver?: string;
  skillsAndTechnologies?: SkillsAndTechnologiesItem[];
  imageAlbum?: ImageAlbumItem[];
  video: VideoItem;
}
