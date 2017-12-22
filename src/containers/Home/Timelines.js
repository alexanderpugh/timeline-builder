import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';

import PreviewImage from '../../components/PreviewImage';

class Timelines extends React.Component {

  constructor(props) {
    super(props);

    if (!this.props.serverLoaded && this.props.timelines.length === 0) {
      this.props.fetchData();
    }
  }

  render() {
    const { isLoading, isError, timelines } = this.props;

    if (isLoading) {
      return 'Loading';
    }

    if (isError) {
      return 'An error occured loading the data';
    }

    return (
      <Grid>
        <Row>
          {timelines.map(timeline =>
            <Col key={timeline.id} lg={4} md={6}>
              <h4>
                <Link to={`/view/${timeline.id}`}>{timeline.name}</Link>
              </h4>
              <Link to={`/view/${timeline.id}`}>
                <PreviewImage image={timeline.displayImage} />
              </Link>
              <br />
              <i>by {timeline.author}</i>
            </Col>)}
        </Row>
      </Grid>
    );
  }
};

export default Timelines;
