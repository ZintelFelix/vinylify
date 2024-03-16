export type Post = {
  slug: string;
  title: string;
  artist: string;
  genre: string;
  yor: string;
  coverImage: string;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
};
