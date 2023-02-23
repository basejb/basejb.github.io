import React, { useCallback, useState } from "react";
import { NextComponentType, NextPage } from "next";
import { motion } from "framer-motion";
import MenuBtn from "./menu-btn";
import styled from "styled-components";
import Link from "next/link";
import Copyright from "./Copyright";

export type IDefaultLayoutPage<P = {}> = NextPage<P> & {
  getLayout(page: NextComponentType, props: unknown): React.ReactNode;
  pageHeader?: IPageHeader;
};

export interface IPageHeader {
  title: string;
}

interface IDefaultLayoutProps {
  Page: IDefaultLayoutPage;
}

const HeaderWrapper = styled.div`
  @media (max-width: 640px) {
    padding: 0 20px;
    z-index: 40;
    height: 60px;
  }
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 40px 80px;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 40;
  transition: all 0.25s;
`;

const HeaderTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
  a {
    text-decoration: none;
    color: black;
    font-size: 20px;
    text-align: center;
    line-height: 45px;
    width: 45px;
    height: 45px;
    background-color: darkcyan;
    border-radius: 3px;
  }
`;

const MenuStyle = {
  zIndex: 3,
  backgroundColor: "rgb(255 255 255 / 1)",
  opacity: 1,
  transform: "none",
  padding: "20px",
  position: "fixed",
  height: "100vh",
  width: "100%",
};

const DefaultLayout = ({ Page, ...props }: IDefaultLayoutProps) => {
  const [isShowSidebar, setIsShowSidebar] = useState(true);
  const [isShowPopupMenu, setIsShowPopupMenu] = useState(false);

  const setActive = useCallback((val: boolean) => {
    if (val) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    setIsShowPopupMenu(val);
  }, []);

  return (
    <div style={{ overflow: "hidden", height: "100vh" }}>
      {/* 사이드바 자리 */}

      {/* mobile navigation */}
      <HeaderWrapper>
        <HeaderTitle>
          <Link href="/">R</Link>
          <div>racejb</div>
        </HeaderTitle>
        <div>
          <MenuBtn isActive={isShowPopupMenu} setActive={setActive} />
        </div>
      </HeaderWrapper>
      <motion.div
        animate={isShowPopupMenu ? "open" : "closed"}
        initial={{ display: "none" }}
        variants={{
          open: { display: "block", opacity: 1, y: 0 },
          closed: { opacity: 0, y: "-10px", transitionEnd: { display: "none" } },
        }}
        transition={{ duration: 0.15 }}
        style={MenuStyle}
      >
        {/* <Profile /> */}
        {/* <MainMenu /> */}
      </motion.div>

      <Page {...props} />
      <Copyright />
    </div>
  );
};

export const getDefaultLayout = (Page: IDefaultLayoutPage, props: Record<string, unknown>) => {
  return <DefaultLayout {...props} Page={Page} />;
};
