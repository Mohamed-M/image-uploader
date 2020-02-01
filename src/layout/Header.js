import React from 'react'
import { IoIosImages } from 'react-icons/io';
import { Link } from "react-router-dom";

import './Header.scss';

function Header() {
  return (
    <nav className="site-nav family-sans navbar navbar-expand bg-success navbar-dark higher">
      <div className="container-fluid">
        <div className="navbar-brand">
          <Link to ="/" className="app-title text-white font-weight-light text-uppercase">
            <IoIosImages className="mr-3" /> Image Uploader
          </Link>
        </div>
        <div className="navbar ml-auto">
          <Link className="nav-item text-white mr-4" to="/file-transfers">
            File Transfers
          </Link>
          <Link className="nav-item text-white mr-4" to="/photos">
            Photos
          </Link>
          <Link className="nav-item text-white mr-4" to="/calendar">
            Calender
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header;