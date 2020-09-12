import { GithubOutlined } from '@ant-design/icons';
import { Col, Divider, Space, Tag, Typography } from 'antd';
import React from 'react';
import details from '../resume/resume.json';

const { Link, Paragraph, Text } = Typography;

export default function Projects() {
  return (
    <Col>
      <Divider>Projects</Divider>
      <Paragraph>
        Some of the side projects that I have built from scratch or open source
        projects that I have contributed to showcase my development skills.
      </Paragraph>
      {details.projects.map((project, idx) => {
        return (
          <Space direction="horizontal">
            <Tag icon={<GithubOutlined />}>
              <Link
                href={project.html_url}
                target="_blank"
                style={{ color: 'black' }}
              >
                {project.name}
              </Link>
            </Tag>
          </Space>
        );
      })}
    </Col>
  );
}
