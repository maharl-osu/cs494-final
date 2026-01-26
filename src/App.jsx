import { BrowserRouter, createBrowserRouter, Navigate, Route, RouterProvider, Routes } from "react-router";
import Root from "./components/root";
import Sidebar from "./components/sidebar";
import Home from "./components/home";
import Person from "./components/person";
import Planet from "./components/planet";
import Film from "./components/film";
import Error from "./components/error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "people",
                element: <Sidebar Category="People"/>,
                children: [
                    {
                        index: true,
                        element: <Navigate to="1" />
                    },
                    {
                        path: ":person",
                        element: <Person />
                    }
                ]
            },
            {
                path: "planets",
                element: <Sidebar Category="Planets"/>,
                children: [
                    {
                        index: true,
                        element: <Navigate to="1" />
                    },
                    {
                        path: ":planet",
                        element: <Planet />
                    }
                ]
            },
            {
                path: "films",
                element: <Sidebar Category="Films"/>,
                children: [
                    {
                        index: true,
                        element: <Navigate to="1" />
                    },
                    {
                        path: ":film",
                        element: <Film />
                    }
                ]
            }
        ]
    }
])

export default function App() {

    return (
        <RouterProvider router={router} />
    )
}
