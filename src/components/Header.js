import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Button } from 'react-bootstrap';

import './Header.css';

const Header = ({ loggedIn }) => (
  <Grid>
    <Row>
      <Col>
        <h1>Timeline Builder</h1>
        <ul>
          <li>
            <Link to="/">
              <Button>SHOW ALL</Button>
            </Link>
          </li>
          <li>
            <Link to="/create">
              <Button>CREATE</Button>
            </Link>
          </li>
        </ul>
      </Col>
    </Row>
  </Grid>
);

export default Header;
