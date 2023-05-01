import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Write from "./Pages/Write";
import Single from "./Pages/Single";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Layout />
      </div>
    ),
    children: [
      {
        path: "/",
        element: (
          <div>
            <Home />
          </div>
        ),
      },
      {
        path: "/post/:id",
        element: (
          <div>
            <Single />
          </div>
        ),
      },
      {
        path: "/write",
        element: (
          <div>
            <Write />
          </div>
        ),
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
