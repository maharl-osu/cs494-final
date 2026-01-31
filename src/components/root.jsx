import { Outlet } from "react-router";
import Navbar from "./navbar";


export default function Root(props) {
  return (
    <div>
      <Navbar />
      {props.children || <Outlet />}
    </div>
  )
}