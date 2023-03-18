import React, { useEffect, useState } from "react";
import { getDefaultLayout, IDefaultLayoutPage } from "@/components/layout/default-layout";
// import Head from "next/head";
// import Image from "next/image";
// import { DefaultSeo } from "next-seo";
import styled from "styled-components";
import First from "@/components/pages/Home/First";
import Second from "@/components/pages/Home/Second";
import Third from "@/components/pages/Home/Third";
import Fourth from "@/components/pages/Home/Fourth";

interface HomeProps {
  spin: number;
  onWheel: any;
  onTouchStart: any;
  onTouchEnd: any;
}

// const DEFAULT_SEO = {
//   title: "JB's github",
//   description: "JB'S description",
//   canonical: "",
//   openGraph: {
//     type: "website",
//     locale: "ko_KR",
//     url: "",
//     title: "TITLE",
//     site_name: "SITE_NAME",
//     // images: [
//     //   {
//     //     url: "/assets/icons/velog.png",
//     //     width: 285,
//     //     height: 167,
//     //     alt: "이미지",
//     //   },
//     // ],
//   },
// };

const HomePage: IDefaultLayoutPage = () => {
  const [spin, setSpin] = useState<number>(0);
  const [touchStart, setTouchStart] = useState<number>(0);
  const [scroll, setScroll] = useState<boolean>(true);
  const [articleNum] = useState<number>(4);

  const wheelEvent = (e: WheelEvent) => {
    if (scroll) {
      setScroll(false);
      if (e.deltaY > 0) {
        spin < articleNum - 1 && setSpin((prev) => prev + 1);
      } else {
        spin > 0 && setSpin((prev) => prev - 1);
      }
      setTimeout(() => setScroll(true), 1000);
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

  return (
    <>
      {/* <DefaultSeo {...DEFAULT_SEO} />
      <Head>
        <title>JB's github</title>
        <meta name="description" content="It's JBs description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <S.Container spin={spin} onWheel={wheelEvent} onTouchStart={touchEvent} onTouchEnd={touchEvent}>
        <First spin={spin} />
        <Second spin={spin} />
        <Third spin={spin} />
        <Fourth spin={spin} />
      </S.Container>
    </>
  );
};

const S = {
  Container: styled.section<HomeProps>`
    transition: transform 1s cubic-bezier(0.8, 0.085, 0, 0.99);
    -webkit-transition: transform 1s cubic-bezier(0.8, 0.085, 0, 0.99);
    transform: translateY(${(props) => -props.spin * 100}vh);
    -webkit-transform: translateY(${(props) => -props.spin * 100}vh);
  `,
};

HomePage.getLayout = getDefaultLayout;

export default HomePage;
