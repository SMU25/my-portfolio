interface Img {
  url: string;
  title?: string;
}

export interface IBlogPost {
  id: string;
  title: string;
  description?: string;
  category: string;
  createdAt: Date;
  img?: Img;
}
