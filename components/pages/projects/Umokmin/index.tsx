import React from "react";
import styled from "styled-components";
import Overview from "./Overview";
import Goal from "./Goal";
// import Used from "./Used";
import Architecture from "./Architecture";
// import UI from "./UI";
import Branding from "./Branding";

import Image from "next/image";

const Umokmin = () => {
  return (
    <S.Umokmin>
      <div className="intro">
        <Image alt="logo" className="logo" src={"/images/umokminLogo2.png"} width={200} height={200} />
        <p>여행을 즐기다, 나만의 특별한 장소 유목민</p>
      </div>
      <Overview />
      <Branding />
      <Goal />
      <Architecture />
      {/* <UI /> */}
      {/* <Used /> */}
    </S.Umokmin>
  );
};

const S = {
  Umokmin: styled.article`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 200px;
    color: white;

    .intro {
      height: 400px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .logo {
        width: 350px;
        height: auto;
      }
      p {
        margin-top: 50px;
        color: #79928e;
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
        }

        p {
          color: #79928e;
          font-size: 1.5rem;
          font-family: Kcc;
        }
      }
    }
  `,
};

export default Umokmin;
