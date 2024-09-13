export interface Author {
  name: string;
  avatar: string; // URL hoặc chuỗi rỗng
  position: string;
}

export interface Blog {
  id: number;
  title: string;
  author: Author;
  date: string;
  content: string;
  description: string;
  tags: string[];
  comments: number;
  thumb: string;
  slug: string;
}
