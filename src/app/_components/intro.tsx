import { CMS_NAME } from "@/lib/constants";
import EmblaCarousel from "./carousel/mainCarousel";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Vinylify.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-60">
      Welcome to Vinylify, your premier destination for all things vinyl records. Dive into a meticulously curated collection of articles, reviews, and insights, celebrating the timeless allure of vinyl. Explore the rich history, discover rare gems, and stay updated on the latest releases. Vinylify is more than just a blog; it's a community of passionate enthusiasts sharing their love for analog sound in a digital world. Join us on this journey as we spin stories, one groove at a time. A library for Vinyl Records written in{" "}
        <a
          href="https://nextjs.org/"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
          Next.js
        </a>{" "}
        and {CMS_NAME}.
      </h4>
    </section>
  );
}
