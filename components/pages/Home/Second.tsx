import { WithSpinProps } from "@/HOC/withSpin";
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const HomeSecondPage = ({ spin }: WithSpinProps["spin"]) => {
  return (
    <S.Container spin={spin}>
      <div className="container">
        <motion.div
          animate={spin === 1 ? "open" : "close"}
          variants={{
            open: { display: "block", opacity: 1, y: 0, scale: 1.2 },
            closed: { opacity: 0, y: "-10px", transitionEnd: { display: "none" } },
          }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.2, delay: 0.6 }}
        >
          <h1 id="text">
            안녕하세요 문준범입니다. ✋🏻
            <br />
            페이지 전체를 리뉴얼 준비중에 있습니다. 🙂
            <br />
            아래에 저의 정보가 더 있습니다 👇🏻
          </h1>
        </motion.div>
      </div>
      {/* <Image className="me" src={me} alt={"준범"} priority={true} /> */}
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
    background-color: black;
    .container {
      width: 80%;
      display: flex;
      flex-direction: column;
      align-items: center;
      z-index: 1;
      transition: all 0.3s ease-in-out;

      h1#text {
        text-align: center;
        margin: 0 auto;
        color: white;
        font-size: 2rem;
        font-weight: 600;
        line-height: 80px;
      }
    }

    @media (max-width: 1400px) {
      .container {
        margin-top: 50px;
        width: 80%;
      }
    }

    @media (max-width: 1100px) {
      align-items: center;
      .container {
        margin-top: 0;
        /* transform: translateY(150px); */
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 1;
        h1#text {
          line-height: 40px;
          font-size: 1.5rem;
        }
      }
    }

    @media (max-width: 500px) {
      .container {
        min-width: 350px;
        h1#text {
          font-size: 0.8rem;
        }
      }
    }
  `,
};

export default React.memo(HomeSecondPage);
