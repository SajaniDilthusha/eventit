import React from 'react'
import { FormControl } from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function Register() {
  return (
    <div>
      <h5 className='mb-3 mt-3'>Register!</h5>
      <div className='m-auto col-md-6 align-center border p-3 bg-white'>
      <Form>
      <Row className="mb-3">

        <Form.Group as={Col} controlId="formGridName">
          <Form.Label><h6>First Name</h6> </Form.Label>
          <Form.Control type="text" placeholder="Enter your first name.." />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridName">
        <Form.Label><h6>Second Name</h6> </Form.Label>
          <Form.Control type="text" placeholder="Enter your second name.." />
        </Form.Group>
        
      </Row>

      <Row className="mb-3" >
      <Form.Group  as={Col} controlId="formGridPswrd">
        <Form.Label><h6>Password</h6></Form.Label>
        <Form.Control type="password" placeholder="Enter your password.." />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridPswrd">
        <Form.Label><h6>Confirm Password</h6></Form.Label>
        <Form.Control type="password" placeholder="Enter your password again.." />
      </Form.Group>
      </Row>

      <Row className="mb-3">
        {/* <Form.Group as={Col} controlId="formGridNicPassport">
          <Form.Label><h6>NIC/Passport</h6></Form.Label>
          <Form.Control type="text" placeholder="XXXXXXXXXV"/>
        </Form.Group>
        
         <Form.Group as={Col} controlId="formGridTelephone">
          <Form.Label><h6>Telephone</h6></Form.Label>
          <FormControl type="tel" placeholder="+94XXXXXXXXX"/>
          </Form.Group>
          
          <Form.Group as={Col} controlId="formGridhoterName">
          <Form.Label><h6>Hotel Name</h6></Form.Label>
          <Form.Control type="text" placeholder="Enter the name of your residence place.." />
        </Form.Group>*/}
        
         


        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label><h6>Email</h6></Form.Label>
          <Form.Control type="email" placeholder="abc@gmail.com"  />
        </Form.Group>
      </Row>

      <div className='m-auto col-md-3 '>
          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
      </div>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>

    </div>
  )
}
//<Form.Select defaultValue="Choose..."></Form.Select>