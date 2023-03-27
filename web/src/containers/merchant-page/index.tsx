import React, { FC } from "react";
import { Divider, Avatar, Dropdown, Menu, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Search from "@components/search";
import Filter from "./filter";
import Table from "@components/table";

const imageSrc =
  "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg";

const MerchantPage: FC = () => {
  const columns = [
    {
      title: "图片",
      dataIndex: "avatar",
      render: (text: string): React.ReactNode => (
        <img alt="" src={text} style={{ height: 24 }} />
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
      title: "被举报",
      dataIndex: "reported",
    },
    {
      title: "最新被举报",
      dataIndex: "latest_reported",
    },
    {
      title: "店铺类型",
      dataIndex: "shop_type",
    },
    {
      title: "行业类型",
      dataIndex: "industry_type",
    },
    {
      title: "子分类",
      dataIndex: "sub_category",
    },
    {
      title: "注册时间",
      dataIndex: "register_time",
    },
    {
      title: "店铺状态",
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
      title: "相关账户",
      dataIndex: "account",
    },
  ];
  const dataSource = [
    {
      avatar: imageSrc,
      name: "ZARA",
      id: 1,
      reported: "12",
      latest_reported: "2",
      shop_type: "批发店",
      industry_type: "服装",
      sub_category: "女装",
      register_time: "2020-01-01",
      status: "OK",
      account: "Alexis",
      key: "1",
    },
    {
      avatar: imageSrc,
      name: "ZARA",
      id: 2,
      reported: "12",
      latest_reported: "2",
      shop_type: "批发店",
      industry_type: "服装",
      sub_category: "女装",
      register_time: "2020-01-01",
      status: "OK",
      account: "Alexis",
      key: "2",
    },
    {
      avatar: imageSrc,
      name: "ZARA",
      id: 3,
      reported: "12",
      latest_reported: "2",
      shop_type: "批发店",
      industry_type: "服装",
      sub_category: "女装",
      register_time: "2020-01-01",
      status: "OK",
      account: "Alexis",
      key: "3",
    },
    {
      avatar: imageSrc,
      name: "ZARA",
      id: 4,
      reported: "12",
      latest_reported: "2",
      shop_type: "批发店",
      industry_type: "服装",
      sub_category: "女装",
      register_time: "2020-01-01",
      status: "OK",
      account: "Alexis",
      key: "4",
    },
    {
      avatar: imageSrc,
      name: "ZARA",
      id: 5,
      reported: "12",
      latest_reported: "2",
      shop_type: "批发店",
      industry_type: "服装",
      sub_category: "女装",
      register_time: "2020-01-01",
      status: "OK",
      account: "Alexis",
      key: "5",
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

export default MerchantPage;
