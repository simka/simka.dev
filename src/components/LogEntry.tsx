import React from "react";
import Image from "next/image";
import Link from "next/link";
import cx from "classnames";
import { RichText } from "prismic-reactjs";
import { BlurhashCanvas } from "react-blurhash";

type Props = {
  preloadPhoto?: boolean;
  entry: {
    date: string;
    uid: string;
    photo?: {
      url: string;
      alt: string;
      copyright: string;
      dimensions: {
        width: number;
        height: number;
      };
      blurhash: any;
      imgProps: any;
    };
    content?: any;
  };
};

function LogEntry({ entry, preloadPhoto = false }: Props) {
  return (
    <article className="mb-11">
      <h1 className="underline mb-5">
        <Link href={`/log/${entry.uid}`}>
          <a>{entry.uid}</a>
        </Link>
      </h1>
      {entry.photo ? (
        <div className={cx("block", "relative", "overflow-hidden", "mb-5")}>
          <BlurhashCanvas
            {...entry.photo.blurhash}
            punch={1}
            className={cx("absolute", "inset-0")}
          />
          <Image
            src={entry.photo.url}
            alt={entry.photo.alt}
            width={entry.photo.dimensions.width}
            height={entry.photo.dimensions.height}
            priority={preloadPhoto}
          />
        </div>
      ) : null}
      {entry.content ? (
        <p className={cx("mb-5")}>{RichText.asText(entry.content)}</p>
      ) : null}
      <p>{"///"}</p>
    </article>
  );
}

export default LogEntry;
