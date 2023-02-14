import "@/styles/globals.css";
import { IDefaultLayoutPage } from "@/components/layout/default-layout";

import type { AppProps } from "next/app";
import { NextComponentType } from "next";
import Head from "next/head";
import { DefaultSeo } from "next-seo";

const DEFAULT_SEO = {
  title: "Title",
  description: "JB'S description",
  canonical: "",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "",
    title: "TITLE",
    site_name: "SITE_NAME",
    // images: [
    //   {
    //     url: "/assets/icons/velog.png",
    //     width: 285,
    //     height: 167,
    //     alt: "이미지",
    //   },
    // ],
  },
};

export default function App({ Component, pageProps }: AppProps) {
  const getLayout =
    (Component as IDefaultLayoutPage).getLayout ||
    ((Page: NextComponentType, props: Record<string, unknown>) => <Page {...props} />);

  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <Head>
        <title>JB's github</title>
        <meta name="description" content="It's JBs description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0 viewport-fit=cover"
        /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{getLayout(Component, pageProps)}</main>
    </>
  );
}

// App.getInitialProps = async ({ Component, ctx }: any) => {
//   let pageProps = {};
//   const isServer = () => typeof window === "undefined";

//   if (isServer()) {
//   }

//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps(ctx);
//   }
//   return { pageProps };
// };
