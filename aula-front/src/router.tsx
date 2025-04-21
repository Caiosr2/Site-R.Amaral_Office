import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Servicos from "./pages/Servicos";
import NossaHistoria from "./pages/NossaHistoria";
import Carrinho from "./pages/Carrinho";
import Funcionarios from "./pages/Funcionarios";
import UsoInterno from "./pages/funcionarios/UsoInterno";
import Orcamento from "./pages/Orcamento";
import Produto1 from "./pages/produto1";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "produtos", element: <Produtos /> },
      { path: "servicos", element: <Servicos /> },
      { path: "nossa-historia", element: <NossaHistoria /> },
      { path: "carrinho", element: <Carrinho /> },
      {path: "orcamento", element: <Orcamento />},
      {path: "produto1", element: <Produto1 />},

    ]
  },
  { path: "funcionarios", element: <Funcionarios /> },
  { path: "uso-interno", element: <UsoInterno /> }
]);

