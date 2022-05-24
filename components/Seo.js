import * as React from "react";
import Head from "next/head";

export default function SEO({ description, title }) {
  const siteTitle = "TitanTech";

  return (
    <Head>
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={"TitanTech"} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />

      <link
        rel="preload"
        href="/fonts/nunito/Nunito-Regular.ttf"
        as="font"
        crossOrigin=""
      />
    </Head>
  );
}
