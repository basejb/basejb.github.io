import { IDefaultLayoutPage } from "@/components/layout/default-layout";

import type { AppProps } from "next/app";
import { NextComponentType } from "next";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "@/utils/gtag";
import Script from "next/script";
import GlobalStyle from "@/styles/GlobalStyle";

const DEFAULT_SEO = {
  title: "JB's github",
  description: "주니어 프론트엔드 문준범의 github.io입니다.",
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
  console.log(Component, pageProps);

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  // GA 설정 끝

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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <GlobalStyle />
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
