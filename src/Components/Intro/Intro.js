import React from 'react';
import './Intro.css';
import hireme from '../../assets/hireme.png';
import portfolio from '../../assets/portfolio.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
   <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello, </span>
            <span className='introText'>I'm<span className='introName'> Gauri</span><br/>Website Designer</span>
            <p className='introPara'>I am a skilled and passionate web designer with experince in creating <br/>visually appearing and user-friendly websites.</p>
            <Link><button className='btn'><img src={hireme} alt='hireme'/>Hire Me</button></Link>
        </div>
        <img src={portfolio} alt='Profile' className='bg'/>
   </section>
  )
}

export default Intro;
