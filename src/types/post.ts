interface PostImg {
  url: "";
  title?: "";
}

export interface IPostItem {
  id: string;
  title: string;
  message?: string;
  category: string;
  createdAt: Date;
  img?: PostImg;
}
