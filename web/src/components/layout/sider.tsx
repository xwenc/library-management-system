import React, { FC } from "react";
import PropTypes from "prop-types";
import { Layout, Avatar } from "antd";
import styles from "./sider.module.less";
import SideMenu from "./menu";

const Sider: FC = (props) => {
  return (
    <Layout.Sider
      width={256}
      theme="light"
      breakpoint="lg"
      trigger={null}
      collapsible
      className={styles.sider}
    >
      <div className={styles.brand}>
        <div className={styles.logo}>
          <Avatar style={{ marginRight: 8 }} />
          <h1>Admin</h1>
        </div>
      </div>

      <div className={styles.menuContainer}>
        <SideMenu />
      </div>
    </Layout.Sider>
  );
};

Sider.propTypes = {};

export default Sider;
