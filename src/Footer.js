import React from 'react'
import logo from './img/logo.svg'
import './Footer.css'
import copyright from './img/Group 78.svg'

const Footer = () => {
  return (
      <div>
          
          {/* FOOTER FOR MOBILE */}

          <section className='footermobile'>
                    <img src={logo} alt="" />

                        <div className='footlink'>
                                <a id='plccl' href="#">Products</a>
                                <a id='plccl' href="#">Learn</a>
                                <a id='plccl' href="#">Contact</a>
                                <a id='plccl' href="#">Company</a>
                                <a id='plccl' href="#">Legal</a>
                        </div>
          </section>
          <img id='copyright' src= {copyright} alt="" />
          
      {/* footer for desktop */}
          
          <section>
            
        


          </section>

        















    </div>
  )
}

export default Footer