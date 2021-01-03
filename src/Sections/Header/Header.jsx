import { NavLink } from 'react-router-dom'
import logo from '../../img/logob.png'
import './Header.css'
import Nav from '../../Components/Nav/Nav'

function Header() {
  return (
    <>
      <header id="header_outer">
        <div className="container">
          <div className="header_section">
            <div className="logo">
              <NavLink to="/">
                <img src={logo} alt="" />
              </NavLink>
            </div>
            <Nav />
            <NavLink className="res-nav_click animated wobble wow" to="#" onClick={e => e.preventDefault()}>
              <i className="fa-bars"></i>
            </NavLink>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header