import { NavLink, Outlet } from "react-router";

import "../css/navbar.css"

const Buttons = ["People", "Planets", "Films"]

const GenerateButtons = function() {
  return Buttons.map((label) => {
    return (
      <NavLink key={label} to={`/${label.toLowerCase()}`}>{label}</NavLink>
    )
  })
}

export default function Navbar(props) {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-title-container">
          <h1 className="navbar-title">
            Star Wars
          </h1>
        </div>
        <div className="navbar-buttons-container">
          {GenerateButtons(props["Selected"])}
        </div>
      </div>
    </>
  )
}