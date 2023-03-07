import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';

const YoutubeStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .item {
    margin: 70px;
    width: 50%;
    display: grid;
    grid-template-columns: 1fr 5fr;
    background-color: transparent;

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
        #youtube {
          width: 100%;
          height: 350px;
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
          #youtube {
            height: 250px;
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
          #youtube {
            width: 250px;
            height: 150px;
          }
        }
      }
    }
  }
`;

const Youtube = () => {
  return (
    <YoutubeStyle>
      <div className="bar"></div>
      <div className="item">
        <strong className="num">08</strong>
        <div className="detail">
          <ul id="head">
            <strong>데모영상</strong>
            <p>Demo Version</p>
          </ul>
          <ul id="body">
            <iframe
              id="youtube"
              src="https://www.youtube.com/embed/WQ3bC9PWWbo"
              title="HUGUS Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </ul>
        </div>
      </div>
    </YoutubeStyle>
  );
};

export default Youtube;
