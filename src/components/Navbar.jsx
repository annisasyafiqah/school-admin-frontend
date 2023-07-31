import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../logo.png";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };
  
  const login = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/login");
  };

  return (
    <div>
      <nav
        className="navbar is-fixed-top has-shadow"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <NavLink to="/dashboard" className="navbar-item">
            <img src={logo} width="30" height="28" alt="logo" />
            <p className="pl-2" > SMPN1 Atambua</p>
          </NavLink>
 
          <a role="button" className="navbar-burger burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            {user && user.role === "admin" && (
              <div className="navbar-item">
                <div className="buttons">
                  <button onClick={logout} className="button is-light">
                    Log out
                  </button>
                </div>
              </div>
            )}
              <div className="navbar-item">
                <div className="buttons">
                  <button onClick={login} className="button is-light">
                    Log In
                  </button>
                </div>
              </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
