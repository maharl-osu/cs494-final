import { NavLink, useParams } from "react-router"

import "../css/person.css"

import people from "../data/people.json"

const GenerateFilms = function(films) {
  return films.map(film => {
    return (
      <li>
        <NavLink key={film} to={film}>{film}</NavLink>
      </li>
    )
  })
}

export default function Person() {

  const params = useParams();

  const data = people[params["person"]]

  console.log(data)

  return (
    <div className="container">
      <h1>{data["name"]}</h1>
      <p><b>Height:</b> {data["height"]}</p>
      <p><b>Mass:</b> {data["mass"]}</p>
      <p><b>Hair Color:</b> {data["hair_color"]}</p>
      <p><b>Skin Color:</b> {data["skin_color"]}</p>
      <p><b>Eye Color:</b> {data["eye_color"]}</p>
      <p><b>Birth Year:</b> {data["birth_year"]}</p>
      <p><b>Gender:</b> {data["gender"]}</p>
      <p><b>Home World:</b> <NavLink to={data["homeworld"]}>{data["homeworld"]}</NavLink></p>
      <p><b>Films:</b></p>
      <ul className="films-container">
        {GenerateFilms(data["films"])}
      </ul>
    </div>
  )
}