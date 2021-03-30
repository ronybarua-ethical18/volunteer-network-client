import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Event from '../Event/Event';
import './Home.css';
const Home = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('https://salty-savannah-07120.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    return (
        <div id="bg-home" className="p-5">
           <Container fluid>
               <Row>
                    {
                        events.map(event => <Col lg={3}md={4} sm={6} xs={12}><Event event={event}></Event></Col>) 
                    }
               </Row>
           </Container>
        </div>
    );
};

export default Home;