import { useNavigate } from "react-router-dom";
import {useState} from "react"


export default function MyNavbar() {
  const navigate = useNavigate();
  const [isMenuOpen,setMenuOpen]=useState(false)

  const goToSignin = () => {
    navigate('/sign-in')
  }
  
  const togglenavBar=()=>{
	  setMenuOpen(!isMenuOpen)
  }
  return (
    <div className="container-fluid sticky-top">

      <nav className="navbar navbar-expand-lg navbar-light p-0">
        <a href="/" className="navbar-brand">
          <img
            src="img/nirogya_logo_brand.png"
            alt="Nirogya Ayurveda Logo"
            aria-label="Nirogya Ayurveda Logo"
            className="logo"
          />
        </a>
        <button
          type="button"
          className="navbar-toggler ms-auto me-0"
		  onClick={togglenavBar}
        >{
			isMenuOpen
			?
			<i className="fa fa-times"/>
			:
          <span className="navbar-toggler-icon" />
		}
        </button>
        <div className={isMenuOpen?"navbar-collapse":"navbar-collapse collapse"}>
          <div className="navbar-nav ms-auto py-sm-4">
            <form className="form-inline m-2 my-sm-4 my-lg-0">
              <input className="form-control mr-2 search" type="search" placeholder="Search" aria-label="Search" />
            </form>
            <a href="/cart" className="nav-item nav-link m-2 my-sm-4 my-lg-0" >
			<div className="round-button">
              <i className="fa fa-cart-plus"/>
			  <span className="px-2 d-sm-block d-md-block d-lg-none">My Cart</span>
			  </div>
            </a>
			          <button
            className="btn btn-dark m-2 my-sm-4 my-lg-0"
            onClick={goToSignin}
          >
            Login/Signup
          </button>
		
          </div>

        </div>
      </nav>

    </div>
  );
};
