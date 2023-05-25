import React, { useEffect } from "react";
import MenuBtn from "./menu-btn";
import styled from "styled-components";
import Link from "next/link";
import Nav from "./Nav";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const handleMain = (e: any) => {
    e.preventDefault();
    router.push(
      {
        pathname: "/",
        //  query: '',
      },
      undefined,
      { scroll: true },
    );
  };

  useEffect(() => {
    if (router.pathname === "/") {
      router.push(
        {
          pathname: "/",
        },
        undefined,
        { scroll: true },
      );
    }
  }, []);

  return (
    <S.Header>
      <S.HeaderTitle>
        <Link href="/" passHref onClick={handleMain}>
          <S.Title>BASEJB.</S.Title>
        </Link>

        <S.Email>
          <a href="mailto:dev.bearjb@gmail.com">dev.bearjb@gmail.com</a>
        </S.Email>
      </S.HeaderTitle>
      {/* <MenuBtn isActive={isShowPopupMenu} setActive={setActive} /> */}
      <Nav />
    </S.Header>
  );
};

const S = {
  Header: styled.header`
    @media (max-width: 640px) {
      padding: 0 20px;
      z-index: 10;
      height: 60px;
    }
    position: fixed;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 40px 80px;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 10;
    transition: all 0.25s;
  `,
  HeaderTitle: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: all 0.5s ease-in-out;
    gap: 20px;
    & > a {
      display: flex;
      gap: 20px;
      transition: all 0.5s ease-in-out;
      color: ${(props: any) => (!props.open ? "#eeeeee" : "#000000")};
      text-decoration: none;
      font-size: 1.5rem;
      text-align: center;
      line-height: 45px;
      width: auto;
      height: 45px;
      border-radius: 3px;
    }
    p {
      transition: all 0.5s ease-in-out;
      color: ${(props: any) => (!props.open ? "#eeeeee" : "#000000")};
    }
  `,
  Title: styled.p`
    font-size: 1.8rem;
    font-weight: 800;
    @media (max-width: 640px) {
      gap: 5px;
      font-size: 1rem;
      font-weight: 700;
    }
  `,
  Email: styled.div`
    margin-left: 3rem;
    letter-spacing: 0;
    a {
      text-decoration: none;
      transition: all 0.3s cubic-bezier(0.46, 0.03, 0.52, 0.96);
      font-size: 1.3rem;
      font-weight: 600;
      line-height: 1.6;
      color: ${(props: any) => (!props.open ? "rgba(255, 255, 255, 0.521)" : "#000000")};
    }
    @media (max-width: 640px) {
      margin-left: 0;
      a {
        font-size: 0.8rem;
        font-weight: 700;
      }
    }
  `,
};

export default React.memo(Header);
