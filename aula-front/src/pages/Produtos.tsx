import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import Lista_produtos from "./ListaProdutos";

const categoriasPrincipais = ["Móveis", "Tecnologia", "Papelaria"];
const categoriasExtras = [
  "Cadeiras", "Mesas", "Armário", "Gaveteiro", "Periféricos",
  "Impressoras", "Suporte", "Papel",
   "Canetas", "Grampeador",  "Utilidades"
];

export default function Produtos() {
  const [filtros, setFiltros] = useState<string[]>([]);
  const [mostrarExtras, setMostrarExtras] = useState(false);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const produtosPorPagina = 10;

  const location = useLocation();
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const categoria = query.get("categoria");
    if (categoria) {
      setFiltros([categoria]);
      setPaginaAtual(1);
    }
  }, [location.search]);

  const toggleFiltro = (categoria: string) => {
    setPaginaAtual(1);
    setFiltros(prev =>
      prev.includes(categoria) ? prev.filter(c => c !== categoria) : [...prev, categoria]
    );
  };

  const produtosFiltrados = filtros.length === 0
    ? Lista_produtos
    : Lista_produtos.filter(p => p.categoria.some(cat => filtros.includes(cat)));

  const produtosPaginados = produtosFiltrados.slice(
    (paginaAtual - 1) * produtosPorPagina,
    paginaAtual * produtosPorPagina
  );

  const totalPaginas = Math.ceil(produtosFiltrados.length / produtosPorPagina);

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
        <ProdutosGrid single={produtosPaginados.length === 1}>
          {produtosPaginados.map(prod => (
            <ProdutoCard key={prod.id}>
              <Link to={`/produto/${prod.id}`}>
                <img src={prod.imagem} alt={prod.nome} />
                <h4>{prod.nome}</h4>
              </Link>
              <p>R$ {prod.preco.toFixed(2).replace(".", ",")}</p>
              <button>Adicionar ao carrinho</button>
              <Link to="/orcamento">Faça um orçamento agora</Link>
            </ProdutoCard>
          ))}
        </ProdutosGrid>

        {totalPaginas > 1 && (
          <Pagination>
            {Array.from({ length: totalPaginas }, (_, i) => (
              <button
                key={i}
                className={paginaAtual === i + 1 ? 'active' : ''}
                onClick={() => setPaginaAtual(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </Pagination>
        )}
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
  margin-top: 4.5rem;

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
    font-size: 2.2rem;
  }
`;

const ProdutosGrid = styled.div<{ single: boolean }>`
  display: grid;
  grid-template-columns: ${({ single }) => (single ? "1fr" : "repeat(auto-fit, minmax(160px, 1fr))")};
  justify-content: ${({ single }) => (single ? "center" : "stretch")};
  gap: 2rem 2.5rem;
  padding: 0 2rem 2rem 2rem;
`;


const ProdutoCard = styled.div`
  background: #fff;
  border-radius: 0.75rem;
  padding: 0.6rem;
  width: 100%;
  max-width: 180px;
  margin: 0 auto;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }

  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    margin-bottom: 0.5rem;
  }

  h4 {
    font-size: 0.85rem;
    margin-bottom: 0.25rem;
    height: 2.8rem;
    overflow: hidden;
  }

  p {
    font-size: 0.85rem;
    font-weight: bold;
    margin-bottom: 0.4rem;
    color: #e65c00;
  }

  button {
    background: #e65c00;
    border: none;
    color: white;
    padding: 0.3rem 0.6rem;
    border-radius: 5px;
    font-size: 0.75rem;
    margin-bottom: 0.4rem;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  a {
    display: block;
    font-size: 0.7rem;
    color: #555;
    text-decoration: underline;
  }
`;



const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.4rem;
  margin-bottom: 2rem;

  button {
    background-color: #eee;
    border: none;
    padding: 0.4rem 0.75rem;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;

    &.active {
      background-color: #e65c00;
      color: white;
    }

    &:hover {
      background-color: #ddd;
    }
  }
`;
