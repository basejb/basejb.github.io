import React from "react";
import styled from "styled-components";

import Image from "next/image";

const BrandingStyle = styled.div`
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

      li {
        list-style: none;
      }

      #head {
        font-size: 1.2rem;

        p {
          margin-top: 5px;
          font-size: 0.8rem;
        }
      }

      #body {
        display: grid;
        grid-template-columns: 2fr 2fr 1fr;
        margin-top: 20px;
        li {
          display: flex;
          flex-direction: column;
          align-items: center;
          #title {
            margin-top: 70px;
            margin-bottom: 50px;
            border-bottom: solid 1px #79928e;
            padding-bottom: 5px;
          }
          div {
            height: 200px;
            display: flex;
            justify-content: center;
            align-items: center;
            #logo {
              height: 150px;
              width: auto;
            }
            #name {
              font-family: KCC;
              font-size: 4rem;
              height: 100px;
            }
            #color {
              width: 80px;
              background-color: #79928e;
              height: 80px;
              border-radius: 50%;
            }
          }
          #explanation {
            margin-top: 70px;
            width: 80%;
            font-size: 14px;
            line-height: 25px;
          }
          #list {
            height: auto;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-top: 70px;
            font-size: 14px;
            p:nth-child(1) {
              margin-top: 3px;
            }
            p {
              margin: 8px;
            }
          }
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
          display: flex;
          flex-direction: column;
          align-items: center;
          li {
            width: 250px;
            margin-bottom: 50px;

            #explanation {
              margin-top: 50px;
            }
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
          li {
            width: 220px;
            margin-bottom: 50px;
            div {
              height: 120px;
              #logo {
                height: 100px;
              }
              #name {
                height: 60px;
              }
              #color {
                height: 50px;
                width: 50px;
              }
            }
            #title {
              font-size: 15px;
            }
            #explanation {
              font-size: 12px;
            }
            #list {
              margin-top: 50px;
              font-size: 12px;
              p:nth-child(1) {
                margin-top: 0;
              }
              p {
                margin: 5px;
              }
            }
          }
        }
      }
    }
  }
`;

const Branding = () => {
  return (
    <BrandingStyle>
      <div className="bar" />
      <div className="item">
        <strong className="num">02</strong>
        <div className="detail">
          <ul id="head">
            <strong>브랜딩</strong>
            <p>Branding</p>
          </ul>
          <ul id="body">
            <li>
              <p id="title">Logo</p>
              <div>
                <Image alt="logo" id="logo" src={"/umokminLogo2.png"} width={50} height={50} />
              </div>
              <p id="explanation">
                자연의 색을 표현하고자 푸른색감과 한곳의 머무름 보다는 유목민이라는 이름대로 '자유로움'을 강조한 여행의
                의미를 표현.
              </p>
            </li>
            <li>
              <p id="title">Name</p>
              <div>
                <div id="name">umokmin</div>
              </div>
              <p id="explanation">
                특정한 위치에 정착하지 않는 유목민(Nomad) 생활을 하며 곳곳을 떠돌아 다닌다는 의미와 더불어, 끊임없이
                자유로운 여행을 즐긴다는 의미를 가짐.
              </p>
            </li>
            <li>
              <p id="title">Color</p>
              <div>
                <div id="color" />
              </div>
              <div id="list">
                <p>R 47</p>
                <p>G 57</p>
                <p>B 56</p>
                <p>#79928e</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </BrandingStyle>
  );
};

export default Branding;
