import { NavLink } from "react-router";

import "../css/navbar.css"

export default function Navbar() {

  return (
    <div className="navbar-container">
      <NavLink to="/">Dashboard</NavLink>
      <NavLink to="clients">Clients</NavLink>
      <NavLink to="invoices">Invoices</NavLink>
      <NavLink to="quotes">Quotes (WIP)</NavLink>
      <NavLink to="settings">Settings</NavLink>
      <div className="navbar-span" />
    </div>
  )

}