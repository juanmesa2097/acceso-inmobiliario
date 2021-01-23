import { DownOutlined, SearchOutlined, UpOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Select } from "antd";
import React, { useState } from "react";

const { Option } = Select;

const FilterBox = (props) => {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="absolute right-0 w-full p-6 transform -translate-y-1/2 bg-white shadow-2xl lg:w-2/3 top-full">
      <Form
        form={form}
        name="advanced_search"
        className="ant-advanced-search-form"
        onFinish={onFinish}
      >
        <Row gutter={24}>
          <Col span={4}>
            <Form.Item name="city" label="Ciudad" labelCol={{ span: 24 }}>
              <Select placeholder="- Seleccionar -">
                <Option value="medellin">Medellín</Option>
                <Option value="cali">Cali</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item
              name="neighborhood"
              label="Barrio"
              labelCol={{ span: 24 }}
            >
              <Select placeholder="- Seleccionar -">
                <Option value="Buenos aires">Bueno aires</Option>
                <Option value="Calasanz">Calasanz</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item
              name="neighborhood"
              label="Tipo de inmueble"
              labelCol={{ span: 24 }}
            >
              <Select placeholder="- Seleccionar -">
                <Option value="Buenos aires">Tipo aires</Option>
                <Option value="Calasanz">Calasanz</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item
              name="minPrice"
              label="Precio min"
              labelCol={{ span: 24 }}
            >
              <Input placeholder="placeholder" />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item
              name="maxPrice"
              label="Precio max"
              labelCol={{ span: 24 }}
            >
              <Input placeholder="placeholder" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={4}>
            <Form.Item name="area" label="Área" labelCol={{ span: 24 }}>
              <Select placeholder="- Seleccionar -"></Select>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="bedrooms" label="Alcobas" labelCol={{ span: 24 }}>
              <Select placeholder="- Seleccionar -"></Select>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="bathrooms" label="Baños" labelCol={{ span: 24 }}>
              <Select placeholder="- Seleccionar -"></Select>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="code" label="Código" labelCol={{ span: 24 }}>
              <Select placeholder="- Seleccionar -"></Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ textAlign: "right" }}>
            <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>
              Buscar
            </Button>
            <Button
              style={{ margin: "0 8px" }}
              onClick={() => {
                form.resetFields();
              }}
            >
              Limpiar
            </Button>
            <a
              style={{ fontSize: 12 }}
              onClick={() => {
                setExpand(!expand);
              }}
            >
              {expand ? <UpOutlined /> : <DownOutlined />} Colapsar
            </a>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default FilterBox;
