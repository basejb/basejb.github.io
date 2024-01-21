// import "@egjs/react-flicking/dist/flicking.css";
// import "@egjs/flicking-plugins/dist/arrow.css";

// import { AutoPlay } from "@egjs/flicking-plugins";
// import Flicking from "@egjs/react-flicking";
import { WithSpinProps } from "@/HOC/withSpin";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import styled from "styled-components";
const cardList = [
  { id: 1, job: "dev", nickname: "aa", timePay: 36000, time: [4, 6], wantReq: ["사이드잡 제안, 사이드 프로젝트 제안"] },
  { id: 2, job: "dev", nickname: "b", timePay: 36000, time: [4, 6], wantReq: ["사이드잡 제안, 사이드 프로젝트 제안"] },
  { id: 3, job: "dev", nickname: "c", timePay: 36000, time: [4, 6], wantReq: ["사이드잡 제안, 사이드 프로젝트 제안"] },
  { id: 4, job: "dev", nickname: "d", timePay: 36000, time: [4, 6], wantReq: ["사이드잡 제안, 사이드 프로젝트 제안"] },
  { id: 5, job: "dev", nickname: "e", timePay: 36000, time: [4, 6], wantReq: ["사이드잡 제안, 사이드 프로젝트 제안"] },
  { id: 6, job: "dev", nickname: "f", timePay: 36000, time: [4, 6], wantReq: ["사이드잡 제안, 사이드 프로젝트 제안"] },
  { id: 7, job: "dev", nickname: "g", timePay: 36000, time: [4, 6], wantReq: ["사이드잡 제안, 사이드 프로젝트 제안"] },
];
const HomeSecondPage = ({ spin }: WithSpinProps["spin"]) => {
  const [page, setPage] = useState(1);
  // const plugins = [new AutoPlay({ duration: 5000, direction: "NEXT", stopOnHover: true })];
  // const FlickingRef = useRef<Flicking>(null);

  return (
    <S.Container spin={spin}>
      <div className="container">
        <motion.div
          animate={spin === 1 ? "open" : "close"}
          variants={{
            open: { display: "block", opacity: 1, y: 0, scale: 1.2 },
            closed: { opacity: 0, y: "-10px", transitionEnd: { display: "none" } },
          }}
          initial={{ opacity: 0, width: "70%" }}
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
        {/* <section className="title-box">
          <h1>Experience</h1>
          <div className="pagination">
            <div className="prev">{"<"}</div>
            <div className="page">
              {1} / {6}
            </div>
            <div className="next">{">"}</div>
          </div>
        </section>
        <section className="flicking">
          <Flicking
            data-testid="flicking"
            ref={FlickingRef}
            plugins={plugins}
            circular
            duration={1000}
            disableOnInit
            autoResize
          >
            {cardList.map((item) => {
              return (
                <div className="card-box" key={item.id}>
                  <p className="period">2023.01.02</p>
                  <div>
                    <p className="project-title">제목입니다</p>
                    <span>영어 제목</span>
                  </div>
                </div>
              );
            })}
          </Flicking>
        </section> */}
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
      width: 70%;
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
      /* 
      section.title-box {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        h1 {
          color: white;
          font-size: 4rem;
          font-weight: 700;
        }
        div.pagination {
          display: flex;
          flex-direction: row;
          color: white;
          width: 300px;
          div {
            text-align: center;
            background-color: red;
            width: 30px;
            height: 30px;
          }
        }
      }

      section.flicking {
        width: 100%;
        .flicking-viewport {
        }
        div.card-box {
          width: 100%;
          margin: 0 24px 0 0;
          padding: 36px;
          border: 1px solid red;
          height: 800px;
          display: flex;
          flex-direction: row;

          p.period {
            color: white;
          }
          p.project-title {
            color: white;
          }
        }
      } */

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

      @media (max-width: 640px) {
        .container {
          min-width: 350px;
        }
        h1#text {
          font-size: 0.8rem;
          line-height: 40px;
        }
      }
    }
  `,
};

export default React.memo(HomeSecondPage);
