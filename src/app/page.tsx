import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/Intro";
import { getAllPosts } from "../lib/api";
import EmblaCarousel from "./_components/carousel/mainCarousel";
import React from "react";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <Intro />
        <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
          My Vinyl Records
        </h2>
        <EmblaCarousel posts={allPosts} />
      </Container>
    </main>
  );
}
