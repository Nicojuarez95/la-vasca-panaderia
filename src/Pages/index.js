import Index from "./Index/Index";
import NotFound from "./NotFound/NotFound"
import IndexLayout from "../Layouts/IndexLayouts/IndexLayouts"
import MainLayout from '../Layouts/MainLayouts/MainLayouts'
import { createBrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import Contact from "../Components/Contact/Contact"
import Nosotros from "../Components/Nosotros/Nosotros"

export const router = createBrowserRouter([
    {
        path: "/", 
        element: <IndexLayout/>,
        children: [
            {
                index: true, 
                element: <Index/>
            },
            {
                path: "/*",
                element: <NotFound/>
            }
        ]
    },
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "/home",
                element: <Home/>
            },
            {
                path: "/nosotros",
                element: <Nosotros/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
        ]
    },
    {
        path: "/*", 
        element: <NotFound/>
    }
]);

