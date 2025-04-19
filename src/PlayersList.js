import React from "react";
import players from "./players";
import Player from "./Player";
import { Container, Row, Col } from "react-bootstrap";

const PlayersList = () => {
  return (
    <Container>
      <h2 className="text-center my-4">FIFA Player Cards</h2>
      <Row className="justify-content-center">
        {players.map((player, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <Player {...player} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PlayersList;
