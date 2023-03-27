import React, { FC } from "react";
import PropTypes from "prop-types";
import { AimOutlined } from "@ant-design/icons";
import { Row, Form, Col, Select, Button } from "antd";
const Option = Select.Option;

const Search: FC = (props) => {
  const children: React.ReactNode[] = [];
  for (let i = 10; i < 36; i++) {
    children.push(
      <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
    );
  }
  return (
    <Form name="control-ref">
      <Row gutter={16} align="middle" justify="space-between">
        <Col span={2}>
          <AimOutlined style={{ fontSize: 32, color: "#999" }} />
        </Col>
        <Col span={12}>
          <Form.Item name="area" style={{ marginBottom: 0 }}>
            <Select mode="tags" style={{ width: "100%" }} placeholder="请输入...">
              {children}
            </Select>
          </Form.Item>
        </Col>
        <Col span={4}>
          <Button type="primary" block >
            搜索
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

Search.propTypes = {};

export default Search;
