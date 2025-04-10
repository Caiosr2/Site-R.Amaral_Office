import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Router } from "react-router-dom";
import Tela_2 from "./tela_2";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    }
    ,{
        path: "/tela_2",
        element: <Tela_2/>
    }
]
)