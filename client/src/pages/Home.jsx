import React from 'react'
import Analytics from '../components/Analytics'

const Home = () => {
  return (
    <>
      <main>
        <section className='section-hero'>
        <div className="container grid grid-two-cols">
          <div className="hero-content">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, corporis!</p>
            <h1>We are no- 1</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere at illum voluptas. Veniam ducimus debitis in maiores distinctio suscipit, esse qui sint accusantium corrupti id sunt quae nostrum assumenda! Nobis sit ducimus quas exercitationem. Facilis?</p>
            <div className="btn btn-group">
              <a href="/contact"><button className='btn'>connect now</button></a>
              <a href="/services"><button className='btn btn-secondary'>learn more</button></a>
            </div>
          </div>
          {/* hero images */}
          <div className="hero-image">
            <img src="/images/home.png" alt=""  width={400} height={500} />
          </div>
        </div>

        </section>
      </main>
      {/* 2nd section  */}
      <Analytics/>
      {/* //3rd section  */}
      <section className='section-hero'>
        <div className="container grid grid-two-cols">
        {/* hero images */}
        <div className="hero-image">
            <img src="/images/design.png" alt=""  width={400} height={500} />
          </div>
          <div className="hero-content">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, corporis!</p>
            <h1>Crafting Digital Excellence: Leading Web Design Agencies</h1>
            <p>Discover the pinnacle of digital creativity with our curated list of top web design companies. From sleek user interfaces to engaging user experiences, these agencies redefine online presence, offering tailored solutions for businesses of all sizes</p>
            <div className="btn btn-group">
              <a href="/contact"><button className='btn'>connect now</button></a>
              <a href="/services"><button className='btn btn-secondary'>learn more</button></a>
            </div>
          </div>
          
        </div>

        </section>
    </>
  )
}

export default Home
