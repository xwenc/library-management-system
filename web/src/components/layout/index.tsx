import React, { FC } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { Layout } from "antd";
import styles from "./index.module.less";
import { useAuth } from "@contexts/auth.context";

import Sider from "./sider";
import Header from "./header";
import Page from "@components/page";

const { Content } = Layout;
const MyLayout: FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const siderProps = {};
  const headerProps = {
    username: auth.user,
    avatar: "",
    signout: () => {
      auth.signout(() => navigate("/"));
    },
  };
  return (
    <Layout>
      <Sider {...siderProps} />
      <div className={styles.container} style={{ paddingTop: 72 }}>
        <Header {...headerProps} />
        <Content className={styles.content}>
          <Page>
            <Outlet />
          </Page>
        </Content>
      </div>
    </Layout>
  );
};

export default MyLayout;
