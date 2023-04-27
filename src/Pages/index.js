import Index from "./Index/Index";
import NotFound from "./NotFound/NotFound"
import IndexLayout from "../Layouts/IndexLayouts/IndexLayouts"
import MainLayout from '../Layouts/MainLayouts/MainLayouts'
import { createBrowserRouter } from "react-router-dom";
import Foother from "../Components/Foother/Foother";
import Home from "./Home/Home";
import Products from "../Components/Products/Products";
import Nosotros from "../Components/Nosotros/Nosotros"

export const router = createBrowserRouter([
    {
        path: "/", 
        element: <IndexLayout/>,
        children: [
            {
                index: "/", 
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
                path: "/Home",
                element: <Home/>
            },
            {
                path: "/Nosotros",
                element: <Nosotros/>
            },
            {
                path: "/Products",
                element: <Products/>
            },
            {
                path: "/Foother",
                element: <Foother/>
            },
        ]
    },
    {
        path: "/*", 
        element: <NotFound/>
    }
]);

