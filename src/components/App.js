import React from 'react'
import Header from './Header'
import About from './About'
import '../style/style.css'
import Experience from './Experience'
import MyWork from './MyWork'
import Contact from './Contact'

function App() {
  return (
    <div className="main-container">
      <Header/>
      <About/>
      <Experience/>
      <MyWork/>
      <Contact/>
    </div>
  )
}

export default App
