import React from 'react';
import './App.less';
import {
  Row,
  Col,
  Layout,
  Typography,
  Space,
  Divider,
  List,
  Timeline,
  Tag,
} from 'antd';
import details from './resume/resume.json';
import {
  GithubFilled,
  LinkedinFilled,
  EnvironmentFilled,
  MailFilled,
  PhoneFilled,
} from '@ant-design/icons';

const { Content } = Layout;
const { Title, Link, Paragraph, Text } = Typography;

function App() {
  return (
    <>
      <Content>
        <Row>
          <Col span={8} style={{ marginTop: '1em' }} offset={4}>
            <Title level={3}>{details.basics.name.toUpperCase()}</Title>
            <Space direction="vertical">
              {details.basics.profiles.map((profile) => {
                const Component =
                  profile.network === 'Github' ? GithubFilled : LinkedinFilled;
                return (
                  <Space key={profile.network}>
                    <Component />
                    <Link href={profile.url} target="_blank">
                      {profile.username}
                    </Link>
                  </Space>
                );
              })}
            </Space>
          </Col>
          <Col span={8} style={{ marginTop: '1em' }} offset={2}>
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
        <Row>
          <Col span={16} offset={4}>
            <Divider>Summary</Divider>
            <Paragraph>{details.basics.summary}</Paragraph>
            <List
              grid={{ gutter: 16, xs: 1, sm: 1, md: 1, lg: 2, xl: 2, xxl: 2 }}
              dataSource={details.basics.expertise}
              header={<Title level={5}>Expertise</Title>}
              itemLayout="vertical"
              renderItem={(item) => (
                <List.Item>
                  <Text>{item}</Text>
                </List.Item>
              )}
            />
          </Col>
        </Row>
        <Row>
          <Col span={16} offset={4}>
            <Divider>Experience / Work History</Divider>
            <Timeline>
              {details.work.map((job) => {
                return (
                  <Timeline.Item>
                    <Row>
                      <Col span={8}>
                        <Title level={4}>
                          {job.company}, {job.location}
                        </Title>
                      </Col>
                      <Col offset={12} span={4}>
                        <Text strong>
                          {job.startDate} - {job.endDate}
                        </Text>
                      </Col>
                    </Row>
                    <Text strong>{job.position}</Text>
                    <Paragraph>{job.summary}</Paragraph>
                    <Paragraph>
                      Technologies Used:{' '}
                      {job.technologies.map((tech) => (
                        <Tag color="blue">{tech}</Tag>
                      ))}
                    </Paragraph>
                    <List
                      dataSource={job.highlights}
                      size="small"
                      bordered
                      renderItem={(item) => (
                        <List.Item>
                          <Text>{item}</Text>
                        </List.Item>
                      )}
                    />
                  </Timeline.Item>
                );
              })}
            </Timeline>
          </Col>
        </Row>
        <Row>
          <Col span={16} offset={4}>
            <Divider>Programming Skills</Divider>
            <List
              dataSource={details.skills}
              size="small"
              renderItem={(item) => (
                <List.Item>
                  <Paragraph>
                    <Text strong>{item.name}: </Text>
                    {item.keywords.map((tech) => (
                      <Tag color="blue">{tech}</Tag>
                    ))}
                  </Paragraph>
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </Content>
    </>
  );
}

export default App;
