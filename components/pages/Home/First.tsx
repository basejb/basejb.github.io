import React from "react";
import styled from "styled-components";
import me from "@/public/junbeom.webp";
import Image from "next/image";

const FirstStyle = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 128px);
  .container {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    z-index: 1;
    transition: all 0.3s ease-in-out;

    p {
      margin: 0;
      color: #000000;
      font-weight: 600;
    }

    #name {
      margin-bottom: 1rem;
    }

    #job {
      font-size: 6rem;
    }
  }

  .me {
    animation: me 0.9s ease-in-out forwards;
    position: absolute;
    right: 5%;
    width: 1000px;
    height: calc(100vh - 128px);
    transition: all 0.5s ease-in-out;
  }

  @media (max-width: 1400px) {
    .container {
      margin-top: 50px;
      width: 80%;
    }
    .me {
      /* width: 100%; */
      right: 0;
    }
  }

  @media (max-width: 1100px) {
    align-items: flex-start;
    .container {
      margin-top: 0;
      /* transform: translateY(150px); */
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
      margin: auto;
      width: 100%;
      height: calc(100vh - 128px);
    }
  }

  @media (max-width: 640px) {
    align-items: flex-start;
    height: calc(100vh - 60px);
    .container {
      min-width: 350px;
      #job {
        font-size: 2.5rem;
      }
    }
    .me {
      height: calc(100vh - 60px);
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
      <Image className="me" src={me} alt={"준범"} priority={true} />
    </FirstStyle>
  );
};

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default React.memo(HomeFirstPage);
