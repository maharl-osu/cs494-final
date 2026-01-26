

import { NavLink, Outlet } from "react-router"
import "../css/sidebar.css"

import films from "../data/films.json"
import people from "../data/people.json"
import planets from "../data/planets.json"

const GenerateButtons = function(type) {
  if (type == "People") {
    return Object.keys(people).map(key => {
      return <NavLink to={key} key={key}>{people[key]["name"]}</NavLink>
    })
  } else if (type == "Planets") {
    return Object.keys(planets).map(key => {
      return <NavLink to={key} key={key}>{planets[key]["name"]}</NavLink>
    })
  } else if (type == "Films") {
    return Object.keys(films).map(key => {
      return <NavLink to={key} key={key}>{films[key]["title"]}</NavLink>
    })
  } else {
    console.log(`No buttons for type, ${type}`)
  }
}

export default function Sidebar(props) {
  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar">
          {GenerateButtons(props["Category"])}
        </div>
        <div className="content-pane">
          <Outlet />
        </div>
      </div>
    </>
  )
}