import { Divider, Row, Typography, Col } from 'antd';
import React from 'react';
import details from '../resume/resume.json';

const { Link, Paragraph } = Typography;

export default function Projects() {
  return (
    <Col>
      <Divider>Projects</Divider>
      {details.projects.map((project, idx) => {
        return (
          <Row key={`project-${idx}`}>
            <Paragraph>
              {project.name}:{' '}
              <Link href={project.url} target="_blank">
                {project.url}
              </Link>
              <br />
            </Paragraph>
          </Row>
        );
      })}
    </Col>
  );
}
