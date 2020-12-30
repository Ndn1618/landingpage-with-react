import { NavHashLink } from 'react-router-hash-link'
import './Nav.css'

function Nav() {
  return (
    <>
      <nav class="nav" id="nav">
        <ul class="toggle">
          <li><NavHashLink to="#top_content">Home</NavHashLink></li>
          <li><NavHashLink to="#service">Services</NavHashLink></li>
          <li><NavHashLink to="#work_outer">Work</NavHashLink></li>
          <li><NavHashLink to="#Portfolio">Portfolio</NavHashLink></li>
          <li><NavHashLink to="#client_outer">Clients</NavHashLink></li>
          <li><NavHashLink to="#team">Team</NavHashLink></li>
          <li><NavHashLink to="#contact">Contact</NavHashLink></li>
        </ul>
        <ul class="">
          <li><NavHashLink to="#top_content">Home</NavHashLink></li>
          <li><NavHashLink to="#service">Services</NavHashLink></li>
          <li><NavHashLink to="#work_outer">Work</NavHashLink></li>
          <li><NavHashLink to="#Portfolio">Portfolio</NavHashLink></li>
          <li><NavHashLink to="#client_outer">Clients</NavHashLink></li>
          <li><NavHashLink to="#team">Team</NavHashLink></li>
          <li><NavHashLink to="#contact">Contact</NavHashLink></li>
        </ul>
      </nav>
    </>
  )
}

export default Nav