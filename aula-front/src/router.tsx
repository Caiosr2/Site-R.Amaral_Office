import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Servicos from "./pages/Servicos";
import NossaHistoria from "./pages/NossaHistoria";
import Carrinho from "./pages/Carrinho";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "produtos", element: <Produtos /> },
      { path: "servicos", element: <Servicos /> },
      { path: "nossa-historia", element: <NossaHistoria /> },
      { path: "carrinho", element: <Carrinho /> }
    ]
  }
]);

