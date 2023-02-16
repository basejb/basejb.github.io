import React from "react";
import styled from "styled-components";

const CopyrightStyle = styled.div`
  position: fixed;
  margin: 40px 80px;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 1;
  p {
    color: #000000;
    font-size: 14px;
    margin: 0;
  }
  @media (max-width: 1100px) {
    margin: 0;
    left: -100px;
    bottom: 20px;
    min-width: 1100px;
    transform: rotate(90deg) translate(400px, 420px) !important;
    p {
      font-size: 12px;
    }
  }

  @media (max-width: 500px) {
    margin: 0;
    left: 0;
    bottom: 0;
    min-width: 500px;
    transform: rotate(90deg) translate(60px, 230px) !important;
    p {
      font-size: 10px;
      /* transform: scale(0.7); */
      /* -webkit-transform: scale(0.7); */
    }
  }
`;

const Copyright = () => {
  return (
    <CopyrightStyle>
      <p>Copyright 2023. JUNBEOM MOON.</p>
      <p>All rights reserved.</p>
    </CopyrightStyle>
  );
};

export default React.memo(Copyright);
