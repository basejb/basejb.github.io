import React from "react";
import styled from "styled-components";

const Sites = () => {
  return (
    <S.Sites>
      <button type="button">
        <a href="https://github.com/basejb" target="_blank" id="github" rel="noreferrer">
          GH.
        </a>
      </button>
      <button type="button">
        <a href="https://www.instagram.com/racejb/?hl=ko" target="_blank" id="instagram" rel="noreferrer">
          IG.
        </a>
      </button>
    </S.Sites>
  );
};

const S = {
  Sites: styled.div`
    transition: all 0.5s ease-in;
    position: fixed;
    display: flex;
    justify-content: center;
    flex-direction: column;
    top: 0;
    right: 10px;
    height: 100vh;
    z-index: 3;
    gap: 20px;
    button {
      color: #cccccc;
      background: none;
      border: none;
      transform: rotate(-90deg);
      a {
        cursor: pointer;
        color: inherit;
        font-size: 1rem;
        font-weight: 900;
        margin: 0 10px;
        text-decoration: none;
        opacity: 0.7;
        :hover {
          color: #fff;
          opacity: 0.9;
        }
      }
    }
    @media (max-width: 640px) {
      align-items: flex-end;
      flex-direction: row;
      padding-bottom: 20px;
      gap: 5px;
      button {
        transform: rotate(0);
        a {
          font-size: 0.8rem;
        }
      }
    }
  `,
};

export default React.memo(Sites);
