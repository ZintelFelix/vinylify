
import Link from "next/link";
import CoverImage from "./cover-image";

type Props = {
  title: string;
  coverImage: string;
  excerpt: string;
  slug: string;
  artist: string;
  genre: string;
  yor: string;
};

export function PostPreview({
  title,
  coverImage,
  excerpt,
  slug,
}: Props) {
  return (
    <div>
      <div className="mb-1 border flex justify-end">
        <CoverImage slug={slug} title={title} src={coverImage} />
        <div className="flex-grow font-bold"> 
          {title}
        </div>
      </div>
      <h3 className="text-2xl leading-snug">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="hover:underline"
        >
        </Link>
      </h3>
    </div>
  );
}
