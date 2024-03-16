import Link from "next/link";
import CoverImage from "./cover-image";

type Props = {
  title: string;
  coverImage: string;
  slug: string;
  artist: string;
  genre: string;
  yor: string;
};

export function PostPreview({
  title,
  artist,
  genre,
  yor,
  coverImage,
  slug,
}: Props) {
  return (
    <div>
      <div className="mb-1 border flex justify-end items-center">
        <CoverImage slug={slug} title={title} src={coverImage} />
        <div className="flex-grow font-bold">
          <div>
            <span>Title:</span> {title}
          </div>
          <div>
            <span>Artist:</span> {artist}
          </div>
          <div>
            <span>Genre:</span> {genre}
          </div>
          <div>
            <span>Year:</span> {yor}
          </div>
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