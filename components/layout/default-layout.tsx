import React, { useState } from "react";
import { NextComponentType, NextPage } from "next";
import { motion } from "framer-motion";
import Copyright from "./Copyright";
import Header from "./header";

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

const DefaultLayout = ({ Page, ...props }: IDefaultLayoutProps) => {
  const [isShowPopupMenu, setIsShowPopupMenu] = useState(false);

  return (
    <div>
      {/* mobile navigation */}
      <Header />

      <Page {...props} />
      <Copyright />
    </div>
  );
};

export const getDefaultLayout = (Page: IDefaultLayoutPage, props: Record<string, unknown>) => {
  return <DefaultLayout {...props} Page={Page} />;
};
