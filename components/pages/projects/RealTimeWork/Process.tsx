import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

const ProcessStyle: any = styled.div`
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
        float: left;
        position: absolute;
        margin: 10px 0 0 100px;
        .stack {
          margin-right: 10px;
        }
      }

      #body {
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
              .stack {
                margin: 0 5px 0 0;
              }
            }
          }
          img {
            width: 100%;
            height: auto;
            cursor: ${(props: any) => (props.zoom ? "zoom-out" : "zoom-in")};
          }
          .mobile {
            width: 35%;
          }
          p {
            font-size: 0.8rem;
            span {
              color: #808080;
              span {
                color: #b56622;
              }
            }
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

  @media (max-width: 600px) {
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
          margin: 0 0 15px 100px;
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
`;

const Process = () => {
  const [zoom, setZoom] = useState<string>("");

  const zoomHandler = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const { alt }: any = e.target;
    setZoom(alt);
  };

  return (
    <ProcessStyle zoom={zoom}>
      <div className="bar" />
      <div className="item">
        <strong className="num">04</strong>
        <div className="detail">
          <ul id="head">
            <strong>주요 기능</strong>
            <p>Main Function</p>
          </ul>
          <ul id="head_stack">
            {/* <Image
              className="stack"
              src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white&width=200"
            />
            <Image
              className="stack"
              src="https://img.shields.io/badge/Ubuntu-E95420?style=flat-square&logo=Ubuntu&logoColor=white"
            />
            <Image
              className="stack"
              src="https://img.shields.io/badge/Amazon AWS-232F3E?style=flat-square&logo=Amazon AWS&logoColor=white"
            />
            <Image
              className="stack"
              src="https://img.shields.io/badge/NGINX-009639?style=flat-square&logo=NGINX&logoColor=white"
            /> */}
          </ul>

          <ul id="body">
            <li onClick={(e) => zoomHandler(e)}>
              <div className="title_stack">
                <h3>💫 무한스크롤</h3>
                <span />
                <section>
                  {/* <Image
                    alt="stack"
                    className="stack"
                    src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"
                  />
                  <Image
                    alt="stack"
                    className="stack"
                    src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"
                  /> */}
                </section>
              </div>
              <Image alt="infinityScroll" src={"/work_infinity_scroll.gif"} width={200} height={200} />
              <p>
                • axios api로 초기 로드 데이터 10개를 불러오고 스크롤 값을 계산해서 추가 로드시에 10개씩 추가
                로드합니다.
              </p>
              {/* <h5>🛠use func🛠</h5> */}
              <hr />
            </li>
            <li onClick={(e) => zoomHandler(e)}>
              <div className="title_stack">
                <h3>💫 요청 작성</h3>
                <span />
                <section>
                  {/* <Image
                    alt="stack"
                    className="stack"
                    src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"
                  /> */}
                  {/* <Image
                    alt="stack"
                    className="stack"
                    src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"
                  />
                  <Image
                    alt="stack"
                    className="stack"
                    src="https://img.shields.io/badge/Amazon S3-569A31?style=flat-square&logo=Amazon S3&logoColor=white"
                  />
                  <Image
                    alt="stack"
                    className="stack"
                    src="https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=Firebase&logoColor=white"
                  />
                  <Image
                    alt="stack"
                    className="stack"
                    src="https://img.shields.io/badge/Socket.io-51DAAB?style=flat-square&logo=Socket.io&logoColor=white"
                  /> */}
                </section>
              </div>
              <Image alt="write" src={"/work_write.gif"} width={200} height={200} />
              <p>• 선택 or 입력하지 않은 Input이 있다면 ErrorHandler를 통해서 리턴합니다.</p>
              <p>• 파일을 첨부하면 FileReader를 사용해서 미리보기를 보여줍니다.</p>
              <p>• 파일을 포함한 FormData를 서버로 POST 요청합니다. </p>
              <p>• 요청 받은 FormData에서 파일은 서버에서 AWS S3에 따로 저장합니다.</p>
              <p>• DB에 저장하고 추가한 데이터를 포함한 리스트를 곧바로 Socket을 사용해서 실제 리스트 갱신합니다.</p>
              <p>
                • 저장에 성공하면 Firebase Cloud Messaging으로 요청자의 부서와 같은 채널의 유저들에게 Noti 알림을
                보냅니다.
              </p>
              <hr />
            </li>
            <li onClick={(e) => zoomHandler(e)}>
              <div className="title_stack">
                <h3>💫 필터링</h3>
                <span />
                <section>
                  {/* <img
                    className="stack"
                    src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"
                  />
                  <img
                    className="stack"
                    src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"
                  /> */}
                </section>
              </div>
              <Image alt="filter" src={"/work_filter.gif"} width={200} height={200} />
              <p>• 필터링을 적용하면 api 요청으로 해당 필터로 리스트를 로드합니다.</p>
              <p>• 매 로드시 새로 불러오는 불필요한 데이터 로드를 막기위해 수정중에 있습니다.</p>
              <hr />
            </li>
            <li onClick={(e) => zoomHandler(e)}>
              <div className="title_stack">
                <h3>💫 상태 변경</h3>
                <span />
                <section>
                  {/* <img
                    className="stack"
                    src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"
                  />
                  <img
                    className="stack"
                    src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"
                  />
                  <img
                    className="stack"
                    src="https://img.shields.io/badge/Socket.io-51DAAB?style=flat-square&logo=Socket.io&logoColor=white"
                  /> */}
                </section>
              </div>
              <Image alt="stateChange" src={"/work_state_change.gif"} width={200} height={200} />
              <p>
                • 작업물 접수 및 상태 변경을 클릭하면 해당 조건을 서버에서 이미 눌렀거나 다른 유저가 눌렀다면 예외처리
                합니다.
              </p>
              <p>
                • 상태 변경을 한 뒤 이전 상태의 filter를 그대로 적용한 리스트를 소켓을 이용해 클라이언트로 전송합니다.
              </p>
              <p>• useEffect Hooks를 거쳐서 클라이언트의 view에서는 변경된 작업물만 사라지게 보여집니다.</p>
              <hr />
            </li>
            <li onClick={(e) => zoomHandler(e)}>
              <div className="title_stack">
                <h3>💫 Notification</h3>
                <span />
                <section>
                  {/* <img
                    className="stack"
                    src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"
                  />
                  <img
                    className="stack"
                    src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"
                  /> */}
                </section>
              </div>
              <Image alt="noti" src={"/work_noti.gif"} width={200} height={200} />
              <p>
                • 같은 채널의 유저(
                <span>
                  해당 채널은 <span>office</span> 채널
                </span>
                )가 work를 등록하면 FCM을 통해 백,포그라운드 어떠한 경우에도 알림을 받습니다.
              </p>
              <hr />
            </li>
            <li onClick={(e) => zoomHandler(e)}>
              <div className="title_stack">
                <h3>💫 모바일</h3>
                <span />
                <section>
                  {/* <img
                    className="stack"
                    src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"
                  />
                  <img
                    className="stack"
                    src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"
                  />
                  <img
                    className="stack"
                    src="https://img.shields.io/badge/styled-components-DB7093?style=flat-square&logo=styled-components&logoColor=white"
                  /> */}
                </section>
              </div>
              <Image className="mobile" alt="mobile" src={"/work_mobile.gif"} width={200} height={200} />
              <p>• styled-components 및 Emotion을 사용해서 커스텀태그를 만들어 사용하며 css를 적용했습니다.</p>
              <p>• 반응형 웹을 적용해서 세세한 부분까지 유저의 입장으로써 편하게 볼수 있게 구현했습니다.</p>
              <hr />
            </li>
          </ul>
        </div>
      </div>

      <div id="zoom">
        <Image alt="zoom" src={zoom} onClick={() => setZoom("")} width={200} height={200} />
      </div>
    </ProcessStyle>
  );
};

export default Process;
