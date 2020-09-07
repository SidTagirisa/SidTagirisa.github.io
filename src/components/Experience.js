import { ForwardOutlined, HistoryOutlined } from '@ant-design/icons';
import { Col, Divider, Row, Tag, Timeline, Typography } from 'antd';
import React from 'react';
import details from '../resume/resume.json';

const { Title, Paragraph, Text } = Typography;

export default function Experience() {
  return (
    <Row>
      <Col>
        <Divider>Experience / Work History</Divider>
        <Timeline>
          {details.work.map((job, idx) => {
            return (
              <Timeline.Item
                dot={<HistoryOutlined />}
                className="avoid-break"
                key={`experience-${idx}`}
              >
                <Row justify="space-between">
                  <Col>
                    <Title level={4}>
                      {job.company}, {job.location}
                    </Title>
                  </Col>
                  <Col>
                    <Text strong>
                      {job.startDate} - {job.endDate}
                    </Text>
                  </Col>
                </Row>
                <Text strong>{job.position}</Text>
                <Paragraph>
                  Technologies Used:{' '}
                  {job.technologies.map((tech, idx) => (
                    <Tag color="red" key={`job-${idx}`}>
                      {tech}
                    </Tag>
                  ))}
                </Paragraph>
                {job.highlights.map((highlight, idx) => (
                  <React.Fragment key={`highlight-${idx}`}>
                    <Text>
                      <ForwardOutlined /> {highlight}
                    </Text>
                    <br></br>
                  </React.Fragment>
                ))}
              </Timeline.Item>
            );
          })}
        </Timeline>
      </Col>
    </Row>
  );
}
