import React from 'react';
import '../styled/home.css';
import Container from 'react-bootstrap/Container';

function Home() {
  return (
    
    <Container fluid className='home_banner'>
       <p className='banner_headline'>Unleash Your Potential With Our Service.</p>
       <p className='banner_intro'>Explore our services and let's embark on a journey of creativity together.</p>
       <p className='banner_intro'>"Design is about making people happy, either functionally, aesthetically, or emotionally."</p>
       <div className='banner_btn'>
       <button>Know More</button>
       </div>
    </Container>
  )
}

export default Home;