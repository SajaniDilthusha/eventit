import React from 'react'
import {Link} from 'react-router-dom';

export default function Footer() {
  return (
      <section className="section footer bg-dark text-white">
    <div className="container">
      <div className="row">
          <div className="col-md-4">
              <div><Link to ="/Home">Home</Link></div>
              <div><Link to ="/AboutUs">About Us</Link></div>
              <div><Link to ="/ContactUs">Contact Us</Link></div>
            </div>
          
          <div className="col-md-4">
              <div><Link to ="/">Terms & Conditions</Link></div>
              <div><Link to ="/">Privacy Policy</Link></div>
            </div>

            <div className="col-md-4">
                <h6>Follow us on</h6>
                <div><Link to ="/">Facebook</Link></div>
                <div><Link to ="/">Instagram</Link></div> 

            </div>
      </div>
    </div>
    </section>
  )
}

