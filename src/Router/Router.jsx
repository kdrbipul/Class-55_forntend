import { createBrowserRouter } from "react-router-dom";
import AddUser from "../Component/AddUser/AddUser";
import Main from "../Layout/Main";
import Home from './../Component/Home/Home';
import Update from './../Update/Update';

 
 const router = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        
    },
    {
        path:'/addUser',
        element: <AddUser />
    },
    {
        path:'/home',
        element: <Home />,
        loader:() => fetch('http://localhost:5000/users'),
    },
    {
        path:'/update/:id',
        element: <Update />,
        loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
    },
 ])

 export default router;