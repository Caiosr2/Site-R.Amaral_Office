import { useParams } from "react-router-dom";
import Lista_produtos from "./ListaProdutos";

import styled from "styled-components";
import { Link } from "react-router-dom";

const ProdutoEspecifico = () => {
  const { id } = useParams();
  const produto = Lista_produtos.find(p => p.id === Number(id));

  if (!produto) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <PageWrapper>
      <Container>
        <RightColumn>
          <ProductImage  src={produto.imagem} alt={produto.nome} />
        </RightColumn>

        <LeftColumn>
          <Breadcrumb>
            <StyledLink to={`/produtos?categoria=${produto.categoria[0]}`}>{produto.categoria[0]}</StyledLink> &gt;{" "}
            <StyledLink to={`/produtos?categoria=${produto.categoria[1]}`}>{produto.categoria[1]}</StyledLink> &gt;{" "}
            <span>{produto.nome}</span>
          </Breadcrumb>

          <Title>{produto.nome}</Title>
          <Price>R$ {produto.preco?.toFixed(2).replace(".", ",")}</Price>
          <Description>{produto.descricao}</Description>

          <FeatureList dangerouslySetInnerHTML={{ __html: produto.features }} />

          <Buttons>
            <Link to="/orcamento" style={{ width: "100%" }}>
              <StyledButton outlined>Faça um orçamento agora</StyledButton>
            </Link>
            <StyledButton>Adicionar ao Carrinho</StyledButton>
          </Buttons>
        </LeftColumn>
      </Container>
    </PageWrapper>
  );
};

export const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f4f4f4;
  padding: 8rem 2rem 2rem; /* 🔥 8rem de padding-top (128px) para desktop */
  display: flex;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 7rem 1.5rem 2rem; /* 🔥 ajusta para tablets */
  }

  @media (max-width: 425px) {
    padding: 10rem 1rem 2rem; /* 🔥 ainda mais no mobile pequeno */
  }
`;

export const Container = styled.div`
  background: #fff;
  max-width: 1100px;
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  display: flex;
  flex-direction: row;
  gap: 3rem;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1.5rem;
  }
`;

export const LeftColumn = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const RightColumn = styled.div`
  flex: 1 1 40%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ProductImage = styled.img`
  width: 320px; /* 🔥 Tamanho fixo para telas grandes */
  height: auto;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  object-fit: contain;

  @media (max-width: 768px) {
    width: 100%; /* 🔥 Abaixo de 768px, imagem vira responsiva */
    max-width: 240px;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin: 0.5rem 0;
  color: #1a1a1a;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Price = styled.div`
  font-size: 2rem;
  color: #e65c00;
  font-weight: bold;
  margin: 1.2rem 0;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const Description = styled.p`
  text-align: justify;
  max-width: 100%;
  font-size: 1.05rem;
  color: #444;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

export const FeatureList = styled.ul`
  margin: 1.5rem 0;
  padding-left: 1.5rem;
  list-style: disc;

  li {
    margin-bottom: 0.75rem;
    font-size: 1.05rem;
    color: #333;

    @media (max-width: 768px) {
      font-size: 0.95rem;
    }
  }
`;

export const Breadcrumb = styled.div`
  font-size: 0.95rem;
  color: #888;
  margin-bottom: 1rem;

  span {
    color: #1a1a1a;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

export const StyledLink = styled(Link)`
  color: #888;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color: #1a1a1a;
    text-decoration: underline;
  }
`;

export const Buttons = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1rem;
`;

export const StyledButton = styled.button<{ outlined?: boolean }>`
  background-color: ${({ outlined }) => (outlined ? "transparent" : "#e65c00")};
  color: ${({ outlined }) => (outlined ? "#e65c00" : "white")};
  border: 2px solid #e65c00;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.85rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  width: 100%;
  max-width: 100%;

  &:hover {
    background-color: #e65c00;
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.7rem 1rem;
  }
`;

export default ProdutoEspecifico;


