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

const HeaderTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 800;
  color: #eeeeee;
  a {
    color: #eeeeee;
    text-decoration: none;
    font-size: 20px;
    text-align: center;
    line-height: 45px;
    width: 45px;
    height: 45px;
    /* background-color: darkcyan; */
    border-radius: 3px;
  }
  @media (max-width: 640px) {
    gap: 5px;
    font-size: 1.3rem;
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
    setIsShowPopupMenu(val);
  }, []);

  return (
    <HeaderWrapper>
      <HeaderTitle>
        <Link href="/">R</Link>
        <div>RACEJB</div>
      </HeaderTitle>
      <div>
        <MenuBtn isActive={isShowPopupMenu} setActive={setActive} />
      </div>
    </HeaderWrapper>
  );
};

export default Header;
