import { Col, Divider, Row, Tag, Typography } from 'antd';
import React from 'react';
import details from '../resume/resume.json';

const { Title, Paragraph } = Typography;

export default function Summary() {
  return (
    <Row>
      <Col>
        <Divider>Summary</Divider>
        <Paragraph>{details.basics.summary}</Paragraph>
        <Title level={5}>Expertise</Title>
        {details.basics.expertise.map((topic) => (
          <Tag color="red">{topic}</Tag>
        ))}
      </Col>
    </Row>
  );
}
