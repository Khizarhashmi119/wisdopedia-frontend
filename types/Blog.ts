export type Blog = {
  _id: string;
  title: string;
  author: string;
  description: string;
  content: string;
  categories: {
    name: string;
  }[];
  tags: string[];
  cover: string;
  createdAt: string;
};
