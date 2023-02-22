
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button, Form, InputGroup } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { useState } from 'react';

import { FaTwitter, FaFacebook, FaGithub, FaSearch, FaRegHeart, FaUser, FaSignOutAlt, FaSignInAlt} from 'react-icons/fa';

import './top-nav-bar.css'

function TopNavBar({ handleSearch }) {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchClick = () => {
    let search ={"search": searchInput}

    localStorage.setItem('searchRecipe',JSON.stringify(search))
    
    console.log(searchInput);
    console.log(localStorage);
  const link = "https://dlmrcc.github.io/kodego-mini-project-two-frontend/#/reciperesult/reciperesult?search="+searchInput;
  console.log(link);
  window.location.href=link;
  }


  //check if theres a user logged
  let isUserLoggedIn = false;
    try{
        isUserLoggedIn = JSON.parse(localStorage.getItem('user'))
    }catch(error)
    {
      console.log("error :",error)
    }

  const logout =()=>
  {
    localStorage.clear()
    window.location.reload()
    window.location.href = 'https://dlmrcc.github.io/kodego-mini-project-two-frontend/#/homepage' 

  }
  const userAccount =()=>
  {
    window.location.href = 'https://dlmrcc.github.io/kodego-mini-project-two-frontend/#/useraccount' 

  }

  const home=()=>
  {
    window.location.href='';
    // eslint-disable-next-line no-restricted-globals
    history.replaceState(null, '', window.location.pathname);
    window.location.href =  'https://dlmrcc.github.io/kodego-mini-project-two-frontend/#/homepage' 
  }

  //set the size of dropdown size
  const dropdownItemStyle = {
    fontSize: '15px',
  };

  return (

!isUserLoggedIn?
<>
<Navbar  collapseOnSelect expand="sm" bg="dark" variant="dark" className="mt-1 ms-0 me-0">
<Container fluid >
<img
  src="https://th.bing.com/th/id/OIP.4ISjnDAdbd0yYZCUlmd9AAHaHv?pid=ImgDet&w=585&h=612&rs=1"
  style={{ width: '25px', height: '25px', borderRadius: '50%' }}
  className="d-inline-block align-top me-3"
  alt="React Bootstrap logo"
/>
  <Navbar.Brand onClick={home}>DC Search Recipe</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="ms-auto">
  <Link to='/signup' className="me-2 mt-2 mb-1"><Button variant="primary" className=" btn-warning bg-gradient btn-sm allborder-radius "><FaSignInAlt className="me-0 pb-1" />Signup</Button></Link>
  <Link to='/login' className="me-2 mt-2 mb-1"><Button variant="" className=" btn outline-warnig btn-warning bg-gradient btn-sm allborder-radius "><FaUser className="me-0 pb-1" /> Login</Button></Link>
  </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
</>
:
<>
<Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" className="mt-1 ms-0 me-0">
<Container fluid>
<img
  src="https://th.bing.com/th/id/OIP.4ISjnDAdbd0yYZCUlmd9AAHaHv?pid=ImgDet&w=585&h=612&rs=1"
  style={{ width: '25px', height: '25px', borderRadius: '50%' }}
  className="d-inline-block align-top me-3"
  alt="React Bootstrap logo"
/>

  <Navbar.Brand onClick={home}>DC Search Recipe</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" >
  
    <Nav className="me-auto">
          <InputGroup type="text" value={searchInput}  onChange={(e) => setSearchInput(e.target.value)} className="me-auto mt-1 ms-auto " style={{ width: "450px"}}>
        <Form.Control
        className="left-radius "
          placeholder="Search recipe"
        aria-label="Search recipe"
          aria-describedby="basic-addon2"
        />
     
     <Link to="/homepage">
      <Button
            className=""
    variant="outline-light bg-light text-dark fw-bold no-shadow"
    id="button-addon2 no-shadow"
    onClick={(e) => {
      e.target.previousSibling.value = "";
    }}
    style={{borderRadius: 0}}>
    X
  </Button>
  </Link>
  <Button  className="me-0 right-radius" onClick={handleSearchClick} variant="outline-warning bg-warning text-dark" id="button-addon2" >
  <FaSearch size={15} />
  </Button>
  </InputGroup>
    </Nav>
    <Nav className="ms-auto">
    <Nav.Link href="https://twitter.com"><FaTwitter size={25} /></Nav.Link>
          <Nav.Link href="https://facebook.com"><FaFacebook size={25} /></Nav.Link>
          <Nav.Link href="https://github.com" className='me-2'><FaGithub size={25} /></Nav.Link>
     
      <NavDropdown drop="" id="profile-dropdown" title={<Image src="https://png.pngitem.com/pimgs/s/78-786293_1240-x-1240-0-avatar-profile-icon-png.png" roundedCircle style={{ width: '25px', height: '25px' }} />} className="circle-dropdown"  align="end">
     
      <NavDropdown.Item style={dropdownItemStyle} className="">
      <FaRegHeart className="me-2" />
              Favorite Recipe
      </NavDropdown.Item>
      <NavDropdown.Divider />
   
     <NavDropdown.Item style={dropdownItemStyle}  onClick={userAccount}>
       <FaUser className="me-2" />
            User Account
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item style={dropdownItemStyle} onClick={logout}>
            <FaSignOutAlt className="me-2" />
              Log out
      </NavDropdown.Item>
        </NavDropdown>
  
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
</>

  );
}

export default TopNavBar;

