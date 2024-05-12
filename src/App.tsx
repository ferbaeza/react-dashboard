import "./styles/global.scss";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Menu from "./components/Menu/Menu";
import Tablas from './pages/Tablas/Tablas';
import Navbar from "./components/Navbar/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Usuarios from "./pages/Usuarios/Usuarios";

function App() {

  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/tablas",
          element: <Tablas />,
        },
        {
          path: "/usuarios",
          element: <Usuarios />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
