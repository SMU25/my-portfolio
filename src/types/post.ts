interface PostImg {
  url: "";
  title?: "";
}

export interface IPostItem {
  id: string;
  title: string;
  description?: string;
  category: string;
  createdAt: Date;
  img?: PostImg;
}
