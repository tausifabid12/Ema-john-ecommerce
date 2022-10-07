import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Layout from "./Layout/Layout";
import Orders from "./components/Orders/Orders";
import Products from "./components/Products/Products";
import { cartAndProductLoader } from "./CartAndProductLoader/CartAndProductLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <main>
            <Hero />
          </main>
        ),
      },
      {
        path: "/home",
        element: (
          <main>
            <Hero />
          </main>
        ),
      },
      {
        path: "/shop",
        loader: cartAndProductLoader,
        element: <Products />,
      },
      {
        path: "/orders",
        loader: cartAndProductLoader,
        element: <Orders />,
      },
    ],
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
