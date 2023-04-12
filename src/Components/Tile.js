import React from 'react'
import Card from 'react-bootstrap/Card';


export default function Tile(props) {
  return (
    <div className='col-lg- p-2'>
    <Card style={{ width: '10rem', hight:'5rem'}}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title className=''>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
       
      </Card.Body>
    </Card>
    </div>
  );
}


//export default Tile;
      
   