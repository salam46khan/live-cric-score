import { createBrowserRouter } from "react-router-dom";
import Score from "../Pages/Score/Score";


const Router = createBrowserRouter ([
    {
        path: '/',
        element: <p>hi</p>
    },
    {
        path: '/score',
        element: <Score></Score>
    }
])

export default Router;