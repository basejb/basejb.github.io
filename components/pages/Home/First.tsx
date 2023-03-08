import Image from "next/image";
import React from "react";
import styled from "styled-components";

const FirstStyle: any = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: #268e47;
  transition: all 0.4s ease-in-out;
  .container {
    width: 65%;
    display: flex;
    flex-direction: column;
    z-index: 1;
    transition: all 0.3s ease-in-out;
    transition-delay: 5ms;
    margin: 0 0 100px 0;
    p {
      margin: 0;
      color: #eeeeee;
      font-weight: 600;
    }

    #name {
      margin-bottom: 1rem;
    }

    #job {
      font-size: 5.5rem;
    }
  }

  .me {
    z-index: 3;
    position: absolute;
    transition: all 0.4s ease-in-out;
    right: 0;
    width: 60vw;
    height: 100vh;
    background-position: center;
    background-size: cover;
    background-image: url("/junbeom.webp");
  }

  .round {
    z-index: 1;
    position: absolute;
    bottom: 40vw;
    left: 55vw;
    width: 65vw;
    height: 65vw;
    background-size: cover;
    background-image: url("/elipse-home-slide.png");
    transition-duration: 1.5s;
    transition-delay: 150ms;
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }

  .forest {
    z-index: 2;
    min-width: 1920px;
    position: absolute;
    right: 0;
    height: 100vh;
  }

  @media (max-width: 1400px) {
    .container {
      margin-top: 50px;
      width: 80%;
    }
    .me {
      right: 0;
    }
  }

  @media (max-width: 1100px) {
    align-items: center;
    flex-direction: column;
    .container {
      margin-top: 0;
      transform: translateY(150px);
      display: flex;
      flex-direction: column;
      align-items: center;
      z-index: 1;
      #name {
        font-size: 0.8rem;
      }
      #job {
        font-size: 4rem;
      }
    }
    .me {
      position: static;
      width: 100vw;
      .round {
        display: none;
      }
    }
  }

  @media (max-width: 640px) {
    .container {
      #job {
        font-size: 2.5rem;
      }
    }
    .me {
    }
  }
`;

const HomeFirstPage = () => {
  return (
    <FirstStyle>
      <div className="container">
        <p id="name">JUNBEOM MOON</p>
        <div id="job">
          <p>I'm Junior </p>
          <p>front-end</p>
          <p>Developer ;</p>
        </div>
      </div>
      <div className="me" />
      {/* <div className="round" /> */}

      <Image alt="forest" className="forest" src={`/forest.png`} width={1920} height={300} />
    </FirstStyle>
  );
};

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default React.memo(HomeFirstPage);
