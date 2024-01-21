import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

const Process = () => {
  const [zoom, setZoom] = useState<string>("");

  const zoomHandler = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const { src }: any = e.target;
    setZoom(src);
  };

  return (
    <S.Container zoom={zoom}>
      <div className="bar" />
      <div className="item">
        <strong className="num">04</strong>
        <div className="detail">
          <ul id="head">
            <strong>주요 기능</strong>
            <p>Main Function</p>
          </ul>

          <ul id="body">
            <li onClick={(e) => zoomHandler(e)}>
              <div className="title_stack">
                <h3>💫 배포</h3>
                <span />
                <section>
                  <Image
                    alt="stack"
                    className="stack"
                    src="https://img.shields.io/badge/Ubuntu-E95420?style=flat-square&logo=Ubuntu&logoColor=white&width=200"
                    width={30}
                    height={20}
                  />
                  <Image
                    alt="stack"
                    className="stack"
                    src="https://img.shields.io/badge/Amazon AWS-232F3E?style=flat-square&logo=Amazon AWS&logoColor=white&width=200"
                    width={30}
                    height={20}
                  />
                  <Image
                    alt="stack"
                    className="stack"
                    src="https://img.shields.io/badge/NGINX-009639?style=flat-square&logo=NGINX&logoColor=white&width=200"
                    width={30}
                    height={20}
                  />
                </section>
              </div>
              {/* <Image alt="filter" src={"/images/work_filter.gif"} width={200} height={200} /> */}
              <div className="contents">
                <p>• Nginx</p>
                <p>• AWS lightsail</p>
                <p>• SSL</p>
              </div>
              <hr />
            </li>
            <li onClick={(e) => zoomHandler(e)}>
              <div className="title_stack">
                <h3>💫 서버</h3>
                <span />
                <section>
                  <Image
                    alt="stack"
                    className="stack"
                    src={
                      "https://img.shields.io/badge/express-000000?style=flat-square&logo=express&logoColor=white&width=200"
                    }
                    width={30}
                    height={20}
                  />
                  <Image
                    alt="stack"
                    className="stack"
                    src={
                      "https://img.shields.io/badge/node.js-339933?style=flat-square&logo=Node.js&logoColor=white&width=200"
                    }
                    width={30}
                    height={20}
                  />
                  <Image
                    alt="stack"
                    className="stack"
                    src={
                      "https://img.shields.io/badge/mysql-4479A1?style=flat-square&logo=mysql&logoColor=white&width=200"
                    }
                    width={30}
                    height={20}
                  />
                  <Image
                    alt="stack"
                    className="stack"
                    src={
                      "https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white&width=200"
                    }
                    width={30}
                    height={20}
                  />
                </section>
              </div>
              <div className="contents">
                <p>• RESTful API</p>
                <p>• Sequelize</p>
                <p>• MongoDB</p>
                <p>• Mysql</p>
              </div>
              <hr />
            </li>
            <li onClick={(e) => zoomHandler(e)}>
              <div className="title_stack">
                <h3>💫 무한스크롤</h3>
                <span />
                <section>
                  <ReactStack />
                  <ReduxStack />
                </section>
              </div>
              {/* <Image alt="infinityScroll" src={"/images/work_infinity_scroll.gif"} width={200} height={200} /> */}
              <div className="contents">
                <p>• custom hooks로 재사용</p>
              </div>

              {/* <p>• </p> */}
              <hr />
            </li>
            <li onClick={(e) => zoomHandler(e)}>
              <div className="title_stack">
                <h3>💫 소통</h3>
                <span />
                <section>
                  <ReactStack />
                  <ReduxStack />
                  <Image
                    alt="stack"
                    className="stack"
                    src="https://img.shields.io/badge/Amazon S3-569A31?style=flat-square&logo=Amazon S3&logoColor=white"
                    width={30}
                    height={20}
                  />
                  <Image
                    alt="stack"
                    className="stack"
                    src="https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=Firebase&logoColor=white"
                    width={30}
                    height={20}
                  />
                  <Image
                    alt="stack"
                    className="stack"
                    src="https://img.shields.io/badge/Socket.io-51DAAB?style=flat-square&logo=Socket.io&logoColor=white"
                    width={30}
                    height={20}
                  />
                </section>
              </div>
              {/* <Image alt="write" src={"/images/work_write.gif"} width={200} height={200} /> */}
              <div className="contents">
                <p>• 위지위그(WYSIWYG) 에디터 기능</p>
                <p>• 이미지 리사이즈</p>
                <p>• S3 업로드</p>
                <p>• Firebase Cloud Messaging 푸시 알림</p>
              </div>
              <hr />
            </li>
            <li onClick={(e) => zoomHandler(e)}>
              <div className="title_stack">
                <h3>💫 모바일</h3>
                <span />
                <section>
                  <ReactStack />

                  <Image
                    alt="stack"
                    className="stack"
                    src="https://img.shields.io/badge/styled-components-DB7093?style=flat-square&logo=styled-components&logoColor=white"
                    width={30}
                    height={20}
                  />
                </section>
              </div>
              {/* <Image className="mobile" alt="mobile" src={"/images/work_mobile.gif"} width={200} height={200} /> */}
              <div className="contents">
                <p>• styled-components</p>
                <p>• media Query</p>
                <p>• 반응형 웹</p>
              </div>
              <hr />
            </li>
          </ul>
        </div>
      </div>

      <div id="zoom">
        {zoom !== "" ? <Image alt="zoom" src={zoom} onClick={() => setZoom("")} width={200} height={200} /> : null}
      </div>
    </S.Container>
  );
};

const ReactStack = () => {
  return (
    <Image
      alt="stack"
      className="stack"
      src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"
      width={30}
      height={20}
    />
  );
};

const ReduxStack = () => {
  return (
    <Image
      alt="stack"
      className="stack"
      src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"
      width={30}
      height={20}
    />
  );
};

const S = {
  Container: styled.div<{ zoom: string }>`
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

        #head {
          font-size: 1.2rem;

          p {
            margin-top: 5px;
            font-size: 0.8rem;
          }
        }
        #head_stack {
          .stack {
            width: 65px;
            height: 20px;
            margin-right: 10px;
          }
        }

        #body {
          margin-top: 40px;
          li {
            list-style: none;
            margin-bottom: 50px;
            .title_stack {
              display: flex;
              align-items: center;
              gap: 20px;
              span {
                background-color: white;
                height: 20px;
                width: 1px;
              }
              section {
                display: flex;
                align-items: center;
                .stack {
                  border-radius: 8px;
                  padding: 5px;
                  margin: 0 5px 0 0;
                }
              }
            }
            img {
              width: 100%;
              height: auto;
              cursor: ${(props: any) => (props.zoom ? "zoom-out" : "zoom-in")};
            }

            div.contents {
              display: flex;
              flex-direction: column;
              gap: 10px;
              padding: 8px 0;
              font-size: 1rem;
            }
            .mobile {
              width: 35%;
            }
            .stack {
              width: auto;
            }
            hr {
              border: none;
              height: 1px;
              color: #333;
              background-color: #333;
            }
          }
        }
      }
    }

    #zoom {
      position: fixed;
      inset: 0px;
      z-index: ${(props: any) => (props.zoom ? 100 : -1)};
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      opacity: ${(props: any) => (props.zoom ? 1 : 0)};
      transition: opacity 0.3s ease-in-out;

      img {
        cursor: ${(props: any) => (props.zoom ? "zoom-out" : "zoom-in")};
        inset: 0px;
        width: 85%;
        height: auto;
      }
    }

    @media (max-width: 900px) {
      width: 80%;
      .item {
        min-width: 570px;
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
            margin-left: 10px;
            p {
              margin-top: 5px;
              font-size: 12px;
            }
          }
          #head_stack {
            /* margin: 0 0 15px 100px; */
          }

          #body {
            li {
              width: 280px;
              .title_stack {
                display: grid;
                gap: none;
                h3 {
                  font-size: 14px;
                  margin: 0;
                }
                span {
                  display: none;
                }
                section {
                  display: grid;
                  width: 200px;
                  grid-template-columns: 1fr 1fr 1fr;
                  gap: 5px;
                  margin: 0 0 10px 0;
                }
              }
              img {
                width: 280px;
              }
              p {
                width: 90%;
              }
              hr {
                width: 280px;
                text-align: start;
              }
            }
          }
        }
      }
    }
  `,
};

export default Process;
