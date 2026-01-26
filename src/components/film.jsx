import { NavLink, useParams } from "react-router"

import "../css/film.css"

import films from "../data/films.json"

const GeneratePlanets = function(planets) {
  return planets.map(planet => {
    return (
      <li>
        <NavLink key={planet} to={planet}>{planet}</NavLink>
      </li>
    )
  })
}

const GenerateCharacters = function(characters) {
  return characters.map(character => {
    return (
      <li>
        <NavLink key={character} to={character}>{character}</NavLink>
      </li>
    )
  })
}

export default function Film() {

  const params = useParams();

  const data = films[params["film"]]

  console.log(data)

  return (
    <div className="container">
      <h1>{data["title"]}</h1>
      <p><b>Director:</b> {data["director"]}</p>
      <p><b>Producer:</b> {data["producer"]}</p>
      <p><b>Release Date:</b> {data["release_date"]}</p>
      <p><b>Opening Crawl:</b> {data["opening_crawl"]}</p>
      <p><b>Gravity:</b> {data["gravity"]}</p>
      <p><b>Terrain:</b> {data["terrain"]}</p>
      <p><b>Surface Water:</b> {data["surface_water"]}</p>
      <p><b>Population:</b> {data["population"]}</p>
      <p><b>Planets:</b></p>
      <ul className="list-container">
        {GeneratePlanets(data["planets"])}
      </ul>
      <p><b>Characters:</b></p>
      <ul className="list-container">
        {GenerateCharacters(data["characters"])}
      </ul>
    </div>
  )
}