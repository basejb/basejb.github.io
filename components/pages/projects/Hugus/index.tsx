import React from "react";
import styled from "styled-components";
import Image from "next/image";

import Overview from "./Overview";
import Goal from "./Goal";
import Process from "./Process";
import Used from "./Used";
import Architecture from "./Architecture";
import UI from "./UI";
import Branding from "./Branding";
import Youtube from "./Youtube";

const HugusStyle = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;
  color: white;

  .intro {
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .logo {
      width: 400px;
      height: 150px;
    }

    p {
      color: #ffb73f;
      font-size: 2.5rem;
      font-family: Kcc;
    }
  }

  @media (max-width: 600px) {
    padding-top: 120px;
    .intro {
      height: 250px;
      .logo {
        width: 250px;
        height: 100px;
      }

      p {
        color: #ffb73f;
        font-size: 1.5rem;
        font-family: Kcc;
      }
    }
  }
`;

const Hugus = () => {
  return (
    <HugusStyle>
      <div className="intro">
        <Image width={400} height={150} alt="logo" className="logo" src="/images/hugus.png" priority />
        <p>"허그어스, 기부문화의 새로운 방향을 제시하다"</p>
      </div>
      <Overview />
      <Goal />
      <Architecture />
      <Process />
      <UI />
      <Used />
      <Branding />
      <Youtube />
    </HugusStyle>
  );
};

export default Hugus;
