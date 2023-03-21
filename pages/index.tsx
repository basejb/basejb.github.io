import React, { ComponentType, MemoExoticComponent } from "react";
import { getDefaultLayout, IDefaultLayoutPage } from "@/components/layout/default-layout";
// import Head from "next/head";
// import Image from "next/image";
// import { DefaultSeo } from "next-seo";
import styled from "styled-components";
import First from "@/components/pages/Home/First";
import Second from "@/components/pages/Home/Second";
import Third from "@/components/pages/Home/Third";
import Fourth from "@/components/pages/Home/Fourth";
import withSpin, { WithSpinProps } from "@/HOC/withSpin";

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

const HomePage = (props: WithSpinProps) => {
  const { spin } = props;

  return (
    <>
      {/* <DefaultSeo {...DEFAULT_SEO} />
      <Head>
        <title>JB's github</title>
        <meta name="description" content="It's JBs description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <S.Container {...props}>
        <First spin={spin} />
        <Second spin={spin} />
        <Third spin={spin} />
        <Fourth spin={spin} />
      </S.Container>
      <S.Pagination spin={spin}>0{spin + 1}</S.Pagination>
    </>
  );
};

const S = {
  Container: styled.section<WithSpinProps>`
    transition: transform 1s cubic-bezier(0.8, 0.085, 0, 0.99);
    -webkit-transition: transform 1s cubic-bezier(0.8, 0.085, 0, 0.99);
    transform: translateY(${(props) => -props.spin * 100}vh);
    -webkit-transform: translateY(${(props) => -props.spin * 100}vh);
  `,
  Pagination: styled.div<{ spin: WithSpinProps["spin"] }>`
    width: 150px;
    height: 150px;
    position: fixed;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 16px;
    background-color: ${(props) => (props.spin === 2 ? "white" : "#1010107a")};
    color: ${(props) => (props.spin === 2 ? "black" : "white")};
    font-size: 2rem;
    font-weight: 700;
    @media (max-width: 640px) {
      width: 80px;
      height: 80px;
      font-size: 1rem;
    }
  `,
};

const Home: MemoExoticComponent<ComponentType<WithSpinProps>> & any = React.memo(withSpin()(HomePage));

Home.getLayout = getDefaultLayout;

export default Home;
