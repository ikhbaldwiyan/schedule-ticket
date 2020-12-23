import React from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardImg, Button, CardTitle, CardText } from 'reactstrap';
import Team from "../../store/Team";
import '../../component/team/Team.css';
import Carousel from "../Carousel";

function TeamJ() {
  return(
    <Container>
      <Row>
        <h1>Team K3</h1>
      </Row>
      <Row>
        <center>
          {Team && Team.slice(1,2).map((item, idx) => (
            <Col sm="8" key={idx} className="App">
            <Carousel />
              <Card body inverse color={item.color}>
                <CardTitle tag="h5">{item.name}</CardTitle>
                <CardText>{item.desc}</CardText>
              </Card>
            </Col>
          ))}
        </center>
      </Row>
      <Row>
        {Team && Team.slice(1,2).map((item, idx) => (
          <Col sm="6" key={idx} className="App">
            <CardImg src={item.img} alt={item.name} />
            <Card body inverse color={item.color}>
              <CardTitle tag="h5">{item.name}</CardTitle>
              <CardText>{item.desc}</CardText>
              <Link to='/team-k'>
                <Button style={{ backgroundColor: item.button, border: 'none' }}>Lihat Jadwal</Button>
              </Link>
            </Card>
          </Col>
        ))}
        {Team && Team.slice(1,2).map((item, idx) => (
          <Col key={idx} className="App">
            <CardImg src={item.img} alt={item.name} />
            <Card body inverse color={item.color}>
              <CardTitle tag="h5">{item.name}</CardTitle>
              <CardText>{item.desc}</CardText>
              <Link to='/team-k'>
                <Button style={{ backgroundColor: item.button, border: 'none' }}>Lihat Jadwal</Button>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default TeamJ;