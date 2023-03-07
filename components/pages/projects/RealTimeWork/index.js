import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Overview from "./Overview";
import Goal from "./Goal";
import Process from "./Process";
import Used from "./Used";
import Architecture from "./Architecture";
import Image from "next/image";

const RealTimeWorkStyle = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 200px;
  color: white;

  .intro {
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .logo {
      width: 400px;
    }

    p {
      color: #ec6375;
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
        color: #ec6375;
        font-size: 1.5rem;
        font-family: Kcc;
      }
    }
  }
`;

const RealTimeWork = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <RealTimeWorkStyle>
      <div className="intro">
        <Image alt="logo" className="logo" src={""} />
        <p>"실시간으로 빠르게 소통하는 업무 시스템"</p>
      </div>
      <Overview />
      <Goal />
      <Architecture />
      <Process />
      <Used />
    </RealTimeWorkStyle>
  );
};

export default RealTimeWork;
