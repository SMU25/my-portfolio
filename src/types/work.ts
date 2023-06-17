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

interface ProjectLinks {
  deployedProjectName?: string;
  deployedProjectUrl?: string;
  githubProjectUrl?: string;
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
  imageAlbum?: ImageAlbumItem[];
  video: VideoItem;
}
