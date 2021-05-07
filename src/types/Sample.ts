export type User = {
  id: string;
  email: string;
  name: string;
  createdAt: string;
};

export type Post = {
  id: string;
  user: string;
  title: string;
  body: string;
  createdAt: string;
};
