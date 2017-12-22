import React from 'react';
import { Grid, Row, Col, FormGroup, FormControl, ControlLabel, Button, Jumbotron } from 'react-bootstrap';

import HeroImage from '../../components/HeroImage';

const Form = props => (
  <form onSubmit={
    e => props.handleSubmit(e, {
      name: props.name,
      description: props.description,
      displayImage: props.displayImage,
      date: props.date,
      timelineId: props.timelineId
    })
  }>
    <Jumbotron>
      <Row>
        <Col lg={12} sm={12} md={12}>
          <h3>New Entry</h3>
          <FormGroup>
            <ControlLabel>Timeline Name</ControlLabel>
            <FormControl type="text" value={props.name} placeholder="Timeline name" required={true} onChange={props.handleInputChange} name="name" />
          </FormGroup>
        </Col>
        <Col lg={12} sm={12} md={12}>
          <FormGroup>
            <ControlLabel>Display Image</ControlLabel>
            <FormControl type="file" accept="image/*" onChange={props.handleFileUpload} name="file" />
            {props.displayImage &&
              <div>
                <HeroImage imageSrc={props.displayImage} />
                <p><i><a href={props.displayImage} target="blank">{props.displayImage}</a></i></p>
              </div>
            }
          </FormGroup>
        </Col>
        <Col lg={12} sm={12} md={12}>
          <FormGroup>
            <ControlLabel>Description</ControlLabel>
            <FormControl componentClass="textarea" type="textarea" value={props.description} placeholder="Description" onChange={props.handleInputChange} required={true} name="description" />
          </FormGroup>
        </Col>
        <Col lg={12} sm={12} md={12}>
          <FormGroup>
            <ControlLabel>When</ControlLabel>
            <FormControl type="date" value={props.date} onChange={props.handleInputChange} required={true} name="date" />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={2} sm={2} lg={2}>
          <Button type="submit" bsStyle="success">CREATE</Button>
        </Col>
        <Col md={2} sm={2} lg={2}>
          <Button type="reset" onClick={props.resetAll} bsStyle="danger">RESET</Button>
        </Col>
      </Row>
    </Jumbotron>
  </form>
);


export default Form;
