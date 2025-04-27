import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


import banner from '../assets/banner.png';
import moveis from '../assets/categoria_moveis.png';
import tecnologia from '../assets/categoria_tecnologia.png';
import papelaria from '../assets/categoria_papelaria.png';
import descontoPapelaria from '../assets/descontoPapelaria.png';
import orcamentoIcon from '../assets/Compra por lotes.png';
import produtos from './ListaProdutos';
import entregaIcon from '../assets/Caminhão Entrega.png';
import devolucaoIcon from '../assets/Setas Devolução.png';
import garantiaIcon from '../assets/Seguro e garantia.png';
import atendimento from '../assets/atendimento.png';

const Home = () => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const header = document.getElementById('header');
    if (header) {
      setHeaderHeight(header.offsetHeight);
    }
  }, []);
  

  const [indiceAtual, setIndiceAtual] = useState(0)
  const proximoSlide = () => {
    setIndiceAtual((prevIndice) => (prevIndice + 3) % produtos.length)
  }
  const slideAnterior = () => {
    setIndiceAtual((prevIndice) => (prevIndice - 3 + produtos.length) % produtos.length)
  }
  const produtosVisiveis = [
    produtos[indiceAtual],
    produtos[(indiceAtual + 1) % produtos.length],
    produtos[(indiceAtual + 2) % produtos.length],
  ]


  return (
    <div className="home-wrapper">
      {/* Banner principal */}
      <Banner headerHeight={headerHeight}>
        <BannerImage src={banner} alt="Banner" />
        <BannerText>
          <h1>Reduza custos sem abrir mão da qualidade. Solicite seu orçamento com a R. Amaral Office</h1>
          <Link to="/orcamento">SOLICITE ORÇAMENTO</Link>
        </BannerText>
      </Banner>


      {/* Categorias */}
      <Categorias>
        <h2>Transforme seu ambiente de trabalho</h2>
        <p>Produtos que aliam conforto, eficiência e design</p>
        <div className="categorias-cards">
          <Link to="/produtos?categoria=Móveis" className="card">
            <img src={moveis} alt="Móveis" />
            <h3>MÓVEIS</h3>
            <p>Cadeiras; Mesas; Armários</p>
          </Link>

          <Link to="/produtos?categoria=Tecnologia" className="card">
            <img src={tecnologia} alt="Tecnologia" />
            <h3>TECNOLOGIA</h3>
            <p>Periféricos; Eletrônicos</p>
          </Link>

          <Link to="/produtos?categoria=Papelaria" className="card">
            <img src={papelaria} alt="Papelaria" />
            <h3>PAPELARIA</h3>
            <p>Papel; Escrita; Acessórios</p>
          </Link>
        </div>
      </Categorias>

      Promoção de papelaria
      <section className="desconto">
        <div className="desconto-banner">
          <img src={descontoPapelaria} alt="Desconto Papelaria" />
          <div className="desconto-texto">
            <h3>DESCONTOS DE ATÉ 20%</h3>
            <p>em produtos de papelaria</p>
            <Link to="/ofertas" className="botao-laranja">Ver ofertas</Link>
          </div>
        </div>
        <div className="placeholder-produtos">
          {/* Espaço para produtos destacados */}
          <div className="produto-placeholder" />
          <div className="produto-placeholder" />
          <div className="produto-placeholder" />
          <div className="produto-placeholder" />
        </div>
      </section>

      {/* Produtos mais procurados */}
      <section className="ProdutosMaisProcurados">
        <h2>Produtos mais procurados</h2>
        <div className="carrossel">
          {produtosVisiveis.map((produto) => (
            <div key={produto.id} className="produto">
              <img src={produto.imagem} alt={produto.nome} />
              <p>{produto.nome}</p>
              <span>{produto.preco}</span>
            </div>
          ))}
        </div>
        <div className="botoes">
          <button className="botao" onClick={slideAnterior}>←</button>
          <button className="botao" onClick={proximoSlide}>→</button>
        </div>
      </section>

      {/* Serviços */}
      <section className="servicos">
        <h2>Os Nossos SERVIÇOS</h2>
        <div className="servicos-cards">
          <div className="servico">
            <img src={orcamentoIcon} alt="Orçamento" />
            <p>Orçamento</p>
          </div>
          <div className="servico">
            <img src={entregaIcon} alt="Entrega" />
            <p>Entrega</p>
          </div>
          <div className="servico">
            <img src={devolucaoIcon} alt="Devolução" />
            <p>Devolução</p>
          </div>
          <div className="servico">
            <img src={garantiaIcon} alt="Garantia" />
            <p>Garantia</p>
          </div>
        </div>
        <div className="servicos-atendimento">
          <img src={atendimento} alt="Atendimento" />
        </div>
      </section>

      {/* Depoimentos de clientes */}
      <section className="depoimentos">
        <h2>Depoimentos de clientes</h2>
        <div className="depoimentos-cards">
          <div className="depoimento">
            <p>"A R. Amaral Office transformou completamente nosso escritório. Desde os móveis até os suprimentos, tudo foi entregue com rapidez e qualidade excepcional. Recomendo demais!"</p>
            <h4>Lucas Andrade</h4>
          </div>
          <div className="depoimento">
            <p>"O atendimento da R. Amaral é impecável, seja na loja física ou no novo e-commerce. Sempre encontro exatamente o que preciso, com praticidade e eficiência."</p>
            <h4>Fernanda Lopes</h4>
          </div>
          <div className="depoimento">
            <p>"Desde que começamos a utilizar o e-commerce da R. Amaral Office, ficou muito mais fácil manter nosso estoque atualizado. A integração entre digital e físico foi um grande diferencial."</p>
            <h4>Mariana Queiroz</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Section = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
  text-align: center;
`;

const Banner = styled.section<{ headerHeight: number }>`
  position: relative;
  width: 100%;
  height: 532px;
  margin-top: ${({ headerHeight }) => `${headerHeight}px`};
  padding: 0;
  box-shadow: inset 0px 4px 6px -4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    height: 400px;
  }

  @media (max-width: 480px) {
    height: 300px;
  }
`;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const BannerText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  padding: 1rem;
  max-width: 800px;
  width: 100%;

  h1 {
    font-size: 2.8rem;
    margin-bottom: 2rem;
    line-height: 1.3;
    word-break: break-word;
  }

  a {
    background-color: #ff6600;
    color: white;
    padding: 1rem 2rem;
    border-radius: 12px;
    font-weight: bold;
    text-decoration: none;
    display: inline-block;
    margin-top: 1rem;
    font-size: 1.2rem;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }

  @media (max-width: 768px) {
    max-width: 90%;

    h1 {
      font-size: 2rem;
    }
    a {
      font-size: 1rem;
      padding: 0.8rem 1.5rem;
    }
  }

  @media (max-width: 480px) {
    max-width: 90%;

    h1 {
      font-size: 1.7rem;
    }
    a {
      font-size: 0.9rem;
      padding: 0.7rem 1.2rem;
    }
  }
`;

const Categorias = styled(Section)`
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    color: #243436;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: #555;
  }

  .categorias-cards {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;

    .card {
      background: #f6f6f6;
      padding: 1.5rem;
      border-radius: 16px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      text-align: center;
      width: 250px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      img {
        width: 100%;
        height: auto;
        margin-bottom: 1rem;
      }

      h3 {
        margin-bottom: 0.5rem;
        font-size: 1.4rem;
        color: #243436;
      }

      p {
        font-size: 1rem;
        color: #666;
      }

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
      }
    }
  }

  @media (max-width: 768px) {
    padding: 0 1rem;

    h2 {
      font-size: 2rem;
      margin-top: 1rem;
    }

    p {
      font-size: 1rem;
    }

    .categorias-cards {
      justify-content: center;
      flex-direction: column;
      gap: 1.5rem;

      .card {
        width: 100%;
        max-width: 350px;
        margin: 0 auto;
      }
    }
  }
`;



export default Home;