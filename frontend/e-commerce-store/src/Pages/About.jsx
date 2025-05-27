import React from 'react'
import '../Pages/CSS/About.css'
import mainVideo from '../Components/Assets/Discover AMCA Ecommerce Store_free.mp4'
import emailIcon from '../Components/Assets/telephone.png'
import phoneIcon from '../Components/Assets/email.png'
import SocialsIcon from '../Components/Assets/social-media.png'
import Footer from '../Components/Footer/Footer'
const About = () => {
  return (
    <div className='about'>
      <h1>About AMCA</h1>
      <div className='video-secton'>
        <video className='video-container' width="600" controls>
          <source src={mainVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className='info-about'>
        <h1>We Connect People And Tech</h1>
        <p>
          AMCA is your trusted source for top-quality laptops, smartphones,
          and tech accessories. Our mission is simple: to provide you with
          the best selection of cutting-edge technology to keep you connected
          and powered up, no matter where you are. Whether you're a tech enthusiast
          or just looking for the essentials, we offer a wide variety of products
          that cater to your needs. With a focus on reliability, performance, and
          style, AMCA ensures that every product we offer meets the highest standards.
          Shop with confidence and experience a seamless journey to upgrade your tech!
        </p>
      </div>

      <h1 className='contact-info-h1'>Get In Touch</h1>
      <div className='contact-information'>
        <div className='info-icons'>
          <img src={emailIcon} />
          <p>Phone: +1 234-567-890</p>
        </div>
        <div className='info-icons'>

          <img src={phoneIcon} />
          <p>Email: support@amca.com</p>
        </div>
        <div className='info-icons'>

          <img src={SocialsIcon} />
          <p>Social Media: Instagram, Facebook, Twitter</p>
        </div>

      </div>
      <Footer/>
    </div>
    
  )
}

export default About