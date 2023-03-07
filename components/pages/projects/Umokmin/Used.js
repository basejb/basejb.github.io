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
            border-bottom: solid 0.1px orange;
          }
          #tag {
            display: inline-flex;
            margin: 5px;
            align-items: center;
            padding-left: 10px;
            padding-right: 10px;
            height: 25px;
            background-color: rgba(255, 165, 0, 0.4);
            border-radius: 5px;
            :hover {
              background-color: rgba(255, 165, 0, 0.8);
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
              border-bottom: solid 0.1px orange;
            }
            #tag {
              font-size: 12px;
              display: inline-flex;
              margin: 5px;
              align-items: center;
              padding-left: 10px;
              padding-right: 10px;
              height: 25px;
              background-color: rgba(255, 165, 0, 0.4);
              border-radius: 5px;
              :hover {
                background-color: rgba(255, 165, 0, 0.8);
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
        <strong className="num">06</strong>
        <div className="detail">
          <ul id="head">
            <strong>기술스택</strong>
            <p>Technologies Used</p>
          </ul>
          <ul id="body">
            <li>
              <p>Authentication</p>
              <div>
                <p id="tag">Social Login</p>
                <p id="tag">Gmail SMTP</p>
                <p id="tag">JWT</p>
                <p id="tag">Session</p>
                <p id="tag">Cookie</p>
                <p id="tag">crypto</p>
                <p id="tag">Redux</p>
              </div>
            </li>
            <li>
              <p>Posts</p>
              <div>
                <p id="tag">Infinite Scroll</p>
                <p id="tag">Attachments</p>
                <p id="tag">Nested reply</p>
                <p id="tag">Comments</p>
                <p id="tag">Pay</p>
                <p id="tag">React slick slider</p>
              </div>
            </li>
            <li>
              <p>Blocks</p>
              <div>
                <p id="tag">Socket</p>
                <p id="tag">Search Func</p>
                <p id="tag">Copy button</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </UsedStyle>
  );
};

export default Used;
