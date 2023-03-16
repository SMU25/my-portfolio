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
  createdAt: Date;
  screenSaver?: string;
  imageAlbum?: ImageAlbumItem[];
  video: VideoItem;
}
