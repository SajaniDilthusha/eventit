import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Login() {
  return (
    <div>
    <h5 className='mb-3 mt-3'>Login!</h5>
    <div className='m-auto col-md-4 align-center border p-3 bg-white'>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label><h6>Email address</h6></Form.Label>
        <Form.Control type="email" placeholder="Enter your email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label><h6>Password</h6></Form.Label>
        <Form.Control type="password" placeholder="Enter your password" />
      </Form.Group>

      <a href='' className="">Forgot your password?</a>

      <div className='m-auto col-md-3 '>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
      </Form.Group>
      </div>
      <Button variant="primary" type="submit">
        LogIn
      </Button>
      
    </Form>
    </div>

    </div>
  )
}
