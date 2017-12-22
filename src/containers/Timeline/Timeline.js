import React from 'react';

import { Link } from 'react-router-dom';
import { Grid, Row, Col, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

import HeroImage from '../../components/HeroImage';
import NotFound from '../../components/NotFound';
import Entries from '../Entries';
import NewEntry from '../NewEntry';

class Timeline extends React.Component {
  componentWillMount() {
    const paramId = this.props.match.params.id;

    if (this.props.id !== paramId) {
      this.props.resetAll();
      this.props.resetNewEntry();
      this.props.fetchTimeline(paramId);
    }
  }

  componentWillUpdate() {
    const paramId = this.props.match.params.id;
    if (this.props.newEntrySaved) {
      this.props.fetchTimeline(paramId);
      window.scrollTo(0, 0);
    }
  }

  render() {
    const props = this.props;

    return !props.isError ? (
      <Grid>
        <Row>
          <HeroImage imageSrc={props.displayImage} />
          <i>Created by {props.author}</i>
        </Row>
        <Entries entries={props.entries} />
        <NewEntry />
      </Grid>
    ) : <NotFound />;
  }
}

export default Timeline;
