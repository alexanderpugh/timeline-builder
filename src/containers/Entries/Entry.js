import React from 'react';
import { Col, Row } from 'react-bootstrap';

import './entry.css';

const Entry = ({ entry }) => (
  <Row className="entry" id={entry.id}>
    <Col md={2} lg={2} sm={12} className="entry_image-container">
      <div className="entry_image-container_image" style={{ backgroundImage: `url(${entry.displayImage})` }}></div>
    </Col>
    <Col md={10} lg={10} sm={12} className="entry_about">
      <h3>{new Date(entry.date).toString().substr(0, 16)} - {entry.name}</h3>
      <p>{entry.description}</p>
    </Col>
  </Row>
);

export default Entry;
