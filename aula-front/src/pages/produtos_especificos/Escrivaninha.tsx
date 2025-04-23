import styled from "styled-components";
import { Link } from "react-router-dom";
import escrivaninha from "../../assets/escrivaninha.png";

const EscrivaninhaGV = () => {
  return (
    <PageWrapper>
      <Container>
        <RightColumn>
          <ProductImage src={escrivaninha} alt="Escrivaninha Office 3 GV Grafite e Mel" />
        </RightColumn>

        <LeftColumn>
          <Breadcrumb>
            <StyledLink to="/produtos?categoria=Móveis">Móveis</StyledLink> &gt;{" "}
            <StyledLink to="/produtos?categoria=Móveis,Mesas">Mesas</StyledLink> &gt;{" "}
            <span>Escrivaninha GV</span>
          </Breadcrumb>

          <Title>Escrivaninha Office 3 GV Grafite e Mel</Title>
          <Price>R$ 724,99</Price>

          <Description>
            A Escrivaninha Office é a escolha ideal para quem busca praticidade, organização e um visual moderno. Conta com 3 gavetas que ajudam a manter tudo no lugar, desde materiais de escritório até objetos pessoais.
          </Description>

          <FeatureList>
            <li>Acabamento moderno em grafite e mel</li>
            <li>Estrutura em MDF de qualidade, resistente e fácil de limpar</li>
            <li>Tamanho compacto, ideal para ambientes pequenos</li>
            <li>Superfície ampla para notebook, livros e materiais de apoio</li>
          </FeatureList>

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
  height: 100vh;
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
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
`;

export const Breadcrumb = styled.div`
  font-size: 0.95rem;
  color: #888;
  margin-bottom: 1rem;

  span {
    color: #1a1a1a;
    font-weight: 600;
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

export const Title = styled.h1`
  font-size: 2rem;
  margin: 0.5rem 0;
  color: #1a1a1a;
`;

export const Price = styled.div`
  font-size: 2rem;
  color: #e65c00;
  font-weight: bold;
  margin: 1.2rem 0;
`;

export const Description = styled.p`
  text-align: justify;
  max-width: 250%;
  font-size: 1.05rem;
  color: #444;
  line-height: 1.6;
`;

export const FeatureList = styled.ul`
  margin: 1.5rem 0;
  padding-left: 1.5rem;
  list-style: disc;

  li {
    margin-bottom: 0.75rem;
    font-size: 1.05rem;
    color: #333;
  }
`;

export const LeftColumn = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const RightColumn = styled.div`
  flex: 1 1 40%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProductImage = styled.img`
  width: 100%;
  max-width: 320px;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
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
`;

export default EscrivaninhaGV;