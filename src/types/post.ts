interface PostImg {
  url: string;
  title?: string;
}

export interface IPostItem {
  id: string;
  title: string;
  description?: string;
  category: string;
  createdAt: Date;
  img?: PostImg;
}
