import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import './MainNavBar.css'

function MainNavBar() {
    return (
<Nav justify variant="tabs" defaultActiveKey="/">
  <Nav.Item>
    <Nav.Link><NavLink activeClassName="active" className="main-navbar-link" to="/">About</NavLink></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link><NavLink activeClassName="active" className="main-navbar-link" to="/projects">Projects</NavLink></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link><NavLink activeClassName="active" className="main-navbar-link" to="/learning">Learning</NavLink></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link>
      <NavLink activeClassName="active" className="main-navbar-link" to="/contact">Contact</NavLink>
    </Nav.Link>
  </Nav.Item>
</Nav>
    );
}

export default MainNavBar;