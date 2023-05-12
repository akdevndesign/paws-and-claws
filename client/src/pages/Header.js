import { Link } from "react-router-dom";
import { useState } from "react";
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import "../styles/styles.css";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {
  return (
    <Navbar bg="light" expand="md" className="fixed-top">
      <Container>
        <Navbar.Brand href="#home"><img src="https://res.cloudinary.com/dusaigbyn/image/upload/v1683762073/Paws_n_claws_logo_FINAL_ICON_ONLY_ue6kqr.png" className="logo-img" alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#showcase">Our Pals</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Button id="donate" type="submit" className="text-center ms-auto">
               Donate
          </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


//   const [onHome, setOnHome] = useState(true);
//   return (
//     <section className="main-header">
//       <nav className="main navbar navbar-expand-lg col-12">
//         <div className="container-fluid justify-content-end">
//           <Link to={"/"} onClick={() => setOnHome(true)}>
//             <img src="https://res.cloudinary.com/dusaigbyn/image/upload/v1683762073/Paws_n_claws_logo_FINAL_ICON_ONLY_ue6kqr.png" className="logo-img" />
//           </Link>
//           <ul className="navbar-nav me-auto ml-2 mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link
//                 className="nav-link"
//                 to={"/about"}
//                 onClick={() => setOnHome(false)}
//               >
//                 About
//               </Link>
//             </li>
//             {onHome ? (
//               <li className="nav-item">
//                 <a className="nav-link" href="#showcase">
//                   Our Pets
//                 </a>
//               </li>
//             ) : (
//               <></>
//             )}
//           </ul>

//             <Button id="donate" type="submit" className="text-right">
//               Donate
//             </Button>

//         </div>
//       </nav>
//     </section>
//   );
// }
