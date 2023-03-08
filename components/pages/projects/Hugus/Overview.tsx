import React from "react";
import styled from "styled-components";

const OverviewStyle = styled.div`
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
      height: 20px;
    }

    .detail {
      display: flex;
      flex-direction: column;

      ul {
        padding: 0;
        margin: 0;
      }

      #head {
        font-size: 1.2rem;

        p {
          margin-top: 5px;
          font-size: 0.8rem;
        }
      }

      #body {
        margin-top: 20px;

        li {
          list-style: none;
          display: grid;
          grid-template-columns: 1fr 3fr;
          line-height: 45px;
        }
      }
    }
  }

  @media (max-width: 900px) {
    width: 80%;
    .item {
      min-width: 570px;
      .detail {
        #body {
          li {
            grid-template-columns: 1fr 2fr;
          }
          p {
            font-size: 15px;
          }
        }
      }
    }
  }

  @media (max-width: 640px) {
    width: 80%;
    .item {
      grid-template-columns: 1fr 6fr;
      min-width: 300px;
      .detail {
        #head {
          font-size: 1rem;
          p {
            margin-top: 5px;
            font-size: 12px;
          }
        }
        #body {
          margin-top: 15px;

          li {
            grid-template-columns: 2fr 3fr;
          }
          p {
            font-size: 12px;
            line-height: 15px;
          }
        }
      }
    }
  }
`;

const Overview = () => {
  return (
    <OverviewStyle>
      <div className="item">
        <strong className="num">01</strong>
        <div className="detail">
          <ul id="head">
            <strong>프로젝트 개요</strong>
            <p>Project Overview</p>
          </ul>
          <ul id="body">
            <li>
              <p>프로젝트 설명</p>
              <p>블록체인(하이퍼레저 패브릭) 기반 기부 플랫폼입니다.</p>
            </li>
            <li>
              <p>프로젝트 제작 기간</p>
              <p>7주-8주</p>
            </li>
            <li>
              <p>프로젝트 유형</p>
              <p>블록체인 구축, 웹 사이트 제작</p>
            </li>
            <li>
              <p>프로젝트 참여인원</p>
              <p>4명</p>
            </li>
            <li>
              <p>프로젝트 역할</p>
              <p>프론트엔드 작업 및 기본 서버 작업</p>
            </li>
          </ul>
        </div>
      </div>
    </OverviewStyle>
  );
};

export default Overview;
