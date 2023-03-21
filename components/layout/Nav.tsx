import React, { useRef, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";

const Nav = () => {
  const NavRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  useOnClickOutside(NavRef, () => setOpen(false));

  return (
    <S.Container open={open} onKeyDown={(e) => e.code === "Escape" && setOpen(!open)}>
      <button type="button" className="nav__btn" onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </button>
      <S.Background open={open} />
      <div className="nav__menu" ref={NavRef}>
        <button type="button" className="nav__btn" onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </button>
        <ul>
          <li>
            <Link href="/" onClick={() => setOpen(!open)}>
              HOME
            </Link>
          </li>

          <li>
            <Link href="/projects/hugus" onClick={() => setOpen(!open)}>
              PROJECTS
            </Link>
          </li>
          <li>
            <Link href="/me" onClick={() => setOpen(!open)}>
              IT'S ME
            </Link>
          </li>
          {/* <li>
            <Link href="/study" onClick={() => setOpen(!open)}>
              STUDY
            </Link>
          </li> */}
        </ul>
      </div>
    </S.Container>
  );
};

const S = {
  Container: styled.nav<{ open: boolean }>`
    .nav__btn {
      display: block;
      position: absolute;
      width: 35px;
      height: 35px;
      top: 45px;
      right: 7%;
      background: none;
      border: none;
      cursor: pointer;

      span {
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: #fff;
        border-radius: 4px;
      }

      span:nth-child(1) {
        top: 5px;
        right: 1px;
      }

      span:nth-child(2) {
        top: 15px;
        right: 1px;
      }

      span:nth-child(3) {
        top: 25px;
        right: 1px;
      }
    }

    .nav__menu {
      visibility: ${(props) => (props.open ? "visible" : "hidden")};
      position: fixed;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      right: 0;
      top: 0;
      width: ${(props: any) => (props.open ? "500px" : "0")};
      height: 100vh;
      background-color: #212121;
      transition: all 1s cubic-bezier(0.55, 0.085, 0, 0.99);
      transition-delay: ${(props: any) => (props.open ? "0s" : "0.5s")};

      .nav__btn {
        position: absolute;
        width: 35px;
        height: 35px;
        top: 45px;
        left: 10%;
        background: none;
        border: none;
        cursor: pointer;
        transition-delay: 1s;
        transition: 1s ease-in-out;

        span {
          transition: all 0.3s ease-in-out;
          transition-delay: ${(props: any) => (props.open ? "0.5s" : "0.1s")};
          opacity: ${(props: any) => (props.open ? "1" : "0")};
        }

        span:nth-child(1) {
          ${(props: any) => (props.open ? "transform:rotate(-45deg); top:15px;right:1px" : "top:5px;right:1px")}
        }

        span:nth-child(2) {
          ${(props: any) => (props.open ? "opacity: 0;top:15px;right:1px" : "top:15px;right:1px")}
        }

        span:nth-child(3) {
          ${(props: any) => (props.open ? "transform: rotate(45deg);top:15px;right:1px" : "top:25px;right:1px")}
        }
      }

      ul {
        display: flex;
        flex-direction: column;
        width: 50%;
        height: 40%;
        list-style: none;
        padding: 0;
        li {
          width: 100%;
          transition: all 0.4s ease-in-out;

          a {
            font-family: AppleSDGothicNeoEB00;
            text-decoration: none;
            text-align: left;
            font-size: 1.7rem;
            background: none;
            color: white;
            cursor: pointer;
            -webkit-font-smoothing: antialiased;
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke: 0.5px white;
            font-weight: bolder;
            line-height: 5rem;
            transition: all 0.3s cubic-bezier(0.46, 0.03, 0.52, 0.96);
            :hover {
              -webkit-text-stroke: 0.5px var(--theme);
              -webkit-text-fill-color: var(--theme);
            }
          }
          :nth-child(1) {
            transform: translateX(${(props: any) => (props.open ? 0 : 100)}px);
            transition-delay: ${(props: any) => (props.open ? "0.5s" : "0.45s")};
            opacity: ${(props: any) => (props.open ? "1" : "0")};
          }
          :nth-child(2) {
            transform: translateX(${(props: any) => (props.open ? 0 : 100)}px);
            transition-delay: ${(props: any) => (props.open ? "0.65s" : "0.3s")};
            opacity: ${(props: any) => (props.open ? "1" : "0")};
          }
          :nth-child(3) {
            transform: translateX(${(props: any) => (props.open ? 0 : 100)}px);
            transition-delay: ${(props: any) => (props.open ? "0.8s" : "0.15s")};
            opacity: ${(props: any) => (props.open ? "1" : "0")};
          }
        }
      }
    }

    @media (max-width: 640px) {
      .nav__btn {
        width: 25px;
        height: 20px;
        top: 15px;
        right: 7%;
        background: none;
        border: none;
        cursor: pointer;

        span:nth-child(1) {
          top: 5px;
          right: 1px;
        }

        span:nth-child(2) {
          top: 13px;
          right: 1px;
        }

        span:nth-child(3) {
          top: 21px;
          right: 1px;
        }
      }

      .nav__menu {
        left: 0;
        width: 100%;
        height: ${(props: any) => (props.open ? "100vh" : "0")};
        transition: all 1s cubic-bezier(0.55, 0.085, 0, 0.99);
        -webkit-transition: all 1s cubic-bezier(0.55, 0.085, 0, 0.99);

        .nav__btn {
          left: 87%;
          top: 20px;
        }

        ul {
          height: 100%;
          justify-content: center;
          li {
            a {
              font-size: 1.5rem;
            }
          }
        }
      }
    }
  `,
  Background: styled.article<{ open: boolean }>`
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    opacity: ${(props) => (props.open ? "1" : "0")};
    background-color: rgba(16, 16, 16, 0.15);
    visibility: ${(props) => (props.open ? "visible" : "hidden")};
    transition: all 1s cubic-bezier(0.55, 0.085, 0, 0.99);
    transition-delay: ${(props: any) => (props.open ? "0.1s" : "0.4s")};
  `,
};

export default React.memo(Nav);
