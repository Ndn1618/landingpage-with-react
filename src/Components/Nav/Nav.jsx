import { NavHashLink } from 'react-router-hash-link'
import './Nav.css'

function Nav() {
  return (
    <>
      <nav class="nav" id="nav">
        <ul class="toggle">
          <li><NavHashLink smooth to="#top_content">Home</NavHashLink></li>
          <li><NavHashLink smooth to="#service">Services</NavHashLink></li>
          <li><NavHashLink smooth to="#work_outer">Work</NavHashLink></li>
          <li><NavHashLink smooth to="#Portfolio">Portfolio</NavHashLink></li>
          <li><NavHashLink smooth to="#client_outer">Clients</NavHashLink></li>
          <li><NavHashLink smooth to="#team">Team</NavHashLink></li>
          <li><NavHashLink smooth to="#contact">Contact</NavHashLink></li>
        </ul>
        <ul class="">
          <li><NavHashLink smooth to="#top_content">Home</NavHashLink></li>
          <li><NavHashLink smooth to="#service">Services</NavHashLink></li>
          <li><NavHashLink smooth to="#work_outer">Work</NavHashLink></li>
          <li><NavHashLink smooth to="#Portfolio">Portfolio</NavHashLink></li>
          <li><NavHashLink smooth to="#client_outer">Clients</NavHashLink></li>
          <li><NavHashLink smooth to="#team">Team</NavHashLink></li>
          <li><NavHashLink smooth to="#contact">Contact</NavHashLink></li>
        </ul>
      </nav>
    </>
  )
}

export default Nav