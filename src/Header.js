import React from 'react';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';

function Header(){
  let user = JSON.parse(localStorage.getItem('user-info'))
  const navigator=useNavigate();
  function logOut()
  {
      localStorage.clear();
      navigator('/register')
  }
    return(
     
       <Navbar bg="info" variant="dark">
         <Navbar.Brand>
           Person
         </Navbar.Brand>
         <Nav className="navbar_wrapper">
           {
             localStorage.getItem('user-info') ?
             <>
                <Link to="/">Home</Link>
                </>
                :
                <>
           <Link to="/login">Login</Link>
           <Link to="/register">Register</Link>
        </>
}
         </Nav>
         {localStorage.getItem('user-info') ?
         <Nav>
         <NavDropdown title={user && user.name}>
          <NavDropdown.Item onClick={logOut}>
            Logout
          </NavDropdown.Item>
         </NavDropdown>
         </Nav>
         :null
         }
         </Navbar>
      
    );
}
export default Header;