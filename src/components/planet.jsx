import { NavLink, useParams } from "react-router"

import "../css/planet.css"

import planets from "../data/planets.json"

const GenerateFilms = function(films) {
  return films.map(film => {
    return (
      <li>
        <NavLink key={film} to={film}>{film}</NavLink>
      </li>
    )
  })
}

const GenerateResidents = function(residents) {
  return residents.map(resident => {
    return (
      <li>
        <NavLink key={resident} to={resident}>{resident}</NavLink>
      </li>
    )
  })
}

export default function Planet() {

  const params = useParams();

  const data = planets[params["planet"]]

  console.log(data)

  return (
    <div className="container">
      <h1>{data["name"]}</h1>
      <p><b>Rotational Period:</b> {data["rotation_period"]}</p>
      <p><b>Orbital Period:</b> {data["orbital_period"]}</p>
      <p><b>Diamater:</b> {data["diameter"]}</p>
      <p><b>Climate:</b> {data["climate"]}</p>
      <p><b>Gravity:</b> {data["gravity"]}</p>
      <p><b>Terrain:</b> {data["terrain"]}</p>
      <p><b>Surface Water:</b> {data["surface_water"]}</p>
      <p><b>Population:</b> {data["population"]}</p>
      <p><b>Films:</b></p>
      <ul className="list-container">
        {GenerateFilms(data["films"])}
      </ul>
      <p><b>Residents:</b></p>
      <ul className="list-container">
        {GenerateResidents(data["residents"])}
      </ul>
    </div>
  )
}