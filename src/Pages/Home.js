import React from 'react'
//import {Link} from 'react-router-dom';
import Slider from '../Components/Slider';
//import Sidebar from '../Components/Sidebar';
import Tile from '../Components/Tile';
import CardGroup from 'react-bootstrap/CardGroup';
import img1 from '../Images/image3.png';
import img2 from '../Images/image4.png';
import img3 from '../Images/image5.png';
import img4 from '../Images/image6.jpg';
import img5 from '../Images/image7.png';
import img6 from '../Images/image8.png';
import Navigation from '../Components/Navigation';


export default function Home() {
  return (
    <div>
       <div className="ms-0 row ">
          <div className="col-lg-12 p-0 w-100">
            <div className='container-fluid ms-0 p-0'>
              <Slider/>
            </div>
        
            <div className="d-inline-block align-top">
              <CardGroup>
                <Tile img={img1} title="Dancing"/>    
                <Tile img={img2} title="Musical"/>
                <Tile img={img3} title="Drama"/>
                <Tile img={img4} title="Magical"/>
                <Tile img={img5} title="Exhibition"/>
                <Tile img={img6} title="Other"/>
            
              </CardGroup>
            </div>
          </div>
        </div>
      </div>
  )
}


