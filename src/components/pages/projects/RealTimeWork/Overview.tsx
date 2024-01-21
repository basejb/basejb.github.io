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
        a {
          height: 40px;
          line-height: 40px;
          font-weight: 800;
          font-size: 14px;
          color: white;
          text-decoration: line-through;
        }
        span {
          font-size: 13px;
          color: #c55362;
          text-decoration: none;
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

  @media (max-width: 600px) {
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
            line-height: 10px;
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
              <p>React를 기반으로한 실시간으로 업무를 소통하는 시스템입니다.</p>
            </li>
            <li>
              <p>프로젝트 제작 기간</p>
              <p>2021.05.05 ~ 2021.09.28 ( 약 4개월 )</p>
            </li>
            <li>
              <p>프로젝트 유형</p>
              <p>웹&#183;앱 사이트 제작 • Refactoring</p>
            </li>
            <li>
              <p>프로젝트 참여인원</p>
              <p>1명</p>
            </li>
            <li>
              <p>프로젝트 역할</p>
              <p>프로젝트 총괄</p>
            </li>
            <li>
              <p>프로젝트 URL</p>
              <a href="#">https://hotelwork.site</a>
              <p></p>
              <span>IT사업 폐업으로 호스팅 제거</span>
            </li>
            <li>
              <p>프로젝트 사용 이력</p>
              <p>사내 약 20명의 사용자가 해당 웹앱으로 업무를 소통</p>
            </li>
          </ul>
        </div>
      </div>
    </OverviewStyle>
  );
};

export default Overview;
