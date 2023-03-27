import React, { FC } from "react";
import { Divider, Avatar, Dropdown, Menu, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Search from "@components/search";
import Filter from "./filter";
import Table from "@components/table";

const imageSrc =
  "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80";

const PersonalPage: FC = () => {
  const columns = [
    {
      title: "头像",
      dataIndex: "avatar",
      render: (text: string): React.ReactNode => (
        <Avatar shape="square" src={text} />
      ),
    },
    {
      title: "名称",
      dataIndex: "name",
      render: (text: string): React.ReactNode => <span>{text}</span>,
    },
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "国家",
      dataIndex: "country",
    },
    {
      title: "电话",
      dataIndex: "telephone",
    },
    {
      title: "邮箱",
      dataIndex: "email",
    },
    {
      title: "注册时间",
      dataIndex: "registerTime",
    },
    {
      title: "个人状态",
      dataIndex: "status",
      render: (text: string): React.ReactNode => (
        <div>
          <Dropdown
            trigger={["click"]}
            overlay={
              <Menu
                items={[
                  { key: "1", label: "Ok" },
                  { key: "2", label: "RESTRINGIDO" },
                  { key: "3", label: "SUSPENDIDO" },
                ]}
              />
            }
          >
            <div>
              <span>{text}</span>
              <DownOutlined style={{ marginLeft: 8 }} />
            </div>
          </Dropdown>
        </div>
      ),
    },
    {
      title: "关联店铺",
      dataIndex: "shop",
    },
  ];
  const dataSource = [
    {
      avatar: imageSrc,
      name: "Alexis",
      id: 1,
      country: "China",
      telephone: "123456789",
      email: "123@124.com",
      registerTime: "2020-01-01",
      status: "OK",
      shop: "店铺1",
      key: "1",
    },
    {
      avatar: imageSrc,
      name: "Carlos",
      id: 2,
      country: "China",
      telephone: "123456789",
      email: "123@124.com",
      registerTime: "2020-01-01",
      status: "RESTRINGIDO",
      shop: "店铺1",
      key: "2",
    },
    {
      avatar: imageSrc,
      name: "Alexis",
      id: 3,
      country: "China",
      telephone: "123456789",
      email: "123@124.com",
      registerTime: "2020-01-01",
      status: "OK",
      shop: "店铺1",
      key: "3",
    },
    {
      avatar: imageSrc,
      name: "Alexis",
      id: 4,
      country: "China",
      telephone: "123456789",
      email: "123@124.com",
      registerTime: "2020-01-01",
      status: "RESTRINGIDO",
      shop: "店铺1",
      key: "4",
    },
    {
      avatar: imageSrc,
      name: "Alexis",
      id: 5,
      country: "China",
      telephone: "123456789",
      email: "123@124.com",
      registerTime: "2020-01-01",
      status: "SUSPENDIDO",
      shop: "店铺1",
    },
  ];
  const tableProps = {
    columns,
    dataSource,
  };

  return (
    <>
      <Search />
      <Divider />
      <Filter />
      <Divider />
      <Table tableProps={tableProps} />
    </>
  );
};

export default PersonalPage;
