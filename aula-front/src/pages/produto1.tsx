import styled from "styled-components";
import cadeira from "../assets/cadeira_ergonomica.png"; // substitua pelo caminho correto da imagem

const ProductPage = () => {
  return (
    <Container>
      <Breadcrumb>
        Móveis &gt; Cadeiras &gt; <span>Poltrona Eduarda Linho</span>
      </Breadcrumb>

      <Title>Poltrona Escritório Eduarda em Linho</Title>
      <Content>
        <LeftColumn>
          <Price>R$ 899,99</Price>
          <Description>
            A Poltrona Eduarda, traz um toque moderno e elegante para escritórios,
            home office ou espaços de estudo. Sua base dourada metálica com rodas
            garante estabilidade e mobilidade, enquanto o sistema de regulagem de
            altura proporciona mais ergonomia para o uso diário.
          </Description>

          <FeatureList>
            <li>Revestimento em linho rosé – charme e suavidade ao toque</li>
            <li>Base metálica dourada com rodízios – resistente e sofisticada</li>
            <li>Regulagem de altura por pistão a gás</li>
            <li>Assento giratório com estrutura confortável</li>
          </FeatureList>
        </LeftColumn>

        <RightColumn>
          <ProductImage src={cadeira} alt="Poltrona Eduarda" />
          <Buttons>
            <AddButton>Adicionar ao Carrinho</AddButton>
            <BudgetButton>Faça um orçamento agora</BudgetButton>
          </Buttons>
        </RightColumn>
      </Content>
    </Container>
  );
};
export const Container = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 1rem;
`;

export const Breadcrumb = styled.div`
  font-size: 0.9rem;
  color: #777;

  span {
    color: #333;
    font-weight: bold;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin: 1rem 0;
  color: #000;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const LeftColumn = styled.div`
  flex: 1;
  min-width: 300px;
`;

export const RightColumn = styled.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Price = styled.div`
  font-size: 2rem;
  color: #f26a1b;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #333;
  margin-bottom: 1rem;
`;

export const FeatureList = styled.ul`
  margin: 1rem 0;
  padding-left: 1rem;
  list-style: disc;

  li {
    margin-bottom: 0.5rem;
  }
`;

export const Buttons = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
  max-width: 300px;
`;

export const AddButton = styled.button`
  background-color: #f26a1b;
  color: #fff;
  border: none;
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    opacity: 0.95;
  }
`;

export const BudgetButton = styled.button`
  background: none;
  color: #444;
  font-size: 1rem;
  border: none;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;
export default ProductPage;
