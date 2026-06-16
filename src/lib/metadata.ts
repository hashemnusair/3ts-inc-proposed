import type { Metadata } from "next";

const siteUrl = "https://3ts-inc-proposed.pages.dev";
const siteName = "Mawzun Advisory";

type PageMetadataInput = {
  title: string;
  description: string;
  path?: string;
  image: string;
};

export function pageMetadata({
  title,
  description,
  path = "/",
  image,
}: PageMetadataInput): Metadata {
  const url = new URL(path, siteUrl).toString();

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
