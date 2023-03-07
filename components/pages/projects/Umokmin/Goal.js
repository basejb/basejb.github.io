import React from "react";
import styled from "styled-components";
import uxui from "@/public/images/uxui.png";
import cycle from "@/public/images/cycle.png";
import Image from "next/image";

const GoalStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .bar {
  }

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

      #head {
        font-size: 1.2rem;

        p {
          margin-top: 5px;
          font-size: 0.8rem;
        }
      }

      #body {
        margin-top: 50px;
        display: flex;
        justify-content: space-around;

        li {
          list-style: none;
          display: flex;
          flex-direction: column;
          align-items: center;

          img {
            width: 100px;
            height: auto;
            color: white;
            margin-bottom: 20px;
          }

          p:nth-child(2) {
            font-size: 13px;
            margin-bottom: 0;
          }

          p:nth-child(3) {
            font-weight: bold;
          }
        }
      }

      #summary {
        border: dashed 2px #79928e;
        margin-top: 50px;
        height: 250px;
        border-radius: 5px;
        padding-top: 10px;
        padding-left: 50px;
        padding-right: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        p:nth-child(1) {
          font-size: 1.5rem;
          font-weight: bold;
          margin-top: 0;
        }

        p:nth-child(2) {
          line-height: 25px;
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
          flex-direction: column;
          align-items: center;
          li {
            width: 250px;
            margin-bottom: 50px;
            img {
              width: 100px;
              margin-bottom: 20px;
            }

            p:nth-child(2) {
              font-size: 13px;
              margin-bottom: 0;
            }

            p:nth-child(3) {
              font-weight: bold;
            }
          }
        }
        #summary {
          height: 250px;

          p:nth-child(1) {
            font-size: 1.3rem;
          }

          p:nth-child(2) {
            line-height: 25px;
            font-size: 13px;
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
          align-items: flex-start;
          margin-top: 50px;
          p {
            font-size: 12px;
          }
          li {
            width: 200px;
            img {
              width: 70px;
            }
          }
        }
        #summary {
          height: 280px;
          width: 160px;
          padding-top: 30px;
          padding-left: 20px;
          padding-right: 20px;
          padding-bottom: 10px;
          p:nth-child(1) {
            font-size: 1rem;
          }

          p:nth-child(2) {
            line-height: 25px;
            font-size: 12px;
          }
        }
      }
    }
  }
`;

const Goal = () => {
  return (
    <GoalStyle>
      <div className="bar"></div>
      <div className="item">
        <strong className="num">03</strong>
        <div className="detail">
          <ul id="head">
            <strong>프로젝트 목표</strong>
            <p>Project Goal • Mission Statement</p>
          </ul>
          <ul id="body">
            <li>
              <Image alt="icon" src={uxui} />
              <p>웹과 모바일의 조화를 갖춘</p>
              <p>사용자의 편의성을 고려한 UX & UI</p>
            </li>
            <li>
              <Image alt="icon" src={cycle} />
              <p>양질의 특별한 장소들을 공유하고</p>
              <p>커뮤니티 기능을 고루 갖춘 소통 플랫폼</p>
            </li>
          </ul>
          <ul id="summary">
            <p>Project Goal</p>
            <p>
              본인만의 여행지 또는 장소에 관련된 다양한 정보를 공유 함으로써, 타인과 많은 정보를 공유하고 기록할 수 있는
              공간을 만드는 것이 프로젝트의 목표입니다.
            </p>
          </ul>
        </div>
      </div>
    </GoalStyle>
  );
};

export default Goal;
