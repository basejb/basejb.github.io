import { getDefaultLayout } from "@/components/layout/default-layout";
import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const MeStyle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
  height: 100vh;
  p {
    font-size: 30px;
    color: white;
    display: flex;
    align-items: center;
  }
`;

const Me = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MeStyle>
      <p>준비중입니다 😵‍💫</p>
    </MeStyle>
  );
};

Me.getLayout = getDefaultLayout;

export default Me;
