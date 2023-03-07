import React, { useEffect, useState } from "react";
import { NextComponentType, NextPage } from "next";
import { motion } from "framer-motion";
import Copyright from "./Copyright";
import Header from "./header";
import { useRouter } from "next/router";

export interface IPageHeader {
  title: string;
}

export type IDefaultLayoutPage<P = {}> = NextPage<P> & {
  getLayout(page: NextComponentType, props: unknown): React.ReactNode;
  pageHeader?: IPageHeader;
};

interface IDefaultLayoutProps {
  Page: IDefaultLayoutPage;
}

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
  const router = useRouter();
  const [pageOverflow, setOverflow] = useState("hidden");
  const [isShowPopupMenu, setIsShowPopupMenu] = useState(false);

  useEffect(() => {
    // router.route.includes("projects") ? setOverflow("auto") : setOverflow("hidden");
  }, [router]);

  return (
    <div style={{ overflow: pageOverflow, height: "100vh" }}>
      {/* 사이드바 자리 */}

      {/* mobile navigation */}
      <Header isShowPopupMenu={isShowPopupMenu} setIsShowPopupMenu={setIsShowPopupMenu} />
      <motion.div
        animate={isShowPopupMenu ? "open" : "closed"}
        initial={{ display: "none" }}
        variants={{
          open: { display: "block", opacity: 1, y: 0 },
          closed: { opacity: 0, y: "-10px", transitionEnd: { display: "none" } },
        }}
        transition={{ duration: 0.15 }}
        // style={MenuStyle}
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
