import React from "react";
import styled from "styled-components";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { WithSpinProps } from "@/HOC/withSpin";

const HomeFirstPage = ({ spin }: WithSpinProps["spin"]) => {
  return (
    <S.Container spin={spin}>
      <div className="contents">
        <p id="name">JUNBEOM MOON</p>
        <div id="job">
          <p>I'm Junior </p>
          <p>front-end</p>
          <p>Developer ;</p>
        </div>
        <div className="row">
          <div className="box">
            <CountUp redraw delay={0.8} end={4} />
            <h6>사이드 프로젝트</h6>
          </div>
          {/* <div className="box">
            <span>8</span>
            <h6>상용화 프로젝트</h6>
          </div> */}
        </div>
      </div>
      <S.Me />
      <motion.div
        animate={spin === 0 ? "open" : "close"}
        variants={{
          open: {
            display: "block",
            opacity: 1,
            top: "15vw",
            left: "50vw",
          },
          closed: { opacity: 0, transitionEnd: { left: "100vw" } },
        }}
        initial={{ opacity: 0, position: "absolute", top: "40vw", left: "100vw" }}
        transition={{ duration: 1.3, delay: 0.3 }}
      >
        <S.Round />
      </motion.div>

      <motion.div
        animate={spin === 0 ? "open" : "closed"}
        variants={{
          open: { display: "block", opacity: 1, y: 0 },
          closed: { opacity: 0, y: 0, transitionEnd: { display: "none" } },
        }}
        initial={{ y: 100, position: "absolute", width: "100%" }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <S.Forest style={{ backgroundImage: `url('/images/forest.png')` }} />
      </motion.div>
    </S.Container>
  );
};

const S = {
  Container: styled.section<{ spin: WithSpinProps["spin"] }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    z-index: 10;
    background-color: var(--theme);
    transition: all 0.4s ease-in-out;
    .contents {
      width: 65%;
      display: flex;
      flex-direction: column;
      z-index: 1;
      transition: all 0.3s ease-in-out;
      transition-delay: 5ms;
      line-height: 120px;
      /* margin-bottom: 10rem; */
      gap: 30px;

      p {
        margin: 0;
        color: #eeeeee;
        font-weight: 600;
      }

      #name {
        line-height: 5px;
      }

      #job {
        font-size: 5.5rem;
      }
      .row {
        display: flex;
        flex-direction: row;
        gap: 20px;
        .box {
          text-align: center;
          width: 280px;
          height: 90px;
          display: flex;
          padding: 2rem;
          border-radius: 8px;
          background-color: rgba(255, 255, 255, 0.2);
          box-shadow: inset 0 -2px 0 0 rgba(255, 255, 255, 0.1);
          align-items: center;
          gap: 20px;
          span {
            font-size: 2.5rem;
            font-weight: 700;
            line-height: 1;
            min-width: 3.125rem;
            letter-spacing: -0.02em;
            color: #ffffff;
            opacity: 0.8;
          }
          h6 {
            line-height: 25px;
            font-size: 18px;
            color: #ffffff;
            opacity: 0.8;
          }
        }
      }
    }

    @media (max-width: 1400px) {
      .contents {
        margin-top: 50px;
        width: 80%;
      }
      .me {
        right: 0;
      }
    }

    @media (max-width: 1100px) {
      align-items: start;
      .contents {
        margin-top: 0;
        transform: translateY(150px);
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 1;
        #name {
          font-size: 0.8rem;
        }
        #job {
          font-size: 4rem;
        }
      }
      .me {
        display: none;
      }
      .round {
        display: none;
      }
    }

    @media (max-width: 640px) {
      .contents {
        line-height: 80px;
        #job {
          font-size: 2.5rem;
        }
        .row {
          .box {
            width: 100%;
            height: 80px;
            gap: 0;
            span {
              text-align: start;
              font-size: 25px;
            }
            h6 {
              font-size: 15px;
            }
          }
        }
      }
      .me {
      }
    }
  `,
  Me: styled.div`
    z-index: 3;
    position: absolute;
    transition: all 0.4s ease-in-out;
    right: 0;
    width: 60vw;
    height: 100vh;
    background-position: center;
    background-size: cover;
    background-image: url("/images/junbeom.webp");
    @media (max-width: 1400px) {
      right: 0;
    }
    @media (max-width: 1100px) {
      display: none;
    }
  `,
  Round: styled.div`
    z-index: 1;
    width: 1500px;
    height: 1500px;
    background-size: cover;
    background-image: url("/images/elipse-home-slide.png");
    @media (max-width: 1100px) {
      display: none;
    }
  `,
  Forest: styled.div`
    z-index: 1;
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url("/images/elipse-home-slide.png");
  `,
};

export default React.memo(HomeFirstPage);
