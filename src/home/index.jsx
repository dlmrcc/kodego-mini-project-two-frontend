import { FaTwitter, FaFacebook, FaGithub, FaSearch, FaRegHeart, FaUser, FaSignOutAlt, FaSignInAlt} from 'react-icons/fa';
import TopNavBar from "../top-nav-bar";
import { Outlet } from "react-router-dom";
import { useState } from 'react';


// import AddNav from "../anothernavbar";
// import Example from "../anothernavbar";

function Home() {
    const [currentLink, setCurrentLink] = useState('/')



 
    return (
        <>
                <div class="container-fluid px-0 py-0 vh-100 bg-light ">
                    <TopNavBar/>
                <main class="fluid w-100 pt-0 mt-0">
                <Outlet/>
                <div class="  container-fluid fixed-bottom mt-5">
  <footer class="d-flex flex-wrap justify-content-between bg-dark align-items-center border-top py-2 px-2 ms-0 me-0 fixed-bottom">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/homepage" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
      <img
  src="https://th.bing.com/th/id/OIP.4ISjnDAdbd0yYZCUlmd9AAHaHv?pid=ImgDet&w=585&h=612&rs=1"
  style={{ width: '25px', height: '25px', borderRadius: '50%' }}
  className="d-inline-block align-top me-3"
  alt="React Bootstrap logo"
/>
      </a>
      <span class="mb-3 mb-md-0 text-muted">© 2023 dc search recipe</span>
    </div>
    {/* href="https://twitter.com"><FaTwitter size={25} /></Nav.Link>
          <Nav.Link href="https://facebook.com"><FaFacebook size={25} /></Nav.Link>
          <Nav.Link href="https://github.com" cla */}

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><a class="text-muted" href="https://twitter.com"><FaTwitter size={25} /></a></li>
      <li class="ms-3"><a class="text-muted" href="https://facebook.com"><FaFacebook size={25} /></a></li>
      <li class="ms-3"><a class="text-muted" href="https://github.com"><FaGithub size={25} /></a></li>
    </ul>
  </footer>
</div>
                </main>

                </div>
            </>
    );
}
export default Home;