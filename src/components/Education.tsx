'use client';

import React from 'react';
import { Card } from 'react-bootstrap';

const Education = () => {
  const educations = [
    {
      icon: '/icons/school-2.svg',
      institution: 'MAS Al-Zaytun',
      level: 'SMA',
      major: null,
      startYear: 2013,
      endYear: 2016,
    },
    {
      icon: '/icons/university-2.svg',
      institution: 'UIN Jakarta',
      level: 'S1',
      major: 'Teknik Informatika',
      startYear: 2016,
      endYear: 2022,
    },
  ];
  return (
    <div className="education section">
      <div className="container">
        <h2 className="title text-center">
          <strong>Education</strong>
        </h2>
        <hr />
        <div className="education-items">
          {educations.map(
            ({ icon, institution, level, major, startYear, endYear }) => (
              <Card className="education-item">
                <Card.Img variant="top" src={icon} />
                <Card.Body>
                  <Card.Title>{institution}</Card.Title>
                  <Card.Subtitle className="text-secondary">
                    {level} - {major}
                  </Card.Subtitle>
                  <div className="mt-3 text-secondary">
                    {startYear} - {endYear}
                  </div>
                </Card.Body>
              </Card>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default Education;
