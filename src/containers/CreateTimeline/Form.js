import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

import HeroImage from '../../components/HeroImage';
import { timelines as timelinesUrl } from '../../config/api';

class Form extends React.Component {

  componentDidUpdate() {
    if (this.props.id) {
      this.props.history.push(`/view/${this.props.id}`);
    }
  }

  render() {
    const props = this.props;

    return (
      <form onSubmit={(e) => props.handleSubmit(e, {
        displayImage: props.displayImagePath,
        name: props.name,
        author: props.author
      })}
      method="post"
      encType="multipart/form-data"
      action={timelinesUrl + '/submit'}>
        <Grid>
          <Row>
            <Col lg={12} sm={12} md={12}>
              <FormGroup>
                <ControlLabel>Timeline Name</ControlLabel>
                <FormControl type="text" value={props.name} placeholder="Timeline name" required={true} onChange={props.handleInputChange} name="name" />
              </FormGroup>
            </Col>
            <Col lg={12} sm={12} md={12}>
              <FormGroup>
                <ControlLabel>Display Image</ControlLabel>
                <FormControl type="file" accept="image/*" required={true} onChange={props.handleFileUpload} name="file" />
                {props.displayImagePath &&
                  <div>
                    <HeroImage imageSrc={props.displayImagePath} />
                    <p><i><a href={props.displayImagePath} target="blank">{props.displayImagePath}</a></i></p>
                  </div>
                }
              </FormGroup>
            </Col>
            <Col lg={12} sm={12} md={12}>
              <FormGroup>
                <ControlLabel>Author</ControlLabel>
                <FormControl type="text" value={props.author} placeholder="Timeline Author" onChange={props.handleInputChange} required={true} name="author" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={2} sm={2} lg={2}>
              <Button type="submit" bsStyle="success">CREATE</Button>
            </Col>
            <Col md={2} sm={2} lg={2}>
              <Button type="reset" onClick={props.handleReset} bsStyle="danger">RESET</Button>
            </Col>
            <Col md={2} sm={2} lg={2}>
              <Link to="/">
                <Button bsStyle="warning">CANCEL</Button>
              </Link>
            </Col>
          </Row>
        </Grid>
      </form>
    );
  }
}

export default Form;
