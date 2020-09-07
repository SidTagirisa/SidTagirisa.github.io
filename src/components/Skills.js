import { Col, Descriptions, Divider, Row, Tag } from 'antd';
import React from 'react';
import details from '../resume/resume.json';

export default function Skills() {
  return (
    <Row>
      <Col>
        <Divider>Programming Skills</Divider>
        <Descriptions size="small" bordered>
          {details.skills.map((item, idx) => (
            <Descriptions.Item label={item.name} span={3} key={`skill-${idx}`}>
              {item.keywords.map((tech, idx) => (
                <Tag color="red" key={`skill-item-${idx}`}>
                  {tech}
                </Tag>
              ))}
            </Descriptions.Item>
          ))}
        </Descriptions>
      </Col>
    </Row>
  );
}
