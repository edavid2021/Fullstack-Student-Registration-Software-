import React from "react"
import { NavLink } from 'react-router-dom';
import "./Nav.css"
let Nav=()=>{

    return(
        <React.Fragment>
  <nav className="navbar">
    <NavLink exact to="/" activeClassName="active">
      Home
          </NavLink>
          
    <NavLink to="/add" activeClassName="active">
      Add Student
          </NavLink>
          
    <NavLink to="/update" activeClassName="active">
      Update Student
          </NavLink>
          
    <NavLink to="/delete" activeClassName="active">
      Delete Student
          </NavLink>

    <NavLink to="/display" activeClassName="active">
      Display Student
          </NavLink>

    <NavLink to="/list" activeClassName="active">
      List Students
          </NavLink>
          
    <NavLink to="/search" activeClassName="active">
      Search Student
          </NavLink>
          
  </nav>
</React.Fragment>
    )
}
export default Nav
