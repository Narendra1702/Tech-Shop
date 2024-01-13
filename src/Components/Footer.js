import React from 'react'

function Footer() {
  return (
    <div className='row align-items-start w-100 ' style={{width:'100%'}}>
    <div class="container text-start text-white" >
  <div class="row align-items-center " style={{backgroundColor:'black',width:'95.7rem',height:'25rem', border:'1px solid #c5c5c5'}}>
    <div class="col mx-5">
      <h1 className='mb-4'>Tech-Shop</h1>
      <p>Subscribe to our Email alerts to receive early discount offers and new products info</p>
      <input type='email' placeholder=' Email Address*' style={{width:'17rem',height:'3rem',backgroundColor:'black',border:'1px solid #cfcfcf',borderRadius:'3px'}}/>
      <button className='mt-2' style={{backgroundColor:'red',width:'8rem',height:'2.5rem',borderRadius:'3px',border:'none',color:'white',padding:'5px'}} >Subscribe</button>
      </div>
    <div class="col mx-4">
    <h2 className='mb-4'>Help</h2>
      <p>FAQs</p>
      <p>Track Order</p>
      <p>Cancel Order</p>
      <p>Return Order</p>
      <p>Warranty Info</p>
    </div>
    <div class="col mx-4">
    <h2 className='mb-4'>Policies</h2>
    <p>Return Policy</p>
    <p>Security</p>
    <p>Site Map</p>
    <p>Privacy Policy</p>
    <p>Terms & Conditions</p>
    </div>
    <div class="col mx-4">
    <h2 className='mb-4'>Company</h2>
    <p>About Us</p>
    <p>Contact Us</p>
    <p>Service Centers</p>
    <p>Carrers</p>
    <p>Affiliates</p>
    </div>
  </div>
  <div className='col text-start align-items-center d-flex ' style={{backgroundColor:'black',height:'5rem',justifyContent:'space-between',width:'100%'}}>
  <p>2023 | All Rights Reserved. Built by | Narendra Neelapala</p>
<div className='d-flex mx-3' style={{gap:'3rem',cursor:'pointer'}}>
  <i class="fa-brands fa-facebook-f "></i>
  <i class="fa-brands fa-twitter"></i>
  <i class="fa-brands fa-instagram"></i>
  <i class="fa-brands fa-linkedin-in"></i>
  </div>
  </div>
</div>
</div>

  )
}

export default Footer;