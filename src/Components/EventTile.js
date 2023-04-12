import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export default function Events(props) {
  return (
    <div className='p-4'>
      <Card style={{ width: '18rem', hight:'5rem'}}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        {/* <Card.Title className=''>{props.title}</Card.Title> */}
        <Card.Text>
          {props.text}
        </Card.Text>
        <Button variant="primary">Buy your Tickets</Button>
      </Card.Body>
    </Card>

    </div>
  )
}