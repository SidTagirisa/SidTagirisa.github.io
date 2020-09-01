import { Col, Divider, Row, Typography } from 'antd';
import React from 'react';
import details from '../resume/resume.json';

const { Title, Text, Link } = Typography;

export default function Certifications() {
  return (
    <Col>
      <Divider>Certifications</Divider>
      {details.certifications.map((certification) => {
        return (
          <>
            <Row justify="space-between">
              <Col>
                <Title level={4}>{certification.name}</Title>
              </Col>
              <Col>
                <Text strong>
                  {certification.issued} - {certification.validUpTo}
                </Text>
              </Col>
            </Row>
            Credential:{' '}
            <Link href={certification.credential} target="_blank">
              {certification.credential}
            </Link>
          </>
        );
      })}
    </Col>
  );
}
