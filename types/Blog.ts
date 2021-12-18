import { TComment } from "./Comment";

export type TBlog = {
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
  slug: string;
  comments: TComment[];
  createdAt: string;
};
