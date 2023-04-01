import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  UserOutlined,
  BookOutlined,
  UserSwitchOutlined
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
  getItem(<Link to="/users">Users</Link>, "users", <UserOutlined />),
  getItem(<Link to="/books">Books</Link>, "books", <BookOutlined />),
  getItem(<Link to="/assigns">Assigns</Link>, "assigns", <UserSwitchOutlined />), 
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
