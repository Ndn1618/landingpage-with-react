import { NavLink } from 'react-router-dom'
import logo from '../../img/logob.png'
import './Header.css'
import Nav from '../../Components/Nav/Nav'

function Header() {
  return (
    <>
      <header id="header_outer">
        <div class="container">
          <div class="header_section">
            <div class="logo">
              <NavLink to="/">
                <img src={logo} alt="" />
              </NavLink>
            </div>
            <Nav />
            <NavLink class="res-nav_click animated wobble wow" to="#" onClick={e => e.preventDefault()}>
              <i class="fa-bars"></i>
            </NavLink>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header