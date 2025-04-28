import React from 'react';
import styled from 'styled-components';
import img1 from '../assets/nossa_historia_1.png';
import img2 from '../assets/nossa_historia_2.png';
import img3 from '../assets/nossa_historia_3.png';
import img4 from '../assets/nossa_historia_4.png';
import img5 from '../assets/nossa_historia_5.png';

const NossaHistoria = () => {
  return (
    <Container>
      <Header>
        <h1>Nossa História</h1>
        <p>
          Conheça os marcos que fizeram da
          <strong> R. Amaral Office</strong> uma referência em
          soluções corporativas.
        </p>
      </Header>

      <Timeline>
        <Evento>
          <Avatar src={img1} alt="Fundador" />
          <Texto>
            <h2>2010 | Fundação</h2>
            <p>
              Ricardo Amaral fundou a R. Amaral Office em São Paulo com a missão de oferecer produtos práticos,
              duráveis e acessíveis para escritórios. Com foco inicial no móvel físico e na redefinição da entrega
              local, a marca se destacou pela prática no ciclo pedido com a qualidade dos produtos e a relação próxima com o cliente.
            </p>
          </Texto>
        </Evento>

        <Evento>
          <Texto>
            <h2>2012 | Portfólio ampliado e primeiros contratos públicos</h2>
            <p>
              Com o crescimento da demanda, a empresa expandiu seu portfólio, passando a oferecer também papelaria, itens de organização e equipamentos eletrônicos.
              Nesse período, conquistou seus primeiros contratos com instituições públicas, reforçando sua credibilidade no fornecimento B2B.
            </p>
          </Texto>
          <Avatar src={img2} alt="Portfólio" />
        </Evento>

        <Evento>
          <Avatar src={img3} alt="Loja Física" />
          <Texto>
            <h2>2020 | Adaptação e resposta à nova realidade</h2>
            <p>
              Com a chegada da pandemia e o crescimento do trabalho remoto, a empresa ampliou sua atenção para o público final (B2C).
              Começa a oferecer soluções para home office, atendendo profissionais autônomos e pequenas empresas com ergonomia e praticidade, sem abrir mão do preço justo.
            </p>
          </Texto>
        </Evento>

        <Evento>
          <Texto>
            <h2>2016 | Fortalecimento no ecossistema empresarial</h2>
            <p>
              A R. Amaral Office se torna referência no fornecimento para startups, empresas e coworkings.
              Nesse período, suas soluções modulares, com boa durabilidade e capacidade de escalar, marcam a presença no planejamento estratégico de negócios modernos e flexíveis.
            </p>
          </Texto>
          <Avatar src={img4} alt="Startups" />
        </Evento>

        <Evento>
          <Avatar src={img5} alt="Estoque" />
          <Texto>
            <h2>2025 | Lançamento do e-commerce</h2>
            <p>
              É lançada oficialmente a plataforma online da R. Amaral Office.
              O e-commerce oferece uma experiência de compra ágil e personalizada com combinações prontas de produtos para clientes B2B e B2C.
              Tudo com atendimento humano, catálogo intuitivo e design responsivo.
            </p>
          </Texto>
        </Evento>
      </Timeline>
    </Container>
  );
};

export default NossaHistoria;

// Styled Components

const Container = styled.div`
  width: 100%;
  padding: 8rem 4rem 4rem 4rem;
  box-sizing: border-box;
  background-color: white;
  font-family: 'Playfair Display', serif;
  color: black;

  @media (max-width: 768px) {
    padding: 8rem 2rem 3rem 2rem;
  }

  @media (max-width: 425px) {
    padding: 11rem 1rem 2rem 1rem;
  }
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-size: 2.5rem;
    font-weight: bold;

    @media (max-width: 425px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.2rem;
    line-height: 1.5;
    margin-top: 1rem;

    @media (max-width: 425px) {
      font-size: 1rem;
    }
  }
`;

const Timeline = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Evento = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  background-color: #fafbfb;
  border-radius: 1rem;
  padding: 1.5rem;
  border: 0.1rem solid black;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 1rem;
    gap: 1rem;
  }
`;

const Avatar = styled.img`
  flex: 1 1 300px;
  max-width: 300px;
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
  object-fit: cover;
  filter: brightness(0.80) saturate(80%) hue-rotate(150deg);

  @media (max-width: 425px) {
    max-width: 100%;
  }
`;

const Texto = styled.div`
  flex: 2 1 300px;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 1.3rem;
    }

    @media (max-width: 425px) {
      font-size: 1.2rem;
    }
  }

  p {
    font-size: 1rem;
    line-height: 1.6rem;

    @media (max-width: 768px) {
      font-size: 0.95rem;
    }

    @media (max-width: 425px) {
      font-size: 0.9rem;
    }
  }
`;
