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
import PoltronaEduarda from "./pages/produtos_especificos/PoltronaEduarda";
import MesaExecutiva from "./pages/produtos_especificos/MesaExecutiva";
import MesaemL from "./pages/produtos_especificos/MesaemL";
import CadeiraFM from "./pages/produtos_especificos/CadeiraForttMilao";
import CadeiraErgonomica from "./pages/produtos_especificos/CadeiraErgonomica";
import CadeiraCouro from "./pages/produtos_especificos/CadeiraCouro";
import Checkout from "./pages/Checkout";

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
      {path: "poltronaeduarda", element: <PoltronaEduarda />},
      {path: "mesaexecutiva", element: <MesaExecutiva />},
      {path: "mesaeml", element: <MesaemL />},
      {path: "cadeirafm", element: <CadeiraFM />},
      {path: "cadeiraergonomica", element: <CadeiraErgonomica />},
      {path: "cadeiradecouro", element: <CadeiraCouro />},
      {path: "checkout", element: <Checkout />},
    ]
  },
  { path: "funcionarios", element: <Funcionarios /> },
  { path: "uso-interno", element: <UsoInterno /> }
]);
