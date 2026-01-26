import { Outlet } from "react-router";
import Navbar from "./navbar";


export default function Root(props) {
  return (
    <>
      <Navbar />
      <main>{props.children || <Outlet />}</main>
    </>
  )
}