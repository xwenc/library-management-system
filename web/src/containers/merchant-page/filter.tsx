import React, { FC } from "react";
import PropTypes from "prop-types";
import { Button, Row, Col, Form, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const { Option } = Select;

const Filter: FC = (props) => {
  return (
    <Form name="control-ref">
      <Row gutter={16} align="middle">
        <Col span={4}>
          <Form.Item name="country">
            <Select
              showSearch
              placeholder="国家"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option!.children as unknown as string)
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
            >
              <Option value="China">China</Option>
              <Option value="France">France</Option>
              <Option value="Spain">Spain</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item name="area">
            <Select
              showSearch
              placeholder="地区"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option!.children as unknown as string)
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
            >
              <Option value="Madrid">Madrid</Option>
              <Option value="Barcelona">Barcelona</Option>
              <Option value="Valencia">Valencia</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item name="language">
            <Select
              showSearch
              placeholder="语言"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option!.children as unknown as string)
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
            >
              <Option value="Chinese">Chinese</Option>
              <Option value="English">English</Option>
              <Option value="Spanish">Spanish</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item name="status">
            <Select
              showSearch
              placeholder="店铺状态"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option!.children as unknown as string)
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
            >
              <Option value="Excellent">Excellent</Option>
              <Option value="Good">Good</Option>
              <Option value="Bad">Bad</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item name="shop_type">
            <Select
              showSearch
              placeholder="店铺类型"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option!.children as unknown as string)
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
            >
              <Option value="Excellent">1</Option>
              <Option value="Good">2</Option>
              <Option value="Bad">3</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item name="industry_type">
            <Select
              showSearch
              placeholder="行业类型"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option!.children as unknown as string)
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
            >
              <Option value="Excellent">1</Option>
              <Option value="Good">2</Option>
              <Option value="Bad">3</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item name="sub_category_type" style={{ marginBottom: 0 }}>
            <Select
              showSearch
              placeholder="子分类行业类型"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option!.children as unknown as string)
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
            >
              <Option value="Excellent">1</Option>
              <Option value="Good">2</Option>
              <Option value="Bad">3</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item name="register_time" style={{ marginBottom: 0 }}>
            <Select
              showSearch
              placeholder="注册时间"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option!.children as unknown as string)
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
            >
              <Option value="Excellent">1</Option>
              <Option value="Good">2</Option>
              <Option value="Bad">3</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={4}>
          <Button type="primary" icon={<SearchOutlined />} block>
            搜索
          </Button>
        </Col>
        <Col span={4}>
          <span style={{ color: "#999", marginRight: 4 }}>搜索总数:</span>
          <span>120</span>
        </Col>
      </Row>
    </Form>
  );
};

Filter.propTypes = {};

export default Filter;
