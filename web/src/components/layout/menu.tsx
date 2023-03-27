import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  SettingOutlined,
  AppstoreOutlined,
  CalendarOutlined,
  TeamOutlined,
  LockOutlined
} from "@ant-design/icons";
import type { MenuProps } from "antd/es/menu";


type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("注册", "register", <SettingOutlined />, [
    getItem(<Link to="/personals">个人</Link>, "register-personal"),
    getItem(<Link to="/merchants">商家</Link>, "register-merchant"),
  ]),
  getItem("属性", "attributes", <AppstoreOutlined />, [
    getItem("编辑属性", "attributes-edit"),
    getItem("分配属性", "attributes-distribute"),
  ]),
  getItem("分类", "categories", <CalendarOutlined />),
  getItem("举报", "reports", <TeamOutlined />, [
    getItem("举报个人", "report-edit"),
    getItem("举报商家", "report-distribute"),
  ]),
  getItem("权限", "permission", <LockOutlined />, [
    getItem("设置权限", "permission-set"),
  ]),
];

const MyMenu: FC = () => {
  return (
    <Menu
      style={{ width: 256 }}
      defaultSelectedKeys={["register-personal"]}
      defaultOpenKeys={["register"]}
      mode="inline"
      theme="light"
      items={items}
    />
  );
};

export default MyMenu;
