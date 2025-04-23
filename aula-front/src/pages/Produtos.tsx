import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import cadeiraeduarda from "../assets/cadeiraeduarda.png";
import mesaL from "../assets/MesaL.png";

const produtos = [
  { id: 1, nome: "Poltrona Escritório Eduarda", preco: 899.99, categoria: ["Móveis", "Cadeiras"], imagem: cadeiraeduarda, link: "/poltronaeduarda" },
  { id: 2, nome: "Mesa de Escritório em L Anah", preco: 1597.99, categoria: ["Móveis", "Mesas"], imagem: mesaL, link: "/mesaeml" },
  { id: 3, nome: "Telefone OpenScape CP400", preco: 849.99, categoria: ["Tecnologia", "Telefones"], imagem: "https://via.placeholder.com/150", link: "/TelefoneOpenscape" },
  { id: 4, nome: "Lápis e borracha kit escolar", preco: 15.99, categoria: ["Papelaria", "Lápis e borracha"], imagem: "https://via.placeholder.com/150", link: "/KitEscolar" },
];

const categoriasPrincipais = ["Móveis", "Tecnologia", "Papelaria"];
const categoriasExtras = [
  "Cadeiras", "Mesas", "Armários", "Gaveteiros", "Periféricos",
  "Impressoras", "Suporte", "Telefones", "Tomada", "Papel",
  "Lápis e borracha", "Canetas", "Grampeadores", "Cartucho de tinta"
];

export default function Produtos() {
  const [filtros, setFiltros] = useState<string[]>([]);
  const [mostrarExtras, setMostrarExtras] = useState(false);

  const location = useLocation();
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const categoria = query.get("categoria");
    if (categoria) {
      setFiltros([categoria]); // Agora seleciona apenas a categoria informada na URL
    }
  }, [location.search]);

  const toggleFiltro = (categoria: string) => {
    setFiltros(prev =>
      prev.includes(categoria) ? prev.filter(c => c !== categoria) : [...prev, categoria]
    );
  };

  const produtosFiltrados = filtros.length === 0
    ? produtos
    : produtos.filter(p => p.categoria.some(cat => filtros.includes(cat)));

  return (
    <Container>
      <Sidebar>
        <h3>Filtros</h3>
        {categoriasPrincipais.map(cat => (
          <label key={cat}>
            <input
              type="checkbox"
              checked={filtros.includes(cat)}
              onChange={() => toggleFiltro(cat)}
            />
            {cat}
          </label>
        ))}

        <ExtrasToggle onClick={() => setMostrarExtras(!mostrarExtras)}>
          Mais produtos {mostrarExtras ? '▼' : '>'}
        </ExtrasToggle>

        {mostrarExtras && (
          <ExtrasBox>
            {categoriasExtras.map(cat => (
              <label key={cat}>
                <input
                  type="checkbox"
                  checked={filtros.includes(cat)}
                  onChange={() => toggleFiltro(cat)}
                />
                {cat}
              </label>
            ))}
          </ExtrasBox>
        )}
      </Sidebar>

      <Content>
        <h2>Produtos</h2>
        <ProdutosGrid single={produtosFiltrados.length === 1}>
          {produtosFiltrados.map(prod => (
            <ProdutoCard key={prod.id}>
              <Link to={prod.link}>
                <img src={prod.imagem} alt={prod.nome} />
                <h4>{prod.nome}</h4>
              </Link>
              <p>R$ {prod.preco.toFixed(2)}</p>
              <button>Adicionar ao carrinho</button>
              <Link to="/orcamento">Faça um orçamento agora</Link>
            </ProdutoCard>
          ))}
        </ProdutosGrid>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 2rem;
  gap: 2rem;
  background-color: #f4f4f4;
`;

const Sidebar = styled.div`
  background: #d5d5cd;
  padding: 1.5rem;
  border-radius: 1rem;
  min-width: 220px;

  h3 {
    margin-bottom: 1rem;
    font-weight: 600;
    font-size: 1.3rem;
    color: #243436;
  }

  label {
    display: flex;
    align-items: center;
    margin-bottom: 0.75rem;
    font-size: 1.1rem;

    input {
      margin-right: 0.5rem;
      transform: scale(1.4);
    }
  }
`;

const ExtrasToggle = styled.div`
  margin-top: 1rem;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
  font-size: 1.1rem;
`;

const ExtrasBox = styled.div`
  margin-top: 1rem;
`;

const Content = styled.div`
  flex: 1;
  h2 {
    margin-bottom: 1.5rem;
    text-align: center;
    color: #243436;
  }
`;

const ProdutosGrid = styled.div<{ single: boolean }>`
  display: grid;
  grid-template-columns: ${({ single }) => (single ? "1fr 1fr 1fr" : "repeat(auto-fit, minmax(220px, 1fr))")};
  justify-content: ${({ single }) => (single ? "start" : "stretch")};
  gap: 2.5rem;
  padding-right: 2rem;
`;

const ProdutoCard = styled.div`
  background: #fff;
  border-radius: 1rem;
  padding: 1rem;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  text-align: center;

  img {
    width: 100%;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
  }

  h4 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-weight: bold;
    margin-bottom: 0.75rem;
    color: #e65c00;
  }

  button {
    background: #e65c00;
    border: none;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    margin-bottom: 0.5rem;
    cursor: pointer;
  }

  a {
    display: block;
    font-size: 0.9rem;
    color: #555;
    text-decoration: underline;
  }
`;
