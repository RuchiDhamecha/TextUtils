import React from 'react'
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">{props.homePage}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">{props.aboutText}</a>
          </li>
          
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
    </>
  )
}

//to specify datatypes of props
Navbar.proTypes = {
    title : PropTypes.string.isRequired,
    aboutText : PropTypes.string,
    home : PropTypes.string 
}
//on app.js if we dont pass any value for aboutpage it will not give error but if we dont value  to title it will give error as it is .isRequired..and homevalue is by default given


Navbar.defaultProps ={
    homePage : "Home"
};    //this value for homepage will be used if nothing gets pass to it on App.js navbar