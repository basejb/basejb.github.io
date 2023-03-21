import React from "react";
import { NextComponentType, NextPage } from "next";
import Copyright from "./Copyright";
import Header from "./header";
import Sites from "./Sites";

export type IDefaultLayoutPage<P = {}> = NextPage<P> & {
  getLayout(page: NextComponentType, props: unknown): React.ReactNode;
};

interface IDefaultLayoutProps {
  Page: IDefaultLayoutPage;
}

const DefaultLayout = ({ Page, ...props }: IDefaultLayoutProps) => {
  // const [isShowPopupMenu, setIsShowPopupMenu] = useState(false);

  return (
    <div>
      {/* mobile navigation */}
      <Header />

      <Page {...props} />
      <Copyright />
      <Sites />
    </div>
  );
};

export const getDefaultLayout = (Page: IDefaultLayoutPage, props: Record<string, unknown>) => {
  return <DefaultLayout Page={Page} {...props} />;
};
