import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import img1 from '../assest/Random.png'
import img2 from '../assest/TheBox.png'
export default function Navbar() {
  return(
   <div>
       <div className="container">
           <div className="row">
           <div className="col-6"><img src={img1} alt="" /><img src={img2} alt="" /></div>
           <div className="col-6 d-flex justify-content-between">
               <h6>Home</h6>
               <h6>About Us</h6>
               <h6>Projects</h6>
               <h6>Services</h6>
               <h6 className='text-danger'>Contact US</h6>
           </div>
           </div>
       </div>

   </div>
   );
}
