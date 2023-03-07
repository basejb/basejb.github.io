import React, { useState } from 'react';
import styled from 'styled-components';

const UsedStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .item {
    margin: 70px;
    width: 50%;
    display: grid;
    grid-template-columns: 1fr 5fr;
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
        display: flex;
        justify-content: space-between;
        margin-top: 20px;

        li {
          width: 30%;
          > p {
            font-weight: bold;
            padding-left: 10px;
            padding-bottom: 10px;
            font-size: 18px;
            border-bottom: solid 0.1px #ec6375;
          }
          #tag {
            display: inline-flex;
            margin: 5px;
            align-items: center;
            padding-left: 10px;
            padding-right: 10px;
            height: 25px;
            background-color: rgba(236, 99, 117, 0.4);
            border-radius: 5px;
            :hover {
              background-color: rgba(236, 99, 117, 0.8);
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
          flex-direction: column;
          align-items: flex-start;
          li {
            width: 250px;
            margin-bottom: 50px;
            > p {
              font-weight: bold;
              padding-left: 10px;
              padding-bottom: 10px;
              font-size: 15px;
              border-bottom: solid 0.1px #ec6375;
            }
            #tag {
              font-size: 12px;
              display: inline-flex;
              margin: 5px;
              align-items: center;
              padding-left: 10px;
              padding-right: 10px;
              height: 25px;
              background-color: rgba(236, 99, 117, 0.4);
              border-radius: 5px;
              :hover {
                background-color: rgba(236, 99, 117, 0.8);
              }
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
      }
    }
  }
`;

const Used = () => {
  return (
    <UsedStyle>
      <div className="bar"></div>
      <div className="item">
        <strong className="num">05</strong>
        <div className="detail">
          <ul id="head">
            <strong>기술스택</strong>
            <p>Technologies Used</p>
          </ul>
          <ul id="body">
            <li>
              <p>Authentication</p>
              <div>
                {/* <p id="tag">Social Login(Kakao,Naver)</p> */}
                {/* <p id="tag">JWT</p> */}
                {/* <p id="tag">Session</p> */}
                <p id="tag">Cookie</p>
                <p id="tag">bcrypt</p>
                <p id="tag">SWR</p>
                <p id="tag">redux</p>
                <p id="tag">SSL</p>
              </div>
            </li>
            <li>
              <p>Front</p>
              <div>
                <p id="tag">Modal</p>
                <p id="tag">InfinityScroll</p>
                <p id="tag">Emotion</p>
                <p id="tag">Socket.io</p>
                <p id="tag">React.use&#183;&#183;&#183;</p>
                <p id="tag">PWA</p>
              </div>
            </li>
            <li>
              <p>Back</p>
              <div>
                <p id="tag">AWS LightSail</p>
                <p id="tag">AWS S3</p>
                <p id="tag">MongoDB</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </UsedStyle>
  );
};

export default Used;
