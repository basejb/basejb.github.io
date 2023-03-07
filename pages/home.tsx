import React, { useEffect, useState } from "react";
import { getDefaultLayout, IDefaultLayoutPage, IPageHeader } from "@/components/layout/default-layout";
import Head from "next/head";
import Image from "next/image";
import { DefaultSeo } from "next-seo";
import styled from "styled-components";
import First from "@/components/pages/Home/First";
import Second from "@/components/pages/Home/Second";
import Third from "@/components/pages/Home/Third";
import Fourth from "@/components/pages/Home/Fourth";

const pageHeader: IPageHeader = {
  title: "Welcome",
};

const HomePageWrapper: any = styled.section`
  transition: transform 1s cubic-bezier(0.8, 0.085, 0, 0.99);
  -webkit-transition: transform 1s cubic-bezier(0.8, 0.085, 0, 0.99);
  transform: translateY(${(props: any) => -props.spin * 100}vh);
  -webkit-transform: translateY(${(props: any) => -props.spin * 100}vh);
`;

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

const HomePage: IDefaultLayoutPage = () => {
  const [spin, setSpin] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [scroll, setScroll] = useState(true);
  const [articleNum] = useState(4);

  const wheelEvent = (e: WheelEvent) => {
    if (scroll) {
      setScroll(false);
      if (e.deltaY > 0) {
        spin < articleNum - 1 && setSpin((prev) => prev + 1);
      } else {
        spin > 0 && setSpin((prev) => prev - 1);
      }
      setTimeout(() => setScroll(true), 800);
    }
  };

  const touchEvent = (e: TouchEvent) => {
    switch (e.type) {
      case "touchstart":
        setTouchStart(e.touches[0].clientY);
        break;
      case "touchend":
        if (e.changedTouches[0].clientY < touchStart) {
          spin < articleNum - 1 && setSpin((prev) => prev + 1);
        } else spin > 0 && setSpin((prev) => prev - 1);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    //  document.querySelector("#header").style.backgroundColor = "transparent";
  }, []);

  return (
    <>
      {/* <DefaultSeo {...DEFAULT_SEO} />
      <Head>
        <title>JB's boilerplate</title>
        <meta name="description" content="It's JBs description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <HomePageWrapper spin={spin} onWheel={wheelEvent} onTouchStart={touchEvent} onTouchEnd={touchEvent}>
        <First />
        <Second />
        <Third spin={spin} />
        <Fourth spin={spin} />
      </HomePageWrapper>
    </>
  );
};

HomePage.getLayout = getDefaultLayout;
HomePage.pageHeader = pageHeader;

export default HomePage;
