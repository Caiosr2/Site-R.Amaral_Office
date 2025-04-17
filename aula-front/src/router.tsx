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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "produtos", element: <Produtos /> },
      { path: "funcionarios", element: <Funcionarios /> },
      { path: "servicos", element: <Servicos /> },
      { path: "nossa-historia", element: <NossaHistoria /> },
      { path: "carrinho", element: <Carrinho /> },
      { path: "uso-interno", element: <UsoInterno /> },
      {path: "orcamento", element: <Orcamento />}
    ]
  }
]);

