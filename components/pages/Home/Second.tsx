import React from "react";
import styled from "styled-components";

const SecondStyle = styled.section`
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  .container {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    z-index: 1;
    transition: all 0.3s ease-in-out;
  }
`;

const HomeSecondPage = () => {
  return (
    <SecondStyle>
      <div className="container">asdasd</div>
    </SecondStyle>
  );
};

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default React.memo(HomeSecondPage);
