import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
        <div id='logo'>Sarfaraz.</div>
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Skills</li>
          <li>Experience</li>
          <li>Testimonials</li>
        </ul>
        <div id='buttons'>
          <button>Resume</button>
          <button>Hire Me</button>
        </div>
    </div>
  )
}

export default Navbar
