import "@styles/global.css";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import NextHead from "next/head";
import React from "react";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <DefaultSeo
        title="T-Shirt Editor"
        titleTemplate="%s &bull; Carpe Diem"
        description="Whitesmith Devigner Technical Exercise"
        openGraph={{
          url: "",
          title: "Carpe Diem",
          description: "Whitesmith Devigner Technical Exercise",
        }}
      />
      <NextHead>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <link rel="manifest" href="/site.webmanifest" key="site-manifest" />
      </NextHead>

      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}

export default MyApp;
