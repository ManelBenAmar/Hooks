import React from "react";
import { Card, Button } from "react-bootstrap";

function MovieCard({ movie }) {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={movie.posterUrl} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.description}</Card.Text>
            </Card.Body>
            <footer>
                <Button variant="primary">Go somewhere</Button>{" "}
            </footer>
        </Card>
    );
}

export default MovieCard;
