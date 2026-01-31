import { createBrowserRouter, RouterProvider } from "react-router";

import Root from "./components/root.jsx"
import Clients from "./components/clients.jsx";
import Dashboard from "./components/dashboard.jsx";
import Invoices from "./components/invoices.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: "clients",
                element: <Clients />
            },
            {
                path: "invoices",
                element: <Invoices />
            },
            {
                path: "quotes",
                element: <></>
            },
            {
                path: "settings",
                element: <></>
            }
        ]
    }
])

export default function App() {

    return (
        <RouterProvider router={router} />
    )
}
