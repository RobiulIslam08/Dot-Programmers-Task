import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErroPage/ErrorPage";

const router = createBrowserRouter([
	{
        path: "/",
        element: <Mainlayout/>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home/>,
            }
        ]
    },
  ]);

export default router;