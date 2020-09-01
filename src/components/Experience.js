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
          {details.work.map((job) => {
            return (
              <Timeline.Item dot={<HistoryOutlined />}>
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
                  {job.technologies.map((tech) => (
                    <Tag color="red">{tech}</Tag>
                  ))}
                </Paragraph>
                {job.highlights.map((highlight) => (
                  <>
                    <Text>
                      <ForwardOutlined /> {highlight}
                    </Text>
                    <br></br>
                  </>
                ))}
              </Timeline.Item>
            );
          })}
        </Timeline>
      </Col>
    </Row>
  );
}
