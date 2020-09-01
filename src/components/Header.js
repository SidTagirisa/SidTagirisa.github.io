import {
  EnvironmentFilled,
  GithubOutlined,
  LinkedinOutlined,
  MailFilled,
  PhoneFilled,
} from '@ant-design/icons';
import { Col, Row, Space, Tag, Typography } from 'antd';
import React from 'react';
import details from '../resume/resume.json';

const { Title, Link, Paragraph } = Typography;

export default function Header() {
  return (
    <Row justify="space-between">
      <Col>
        <Title level={3}>{details.basics.name.toUpperCase()}</Title>
        <Space direction="horizontal">
          <Tag icon={<GithubOutlined />}>
            <Link
              href={details.basics.profiles[0].url}
              target="_blank"
              style={{ color: 'black' }}
            >
              {details.basics.profiles[0].username}
            </Link>
          </Tag>
          <Tag icon={<LinkedinOutlined />} color="#0073b1">
            <Link
              href={details.basics.profiles[1].url}
              target="_blank"
              style={{ color: 'white' }}
            >
              {details.basics.profiles[1].username}
            </Link>
          </Tag>
        </Space>
      </Col>
      <br></br>
      <Col>
        <Space direction="vertical">
          <Space>
            <MailFilled />
            <Paragraph
              copyable={{ text: details.basics.email }}
              style={{ marginBottom: '0em' }}
            >
              {details.basics.email}
            </Paragraph>
          </Space>
          <Space>
            <PhoneFilled />
            <Paragraph
              copyable={{ text: details.basics.phone }}
              style={{ marginBottom: '0em' }}
            >
              {details.basics.phone}
            </Paragraph>
          </Space>
          <Space>
            <EnvironmentFilled /> {details.basics.location.city}
          </Space>
        </Space>
      </Col>
    </Row>
  );
}
