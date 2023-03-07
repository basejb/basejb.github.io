import React, { useState } from 'react';
import styled from 'styled-components';

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
            border-bottom: solid 1px #ec6375;
            padding-bottom: 5px;
          }
          div {
            height: 200px;
            display: flex;
            justify-content: center;
            align-items: center;
            #logo {
              height: 150px;
            }
            #name {
              height: 100px;
            }
            #color {
              height: 50px;
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
      <div className="bar"></div>
      <div className="item">
        <strong className="num">06</strong>
        <div className="detail">
          <ul id="head">
            <strong>브랜딩</strong>
            <p>Branding</p>
          </ul>
          <ul id="body">
            <li>
              <p id="title">Logo</p>
              <div>
                <img id="logo" src="/src/assets/images/hugusLogo.png" />
              </div>
              <p id="explanation">
                따뜻함이 전해지는 주황색으로 기부자를 나타내었으며, 도움을
                필요로 하는 수혜자와의 포옹을 표현하였다.
              </p>
            </li>
            <li>
              <p id="title">Name</p>
              <div>
                <img id="name" src="/src/assets/images/hugusName.png" />
              </div>
              <p id="explanation">
                포옹하다 'HUG' + 우리를 'US'. 기부를 통해 서로를 껴안는다는
                의미와 더불어, 기부의 선순환을 통해 'HUG EARTH'라는 지구
                공동체적 인식의 확장적 의미를 가진다.
              </p>
            </li>
            <li>
              <p id="title">Color</p>
              <div>
                <img id="color" src="/src/assets/images/hugusColor.png" />
              </div>
              <div id="list">
                <p>R 255</p>
                <p>G 165</p>
                <p>B 0</p>
                <p>#FFA500</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </BrandingStyle>
  );
};

export default Branding;
