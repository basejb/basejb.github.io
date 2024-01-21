import React from "react";
import styled from "styled-components";

const WithContentBox = () => {
  return (
    <S.Container>
      <div className="bar" />
      <div className="item">
        <strong className="num">04</strong>
        <div className="detail">
          <ul id="head">
            <strong>제목</strong>
            <p>영어 제목</p>
          </ul>
          <ul id="body">
            <li>내용</li>
          </ul>
        </div>
      </div>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    .item {
      margin: 70px;
      width: 50%;
      display: grid;
      grid-template-columns: 1fr 5fr;
      background-color: transparent;
      min-width: 800px;

      .num {
        margin: 0;
      }

      .detail {
        display: flex;
        flex-direction: column;

        ul {
          padding: 0;
          margin: 0;
        }

        #body {
          margin-top: 16px;
        }
      }
    }

    @media (max-width: 900px) {
      width: 80%;
      .item {
        min-width: 570px;
      }
    }

    @media (max-width: 600px) {
      width: 80%;
      .item {
        grid-template-columns: 1fr 6fr;
        min-width: 300px;
        .detail {
        }
      }
    }
  `,
};

export default WithContentBox;
