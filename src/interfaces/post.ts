import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const post = await prisma.post.findUnique({
  where: {
    id: 0o1,
  },
})

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
