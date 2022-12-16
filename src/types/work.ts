interface ImageAlbumItem {
  id: string;
  imageUrl: string;
  name?: string;
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
}
