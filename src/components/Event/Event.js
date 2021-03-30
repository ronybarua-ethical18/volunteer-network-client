import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Event = ({event}) => {
    const deleteEvent = id => {
        
    }
    return (
        <Card className="mb-4 shadow">
        <Card.Img variant="top" style={{height: '300px'}} src={event.imageURL} />
        <Card.Body>
          <Card.Title>{event.name}</Card.Title>
          <Button variant="primary"  onClick={() => deleteEvent(event._id)}>Delete</Button>
        </Card.Body>
      </Card>
    );
};


export default Event;