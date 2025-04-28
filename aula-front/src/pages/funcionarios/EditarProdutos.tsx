import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiMinusCircle } from 'react-icons/fi';
import Lista_produtos from "../ListaProdutos";

const categoriasPrincipais = ["Móveis", "Tecnologia", "Papelaria"];
const categoriasExtras = [
  "Cadeiras", "Mesas", "Armário", "Gaveteiro", "Periféricos",
  "Impressoras", "Suporte", "Papel",
  "Canetas", "Grampeador", "Utilidades"
];

const Editar = () => {
    const [filtros, setFiltros] = useState<string[]>([]);
    const [mostrarExtras, setMostrarExtras] = useState(false);
    const [paginaAtual, setPaginaAtual] = useState(1);
    const [produtos, setProdutos] = useState(Lista_produtos);
    const produtosPorPagina = 12;
    const navigate = useNavigate();

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

    const removerProduto = (id: number) => {
      setProdutos(prev => prev.filter(prod => prod.id !== id));
    };

    const produtosFiltrados = filtros.length === 0
      ? produtos
      : produtos.filter(p => p.categoria.some(cat => filtros.includes(cat)));

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
          <BarraAcoes>
            <BotaoAdicionar onClick={() => navigate("/adicionar-produtos")}>Adicionar produtos</BotaoAdicionar>
            <BotaoSalvar onClick={() => navigate("/uso-interno")}>Concluir e salvar</BotaoSalvar>
          </BarraAcoes>
          <h2>Produtos</h2>
          <ProdutosGrid>
            {produtosPaginados.map(prod => (
              <ProdutoCard key={prod.id}>
                <RemoverIcon onClick={() => removerProduto(prod.id)}>
                  <FiMinusCircle size={20} color="#e65c00" />
                </RemoverIcon>
                <img src={prod.imagem} alt={prod.nome} />
                <h4>{prod.nome}</h4>
                <p>R$ {prod.preco.toFixed(2).replace(".", ",")}</p>
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

const BarraAcoes = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 0 1rem;
`;

const BotaoAdicionar = styled.button`
  background-color: #243436;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background-color: #1b2627;
  }
`;

const BotaoSalvar = styled.button`
  background-color: #e65c00;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background-color: #cc5200;
  }
`;

const ProdutosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 2rem;
`;

const ProdutoCard = styled.div`
  background: #fff;
  border-radius: 0.75rem;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  position: relative;

  img {
    width: 120px;
    height: 120px;
    object-fit: contain;
    margin-bottom: 0.5rem;
  }

  h4 {
    font-size: 0.95rem;
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
`;

const RemoverIcon = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.4rem;
  margin-top: 2rem;

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

export default Editar;
