import React from 'react'
import { Link } from 'react-router-dom'
import './Slogin.css'
import { useNavigate } from 'react-router-dom'
export default function Anavbar() {
const navigate=useNavigate();
  const handleClick = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/students/logout`,
        {
          method: "DELETE",
          credentials: "include",
          header: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      if (json.success) {
        alert("Logged out successfully!");
      } else {
        console.log("fetching unsuccessful");
      }
    } catch (error) {
      console.log("error fetching company", error);
    }
  }
  const handleLogout=()=>{
    localStorage.removeItem("token");
    navigate('/stafflogin');
  }
  return (
    <div>

<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <div className="jiitlogo">
            <i className="bx bxl-mailchimp"></i>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item {`nav-item ${location.pathname === '/shome' ? 'active' : ''}`} ">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/ahome"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item ms-lg-0 {`nav-item ${location.pathname === '/home' ? 'active' : ''}`}">
                <Link className="nav-link" to="/sabout">
                  About
                </Link>
              </li>
              <li className="nav-item" id="logout"><button onClick={handleLogout} type="button" className="btn btn-outline-info">Logout</button></li>

            </ul>
          </div>
        </div>
      </nav>
</div>
  )
}