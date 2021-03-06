import React, { useEffect, useState } from 'react'
import './About.scss'
import { motion } from 'framer-motion'
import {images} from '../../constants/index'


import {urlFor, client} from '../../sanity';
import AppWrap from '../../Wrapper/AppWrap'
import MotionWrap from '../../Wrapper/MotionWrap';

function About() {
  
  // const abouts = [
  //   { title: 'web Development', description: 'I am a good web developer', imgUrl: images.about01},
  //   { title: 'web Desing', description: 'I am a good web developer', imgUrl: images.about02},
  //   { title: 'UI/UX', description: 'I am a good web developer', imgUrl: images.about03},
  //   { title: 'Web Animations', description: 'I am a good web developer', imgUrl: images.about04},
  // ] 

  const [abouts, setAbouts] = useState([]);


  useEffect(()=> {
    const query = '*[_type == "abouts"]'

    client.fetch(query)
    .then((data)=>{
      setAbouts(data);
    })
  },[])


  return (
    <>
      <h2 className='head-text'>These are the <span>Areas</span><br /> to which <span>I belong</span>
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

              <img src={urlFor(about.imgUrl)} alt={about.title} />
              <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
              <p className='p-text' style={{marginTop: 10}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'), 
  'about',
  'app__whitebg'

)