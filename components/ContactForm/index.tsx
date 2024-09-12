"use client";
import { Col, Form, Input, Row, Typography } from "antd";
import React from "react";
import ButtonOutline from "../ButtonOutline";
import TextArea from "antd/es/input/TextArea";

const { Text } = Typography;

const ContactForm = () => {
  return (
    <Form layout="vertical">
      <Row gutter={32}>
        <Col xs={24} md={12}>
          <Form.Item
            label={<Text className="text-lg font-thin">Name</Text>}
            name="name"
          >
            <Input className="w-full h-12 text-lg border-[#949494]" />
          </Form.Item>
          <Form.Item
            label={<Text className="text-lg font-thin">Email</Text>}
            name="email"
          >
            <Input className="w-full h-12 text-lg border-[#949494]" />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item
            label={<Text className="text-lg font-thin">Message</Text>}
            name="message"
          >
            <TextArea rows={5} className="w-full text-lg border-[#949494]" />
          </Form.Item>
          <Form.Item className="flex justify-end">
            <ButtonOutline type="primary" htmlType="submit">
              Send email
            </ButtonOutline>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default ContactForm;
