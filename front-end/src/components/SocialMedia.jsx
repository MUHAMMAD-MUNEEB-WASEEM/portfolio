import React from 'react'
import {BsTwitter, BsInstagram, BsLinkedin} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'

function SocialMedia() {
  return (
    <div className='app__social'>
        <div>
          <a href="https://twitter.com/muneebwaseem781" target="_blank">
            <BsTwitter/>

          </a> 
        </div>
        <div>
         <a href="https://www.facebook.com/sarkaar.1000/" target="_blank">
            <FaFacebookF/>
          </a>
        </div>
        <div>
         <a href="https://www.instagram.com/muneebwaseem78/" target="_blank">
            <BsInstagram/>
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/muhammad-muneeb-waseem-b95052190/" target="_blank">
              <BsLinkedin/>
            </a>
        </div>
        
    </div>
  )
}

export default SocialMedia