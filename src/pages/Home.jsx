import React from 'react'
import Banner from '../components/Banner'
import '../styles/home.css'
import About from '../components/About'
import Services from '../components/Services'
import AboutBanner from '../components/AboutBanner'

function Home() {
  return (
    <>
          <main>
          <Banner/>
          <About/>
          <Services/>
          <AboutBanner/>
          </main>
    </>
  )
}

export default Home