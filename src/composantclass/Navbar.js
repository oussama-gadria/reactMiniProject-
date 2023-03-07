import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
 


function NavigationBar() {

    return ( <>
     <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand >My Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="products">Products</NavLink> 
            <Link to='products/add'>
            <button> add Product </button>
            </Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </> );
}

export default NavigationBar;