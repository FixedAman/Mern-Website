import React from 'react'
import Analytics from '../components/Analytics'

const About = () => {
  return (
    <>
     <main>
        <section className='section-hero' >
        <div className="container grid grid-two-cols">
          <div className="hero-content">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, corporis!</p>
            <h1>About us</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere at illum voluptas. </p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere at illum voluptas. </p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere at illum voluptas. </p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere at illum voluptas. </p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere at illum voluptas. </p>
            <div className="btn btn-group">
              <a href="/contact"><button className='btn'>connect now</button></a>
              <a href="/services"><button className='btn btn-secondary'>learn more</button></a>
            </div>
          </div>
          {/* hero images */}
          <div className="hero-image">
            <img src="/images/about1.png" alt=""  width={400} height={500} />
          </div>
        </div>
       
        </section>
        <Analytics/>
      </main>
    </>
  )
}

export default About
