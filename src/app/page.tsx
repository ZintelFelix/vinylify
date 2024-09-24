import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "../lib/api";
import EmblaCarousel from "./_components/carousel/mainCarousel";

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
        {/* Pass all posts to the EmblaCarousel */}
        <EmblaCarousel posts={allPosts} />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}
