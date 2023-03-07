import React, { useCallback, useState } from "react";
import MenuBtn from "./menu-btn";
import styled from "styled-components";
import Link from "next/link";

const HeaderWrapper = styled.div`
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
`;

const Email = styled.div`
  margin-left: 3rem;
  letter-spacing: 0;
  a {
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.46, 0.03, 0.52, 0.96);
    font-size: 1.3rem;
    font-weight: 600;
    line-height: 1.6;
  }
`;

const HeaderTitle: any = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
  transition: all 0.5s ease-in-out;
  & > a {
    transition: all 0.5s ease-in-out;
    color: ${(props: any) => (!props.open ? "#eeeeee" : "#000000")};
    text-decoration: none;
    font-size: 1.5rem;
    text-align: center;
    line-height: 45px;
    width: 45px;
    height: 45px;
    border-radius: 3px;
  }
  ${Email} {
    a {
      color: ${(props: any) => (!props.open ? "rgba(255, 255, 255, 0.521)" : "#000000")};
    }
  }
  p {
    transition: all 0.5s ease-in-out;
    color: ${(props: any) => (!props.open ? "#eeeeee" : "#000000")};
  }
`;

const Title = styled.p`
  font-size: 1.8rem;
  font-weight: 800;
  @media (max-width: 640px) {
    gap: 5px;
    font-size: 1rem;
    font-weight: 700;
  }
`;

const Header = (props: any) => {
  const { isShowPopupMenu, setIsShowPopupMenu } = props;
  const [isShowSidebar, setIsShowSidebar] = useState(true);

  const setActive = useCallback((val: boolean) => {
    if (val) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    setTimeout(() => {
      setIsShowPopupMenu(val);
    }, 100);
  }, []);

  return (
    <HeaderWrapper>
      <HeaderTitle open={isShowPopupMenu}>
        <Link href="/">R</Link>
        <Title>RACEJB.</Title>
        <Email>
          <a href="mailto:moonnr94@gmail.com">moonnr94@gmail.com</a>
        </Email>
      </HeaderTitle>
      <MenuBtn isActive={isShowPopupMenu} setActive={setActive} />
    </HeaderWrapper>
  );
};

export default Header;
