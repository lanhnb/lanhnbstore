import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { logoutUser } from "./slices/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import { FaCartPlus } from "react-icons/fa";
import { FaFighterJet } from "react-icons/fa";
import { FaHive } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { FaTimes} from "react-icons/fa";
import { Link } from "react-router-dom";




const NavBar = () => {
  const dispatch = useDispatch();
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  
  const navigate = useNavigate();
  const [isShown, setIsShown] = useState(false);
  const [isShown1, setIsShown1] = useState(false);
  const [hideF, sethideF] = useState(true)
  const handleClick = event => {
      // 👇️ toggle shown state
      setIsShown1(current => !current);

      // 👇️ or simply set it to true
      // setIsShown(true);
      navigate("/")

  };

  


 

  return (<>
    <nav className="nav-bar">
      <Link className="menu11">

      
        <Link id="openClose" onClick={handleClick}><span  onClick={()=>sethideF(!hideF)}>
                {hideF ? <FaList /> : <FaTimes/>}
                </span>
          
        </Link>
        <Link to="/">
          <img src="https://res.cloudinary.com/dxnhv54sl/image/upload/v1695431219/logo/epiu3addc0ing9mk4l2p.png" className="logo1" alt="logo1" />
        </Link>
      </Link>

      <Link to="/cart">
        <div className="nav-bag">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            className="bi bi-handbag-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
          </svg>
          <span className="bag-quantity">
            <span>{cartTotalQuantity}</span>
          </span>
        </div>
        </Link>
        <Link to="/" className="lanb">Lanhnb.store</Link>
    </nav>
 
  {
    isShown1 && (
      <div id="mySidebar" className="w3-sidebar w3-bar-block w3-border-right w3-animate-left"
      >
          <Link to="/" className="w3-bar-item w3-button w3-border-bottom w3-large">
              <img className="w3-circle" src="https://res.cloudinary.com/dxnhv54sl/image/upload/v1695458829/logo/tjxcmynwrh3tiwqmx9yg.jpg" alt='name' /></Link>
          
          
          <Link to="/" className="w3-bar-item w3-button w3-red">Home</Link>
          <Link to="/nhadat" className="w3-bar-item w3-button"> <FaHive/>  Nhà đất</Link>
          <Link to="/xkld" className="w3-bar-item w3-button"><FaFighterJet/>  Xuất khẩu lao động</Link>
          <Link to="/products" className="w3-bar-item w3-button"><FaCartPlus /> Shop</Link>
          <Link to="/contact" className="w3-bar-item w3-button"><FaCartPlus /> Contact</Link>
          
                          
                  {auth._id ? (
                      <Links>

                          {auth.isAdmin ? (
                              <div>
                                  <Link to="/admin/summary">Admin</Link>
                              </div>
                          ) : null}
                          <div
                              onClick={() => {
                                  dispatch(logoutUser(null));
                                  toast.warning("Logged out!", { position: "bottom-left" });
                              }}
                          >
                              Logout
                          </div>
                      </Links>
                  ) : (
                      <AuthLinks>
                        <p>
                          <Link to="/login">Login</Link>
                          </p>
                          <Link to="register">Register</Link>
                          
                      </AuthLinks>
                  )}
              
          
          <Link to="/modals" className="w3-bar-item w3-button w3-red" >Chính
              sách website</Link>
      </div>
      
)
  }
  
  

  </>
  )
};

export default NavBar;

const AuthLinks = styled.div`

.lanb{
  font-size:17px;
}
  a {
    &:last-child {
      margin-left: 2rem;
    }
  }
`;

const Links = styled.div`
  color: white;
  display: flex;

  div {
    cursor: pointer;

    &:last-child {
      margin-left: 2rem;
    }
  }
  img.logo1 {
    height: 35px;
}
`;
