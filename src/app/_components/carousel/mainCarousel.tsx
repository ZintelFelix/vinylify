"use client"
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Link from 'next/link'; // Stelle sicher, dass dies importiert wird, falls du Next.js nutzt
import React from "react";

// Beispiel-Typ für Props
type Props = {
  posts: Array<{
    slug: string;
    coverImage: string;
    title: string;
    artist: string;
    genre: string;
    yor: string;
  }>;
};

export default function EmblaCarousel({ posts }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (!emblaApi) return;

    const autoPlay = setInterval(() => {
      emblaApi.scrollNext(); // Scroll to the next slide
    }, 4000); // 4 seconds interval

    return () => clearInterval(autoPlay); // Clear interval on component unmount
  }, [emblaApi]);

  return (
    <div className="overflow-hidden max-w-screen-lg max-h-30 mx-auto" ref={emblaRef}>
      <div className="flex transition-transform duration-1000 ease-in-out">
        {posts.map((post) => (
          <div className="flex-[0_0_100%] min-w-0 relative group" key={post.slug}>
            {/* Cover Image */}
            <img
              src={post.coverImage}
              className="object-cover w-full h-30"
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
