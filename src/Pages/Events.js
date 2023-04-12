import React from 'react'
import EventTile from '../Components/EventTile';
import CardGroup from 'react-bootstrap/CardGroup';
import ev1 from '../Images/event1.jpg';
import ev2 from '../Images/event2.jpg';
import ev3 from '../Images/event3.jpg';
import ev4 from '../Images/event4.jpg';
import ev5 from '../Images/event5.jpg';

export default function Events() {
  return (
    <div>
      <div className="d-inline-block align-top w-100">
              <CardGroup>
                <EventTile img={ev1} title="Musical"/>
                <EventTile img={ev2} title="Magical"/>
                <EventTile img={ev3} title="Drama"/>
                <EventTile img={ev4} title="Exhibition"/>
                <EventTile img={ev5} title="Other"/>
            
              </CardGroup>
            </div>
    </div>
  )
}

