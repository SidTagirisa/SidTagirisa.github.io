import { Card, Row } from 'antd';
import React from 'react';
import './App.less';
import Experience from './components/Experience';
import Header from './components/Header';
import Skills from './components/Skills';
import Summary from './components/Summary';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Row justify="center">
        <Card className="page">
          <Header />
          <Summary />
          <Experience />
          <Skills />
          <Education />
          <Certifications />
          <Projects />
        </Card>
      </Row>
    </>
  );
}

export default App;
