import React from "react";
import styled from "styled-components";

const Retrospect = () => {
  return (
    <S.Container>
      <div className="bar" />
      <div className="item">
        <strong className="num">05</strong>
        <div className="detail">
          <ul id="head">
            <strong>자세한 회고록</strong>
            <p>Detail Retrospect</p>
          </ul>
          <ul id="body">
            <li>저의 프로젝트에 대해 조금 더 자세히 알고 싶으시면 아래 링크를 클릭해주세요.</li>
            <a href="https://umokmin.notion.site/2022-96e4a34e608f4e5093030403850dcf42" target="_blank">
              유목민 회고록 바로가기.
            </a>
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
          font-size: 0.8rem;
        }

        #head {
          font-size: 1.2rem;

          p {
            margin-top: 5px;
            font-size: 0.8rem;
          }
        }

        a {
          height: 70px;
          margin-top: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 15px;
          text-decoration: none;
          color: white;
          font-size: 1.1rem;
          font-weight: 800;
          border-radius: 100px;
          background-color: var(--umokmin-theme);
          transition: all 0.25s ease-in;
          animation: ball 0.5s ease-in Infinite Alternate;
          position: relative;
          :hover {
            opacity: 0.8;
          }
        }

        @keyframes ball {
          0% {
            top: 0px;
          }
          100% {
            top: 10px;
          }
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

export default Retrospect;
