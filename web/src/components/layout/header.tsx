import React, { FC } from "react";
import { Menu, Layout, Avatar } from "antd";
import cx from "classnames";
import styles from "./header.module.less";

const Header: FC<{ username: string; avatar: string; signout: () => void }> = ({
  username,
  avatar,
  signout,
}) => {
  const items = [
    {
      label: (
        <>
          <span style={{ color: "#999", marginRight: 4 }}>Hi,</span>
          <span>{username}</span>
          <Avatar style={{ marginLeft: 8 }} src={avatar} />
        </>
      ),
      key: "submenu",
      children: [
        { label: "Sign out", key: "submenu-sign-out", onClick: signout },
      ],
    },
  ];
  return (
    <Layout.Header className={cx(styles.header, styles.fixed)}>
      <Menu items={items} mode="horizontal" />
    </Layout.Header>
  );
};

Header.propTypes = {};

export default Header;
