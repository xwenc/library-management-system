import React, { FC } from "react";
import { Table } from "antd";
import styles from "./index.module.less";

const MyTable: FC<{ tableProps: object }> = ({ tableProps }) => {
  return (
    <Table
      {...tableProps}
      bordered
      scroll={{ x: 1200 }}
      className={styles.table}
      rowKey={(record) => record.id}
      pagination={false}
    />
  );
};

MyTable.propTypes = {};

export default MyTable;
