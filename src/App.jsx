import React from 'react'
import Header from './page/Header'
import Hero from './components/Hero'
import About from './components/About'
import Sale from './components/Sale'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Sale/>
      <Footer/>
    </div>
  )
}
