import Navbar from "./components/Navbar";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Gigs from "./pages/Gigs";
import Gig from "./pages/Gig";
import Orders from "./pages/Orders";
import MyGigs from "./pages/MyGigs";
import Add from "./pages/Add";
import Messages from "./pages/Messages";
import Message from "./pages/Message";
const App = () => {

  const Layout = () => {
    return (
      <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/gigs",
          element:<Gigs/>
        },
        {
          path:"/gig/:id",
          element:<Gig/>
        },
        {
          path:"/orders",
          element:<Orders/>
        },
        {
          path:"/mygigs",
          element:<MyGigs/>
        },
        {
          path:"/gigs",
          element:<Gigs/>
        },
        {
          path:"/add",
          element:<Add/>
        },
        {
          path:"/messages",
          element:<Messages/>
        },
        {
          path:"/message/:id",
          element:<Message/>
        },
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
};

export default App;