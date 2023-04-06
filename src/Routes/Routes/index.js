import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home";
import ErrorPage from "../../Pages/Errorpage";
import Main from "../../Layouts/Main";
// import { lazy } from "react";

// Layouts
// const Main = lazy(() => import("../../Layouts/Main"));

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage></ErrorPage>,
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
        ]
    }
])

export default router;