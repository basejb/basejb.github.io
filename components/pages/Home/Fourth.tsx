import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const FourthStyle: any = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);

  .container {
    margin-top: 150px;
    width: 70%;
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      flex-direction: column;
      #title {
        font-size: 3.5rem;
        color: white;
        font-weight: 600;
      }

      .project__all {
        display: flex;
        width: 100%;
        height: 400px;
        justify-content: space-between;
        padding: 0;

        .project {
          text-decoration-line: none;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 350px;
          min-width: 350px;
          height: 350px;
          background-color: white;
          border-radius: 100%;
          transition: all 2s ease-in-out;
          opacity: ${(props: any) => (props.spin === 3 ? "1" : "0")};
        }

        p {
          margin: 20px;
          min-width: 270px;
          display: flex;
          justify-content: center;
        }

        .hugus {
          background-color: #f5d0a9;
          transition-delay: ${(props: any) => (props.spin === 3 ? "0.4s" : "0s")};
          p {
            color: #ffa500;
            font-size: 2rem;
            font-weight: 900;

            :nth-child(1) {
              font-size: 1rem;
            }
          }
        }

        .work {
          background-color: #ff9e9d;
          transition-delay: ${(props: any) => (props.spin === 3 ? "0.7s" : "0s")};
          p {
            color: #da463c;
            font-size: 2rem;
            font-weight: 900;
            :nth-child(1) {
              font-size: 1rem;
            }
          }
        }

        .umokmin {
          background-color: #e2f4de;
          transition-delay: ${(props: any) => (props.spin === 3 ? "1s" : "0s")};
          p {
            color: #46613d;
            font-size: 2rem;
            font-weight: 900;
            :nth-child(1) {
              font-size: 1rem;
            }
          }
        }
      }

      #more {
        text-decoration: none;
        align-self: flex-end;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 50px;
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.3);
        border: none;
        color: white;
        font-size: 1rem;
        z-index: 2;
      }
    }
  }

  .background {
    position: absolute;
    width: 100%;
    height: 100vh;
    transform: ${(props: any) => (props.spin === 3 ? "scale(1)" : "scale(1.3)")};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: transform 5s cubic-bezier(0.46, 0.03, 0.52, 0.96);
    z-index: -3;
  }

  @media (max-width: 1500px) {
    .container {
      div {
        .project__all {
          .project {
            width: 250px;
            min-width: 250px;
            height: 250px;
            transition: all 0.3s ease-in-out;
            p {
              margin: 5px;
              font-size: 2rem;
              font-weight: 800;
              :nth-child(1) {
                font-size: 1rem;
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 1100px) {
    .container {
      align-items: center;
      div {
        .project__all {
          flex-direction: column;
          .project {
            width: 350px;
            min-width: 250px;
            height: 120px;
            border-radius: 10px;
            transition: all 0s;
            p {
              margin: 5px;
              font-size: 2rem;
              font-weight: 800;
              :nth-child(1) {
                font-size: 1rem;
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 500px) {
    .container {
      align-items: center;
      justify-content: center;
      margin-top: 0;
      div {
        #title {
          font-size: 1.5rem;
          color: white;
          font-weight: 600;
        }
        .project__all {
          flex-direction: column;
          height: 330px;
          .project {
            width: 220px;
            min-width: 220px;
            height: 100px;
            border-radius: 10px;
            transition: all 0s;
            p {
              margin: 5px;
              font-size: 1.3rem;
              font-weight: bold;
              :nth-child(1) {
                font-size: 11px;
              }
            }
          }
        }
        #more {
          width: 60px;
          height: 25px;
          font-size: 10px;
          margin-top: 10px;
        }
      }
    }
  }
`;

const Fourth = ({ spin }: any) => {
  return (
    <FourthStyle spin={spin}>
      <div className="container">
        <div>
          <p id="title">Projects</p>
          <ul className="project__all">
            <Link href="/projects" className="project hugus">
              <p>하이퍼레저 패브릭 기반 기부 플랫폼</p>
              <p>HUGUS</p>
            </Link>
            <Link href="/projects" className="project work">
              <p>웹/앱 기반 자사 실시간 소통 시스템</p>
              <p>REAL TIME WORK</p>
            </Link>
            <Link href="/projects" className="project umokmin">
              <p>웹앱 기반 여행 커뮤니티</p>
              <p>UMOKMIN</p>
            </Link>
          </ul>
          <Link href="/projects" id="more">
            더보기
          </Link>
        </div>
      </div>
      <div className="background" style={{ backgroundImage: `url('/second2.jpg')` }} />
    </FourthStyle>
  );
};

export default Fourth;
