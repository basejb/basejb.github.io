import React from "react";
import styled from "styled-components";
import me from "@/public/junbeom.png";
import Image from "next/image";

const FirstStyle = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  .container {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
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
      font-size: 5rem;
    }
  }

  .me {
    transition: all 0.3s;
    position: absolute;
    right: 5%;
    width: auto;
    height: 100vh;
    object-fit: cover;
  }

  @media (max-width: 1400px) {
    .me {
      right: -10%;
      width: auto;
    }
  }

  @media (max-width: 1100px) {
    margin-top: 130px;
    flex-direction: column;
    align-items: center;
    .container {
      width: 100%;
      margin-top: 0;
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
      position: initial;
      width: auto;
      height: 70%;
    }
  }

  @media (max-width: 640px) {
    height: calc(100vh - 130px);
    .container {
      min-width: 350px;
      #job {
        font-size: 2.5rem;
      }
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
      <Image className="me" src={me} alt={"me"} priority={true} />
    </FirstStyle>
  );
};

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default React.memo(HomeFirstPage);
