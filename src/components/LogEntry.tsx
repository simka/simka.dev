import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  entry: {
    slug: string;
    content: string;
    image?: string;
    imageDimensions?: {
      width: string;
      height: string;
    };
  };
};

function LogEntry({ entry }: Props) {
  return (
    <article className="my-8 xl:my-12 2xl:my-16">
      <h1 className="underline mb-4">
        <Link href={`/log/${entry.slug}`}>
          <a>{entry.slug}</a>
        </Link>
      </h1>
      {entry.image ? (
        <Image
          src={entry.image}
          width={entry.imageDimensions.width}
          height={entry.imageDimensions.height}
        />
      ) : null}
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: entry.content }}
      />
    </article>
  );
}

export default LogEntry;
