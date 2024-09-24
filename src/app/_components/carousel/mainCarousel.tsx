"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";

type Post = {
  title: string;
  artist: string;
  genre: string;
  yor: string;
  coverImage: string;
  slug: string;
};

type Props = {
  posts: Post[];
};

export function EmblaCarousel({ posts }: Props) {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {posts.map((post) => (
          <div className="flex-[0_0_100%] min-w-0 relative group" key={post.slug}>
            {/* Cover Image */}
            <img
              src={post.coverImage}
              alt={post.title}
              className="object-cover w-full h-full"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center text-white transition-opacity duration-300">
              <div className="text-center p-4">
                <h3 className="text-lg font-bold">{post.title}</h3>
                <p className="text-sm">Artist: {post.artist}</p>
                <p className="text-sm">Genre: {post.genre}</p>
                <p className="text-sm">Year: {post.yor}</p>
                <Link href={`/posts/${post.slug}`} className="mt-2 inline-block text-sm underline">
                  View More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmblaCarousel;
