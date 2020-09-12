import { HistoryOutlined } from '@ant-design/icons';
import { Col, Divider, Row, Tag, Timeline, Typography } from 'antd';
import React from 'react';
import details from '../resume/resume.json';

const { Title, Paragraph, Text, Link } = Typography;

export default function Education() {
  return (
    <Row>
      <Col>
        <Divider>Education</Divider>
        <Timeline>
          {details.educations.map((education, idx) => {
            return (
              <Timeline.Item dot={<HistoryOutlined />} key={`education-${idx}`}>
                <Row justify="space-between">
                  <Col>
                    <Title level={4}>{education.institution}</Title>
                  </Col>
                  <Col>
                    <Text strong>
                      {education.startDate} - {education.endDate}
                    </Text>
                  </Col>
                </Row>
                <Text strong>
                  {education.studyType} in {education.major}
                </Text>
                <Paragraph>
                  <Text strong>Grad Project: </Text>
                  <Text>{education.graduationProject.name}</Text>
                  <br />
                  Thesis Link:{' '}
                  <Link
                    href={education.graduationProject.thesisLink}
                    target="_blank"
                  >
                    {education.graduationProject.thesisLink}
                  </Link>
                </Paragraph>
                <Paragraph>
                  Important Course Work:{' '}
                  {education.courses.map((course, idx) => (
                    <Tag color="red" key={`course-${idx}`}>
                      {course}
                    </Tag>
                  ))}
                </Paragraph>
              </Timeline.Item>
            );
          })}
        </Timeline>
      </Col>
    </Row>
  );
}
