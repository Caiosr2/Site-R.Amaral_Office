import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function AdicionarProduto() {
  const [produto, setProduto] = useState("");
  const [preco, setPreco] = useState("");
  const [imagem, setImagem] = useState("");
  const [numeroFuncionario, setNumeroFuncionario] = useState("");
  const [descricao, setDescricao] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const novoProduto = {
      id: Date.now(),
      nome: produto,
      preco: parseFloat(preco),
      imagem,
      categoria: ["Móveis"],
      link: "",
      descricao,
      features: "",
    };

    const produtosSalvos = JSON.parse(localStorage.getItem("produtos") || "[]");
    produtosSalvos.push(novoProduto);
    localStorage.setItem("produtos", JSON.stringify(produtosSalvos));

    alert("Produto adicionado com sucesso!");
    navigate("/editar-produtos");
  };

  return (
    <Container>
      <h1>Adicionar produtos</h1>
      <FormBox>
        <label>Produto
          <input
            type="text"
            placeholder="XXXX XXXX"
            value={produto}
            onChange={(e) => setProduto(e.target.value)}
          />
        </label>

        <label>Preço
          <input
            type="text"
            placeholder="R$ 0,00"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
          />
        </label>

        <label>Imagem
          <input
            type="text"
            placeholder="Inserir imagem"
            value={imagem}
            onChange={(e) => setImagem(e.target.value)}
          />
        </label>

        <label>Número de funcionário
          <input
            type="text"
            placeholder="XXX-XXXXX"
            value={numeroFuncionario}
            onChange={(e) => setNumeroFuncionario(e.target.value)}
          />
        </label>

        <label>Descrição
          <textarea
            placeholder="Descrição do produto"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </label>

        <ButtonAdicionar onClick={handleSubmit}>Adicionar</ButtonAdicionar>
      </FormBox>
    </Container>
  );
}

const Container = styled.div`
  padding: 3rem;
  background-color: #eee;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormBox = styled.div`
  background-color: #d9d9d9;
  padding: 2rem;
  border: 1px solid #333;
  border-radius: 8px;
  width: 100%;
  max-width: 600px;

  label {
    display: block;
    font-weight: 600;
    margin-bottom: 1rem;

    input, textarea {
      width: 100%;
      padding: 0.5rem;
      margin-top: 0.25rem;
      border-radius: 4px;
      border: 1px solid #ccc;
      font-size: 1rem;
    }

    textarea {
      height: 120px;
      resize: vertical;
    }
  }
`;

const ButtonAdicionar = styled.button`
  background-color: #374442;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1rem;
`;
