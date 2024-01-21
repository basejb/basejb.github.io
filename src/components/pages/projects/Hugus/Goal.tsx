import React from "react";
import styled from "styled-components";
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
            height: 100px;
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
        border: dashed 2px #ffa500;
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
              height: auto;
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
          width: 200px;

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
      <div className="bar" />
      <div className="item">
        <strong className="num">02</strong>
        <div className="detail">
          <ul id="head">
            <strong>프로젝트 목표</strong>
            <p>Project Goal & Mission Statement</p>
          </ul>
          <ul id="body">
            <li>
              <Image alt="icon" src={"/images/trust.png"} width={100} height={100} />
              <p>기부부터 전달과정까지</p>
              <p>투명하게 기록되는 기부 전과정</p>
            </li>
            <li>
              <Image alt="icon" src={"/images/uxui.png"} width={100} height={100} />
              <p>소통을 위한 접근성이 좋은 웹사이트</p>
              <p>사용자의 편의성을 고려한 UX & UI</p>
            </li>
            <li>
              <Image alt="icon" src={"/images/cycle.png"} width={100} height={100} />
              <p>일회성에 그치지 않는 소통을 통한 기부</p>
              <p>기부문화의 선순환</p>
            </li>
          </ul>
          <ul id="summary">
            <p>Project Goal</p>
            <p>
              기부부터 전달까지 일련의 기부과정을 투명하게 기록, 관리하여 기부자들에게 신뢰를 부여합니다. 또한
              수혜자들은 힘겨움을 털어놓는 것만으로도 위로를 받을 수 있는 공간, 그리고 더 나아가 해결책을 찾을 수 있는
              기부 플랫폼을 만드는 것이 프로젝트의 목표입니다.
            </p>
          </ul>
        </div>
      </div>
    </GoalStyle>
  );
};

export default Goal;
