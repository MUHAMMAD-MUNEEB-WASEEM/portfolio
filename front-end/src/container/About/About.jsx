import React from 'react'
import './About.scss'
import { motion } from 'framer-motion'
import {images} from '../../constants/index'

function About() {
  
  const abouts = [
    { title: 'web Development', description: 'I am a good web developer', imgUrl: images.about01},
    { title: 'web Desing', description: 'I am a good web developer', imgUrl: images.about02},
    { title: 'UI/UX', description: 'I am a good web developer', imgUrl: images.about03},
    { title: 'Web Animations', description: 'I am a good web developer', imgUrl: images.about04},
  ] 


  return (
    <>
      <h2 className='head-text'>I know That <span>Good Apps</span><br /> means <span>Good Business</span>
      </h2>

      <div className='app__profiles'>
        {abouts.map((about,index)=>(
          <motion.div
            whileInView={{opacity: 1}}
            whileHover={{scale: 1.1}}
            transition={{dutration: 0.5, type: 'tween'}}
            className='app__profile-item'
            key={about.title + index}
            >

              <img src={about.imgUrl} alt={about.title} />
              <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
              <p className='p-text' style={{marginTop: 10}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About