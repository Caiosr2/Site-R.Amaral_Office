import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import mouse from '../assets/mouse.png';
import cadeira_ergonomica from '../assets/cadeira_ergonomica.png';
import cadeiraeduarda  from "../assets/cadeiraeduarda.png"
import mesamadeira from "../assets/mesamadeira.png"
import cadeiracouro from "../assets/cadeiradecouro.png"
import mesaL from "../assets/MesaL.png"
import cadeirafort from "../assets/cadeiraforttmilao.png"
import impressora from '../assets/impressora.png';
import moveis from '../assets/categoria_moveis.png';
import tecnologia from '../assets/categoria_tecnologia.png';
import papelaria from '../assets/categoria_papelaria.png';
import avatar1 from '../assets/avatar1.png';
import avatar2 from '../assets/avatar2.png';
import avatar3 from '../assets/avatar3.png';


const Home = () => {
  const banners = [
    {
      image: banner1,
      link: "/orcamento",
      label: (
        <>
          Buscando economia e qualidade? <br />
          Faça já seu orçamento com a <br />
          <strong>R. Amaral Office.</strong>
        </>
      ),
      button: "Fazer orçamento"
    },
    {
      image: banner2,
      link: "/produtos",
      label: (
        <>
          <strong style={{ fontSize: "2.5rem", display: 'block' }}>Descontos de até<br />20%</strong>
          em produtos de papelaria
        </>
      ),
      button: "Ver ofertas"
    }
  ];
  
  

  const [currentBanner, setCurrentBanner] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      const carousel = carouselRef.current;
      if (carousel) {
        const maxScroll = carousel.scrollWidth - carousel.clientWidth;
        if (carousel.scrollLeft >= maxScroll - 5) {
          carousel.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carousel.scrollBy({ left: 240, behavior: 'smooth' });
        }
      }
    }, 3000);
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <HomeContainer>
    <BannerWrapper as={Link} to={banners[currentBanner].link}>
      <BannerImage src={banners[currentBanner].image} alt="banner" />
      <BannerTextBox>
        <p>{banners[currentBanner].label}</p>
        <button>{banners[currentBanner].button}</button>
      </BannerTextBox>
    </BannerWrapper>


      <SectionTitle>Produtos mais procurados</SectionTitle>
      <CarouselWrapper>
        <Carousel ref={carouselRef}>
          <CarouselItem to="/poltronaeduarda">
            <img src={cadeiraeduarda} alt="Poltrona Eduarda" />
            <p>Poltrona Eduarda Linho</p>
            <span>R$ 899,99</span>
          </CarouselItem>
          <CarouselItem to="/cadeiraergonomica">
            <img src={cadeira_ergonomica} alt="Cadeira Ergonômica" />
            <p>Cadeira de Escritório Comfy Stance Plus</p>
            <span>R$ 721,99</span>
          </CarouselItem>
          <CarouselItem to="/mesaexecutiva">
            <img src={mesamadeira} alt="Mesa Madeira" />
            <p>Mesa de Escritório Executiva 4 GV</p>
            <span>R$ 1576,99</span>
          </CarouselItem>
          <CarouselItem to="/cadeiradecouro">
            <img src={cadeiracouro} alt="Cadeira Couro" />
            <p>Cadeira de Escritório de couro</p>
            <span>R$ 599,99</span>
          </CarouselItem>
          <CarouselItem to="/mesaeml">
            <img src={mesaL} alt="Mesa em L" />
            <p>Mesa de Escritório em L Anah</p>
            <span>R$ 1597,99</span>
          </CarouselItem>
          <CarouselItem to="/cadeirafm">
            <img src={cadeirafort} alt="Cadeira Fort Milão" />
            <p>Cadeira Fortt Milão Giratória</p>
            <span>R$ 799,99</span>
          </CarouselItem>
        </Carousel>
      </CarouselWrapper>

      <SectionTitle>Categorias</SectionTitle>
      <Categories>
        <CategoryButton to="/produtos?categoria=Móveis">
          <img src={moveis} alt="Móveis" />
          <span>MÓVEIS</span>
        </CategoryButton>
        <CategoryButton to="/produtos?categoria=Tecnologia">
          <img src={tecnologia} alt="Tecnologia" />
          <span>TECNOLOGIA</span>
        </CategoryButton>
        <CategoryButton to="/produtos?categoria=Papelaria">
          <img src={papelaria} alt="Papelaria" />
          <span>PAPELARIA</span>
        </CategoryButton>
      </Categories>

      <SectionTitle>Depoimentos de clientes</SectionTitle>
      <Testimonials>
        <Testimonial>
          <div className="profile">
            <img src={avatar1} alt="Lucas Andrade" />
            <div>
              <h4>Lucas Andrade</h4>
              <Stars>★★★★★</Stars>
            </div>
          </div>
          <p>"A Amaral Office transformou nosso escritório com móveis confortáveis e modernos. Excelente experiência!"</p>
        </Testimonial>
        <Testimonial>
          <div className="profile">
            <img src={avatar2} alt="Fernanda Lopes" />
            <div>
              <h4>Fernanda Lopes</h4>
              <Stars>★★★★★</Stars>
            </div>
          </div>
          <p>"Produtos de alta qualidade e atendimento excelente. A entrega foi rápida e os preços são justos."</p>
        </Testimonial>
        <Testimonial>
          <div className="profile">
            <img src={avatar3} alt="Mariana Queiroz" />
            <div>
              <h4>Mariana Queiroz</h4>
              <Stars>★★★★★</Stars>
            </div>
          </div>
          <p>"Recomendo demais! Encontrei tudo que precisava para meu home office com ótimo custo-benefício."</p>
        </Testimonial>
      </Testimonials>
    </HomeContainer>
  );
};

const SectionTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: bold;
  margin: 2rem 0 1rem;
`;

const CarouselWrapper = styled.div`
  overflow: hidden;
`;

const Carousel = styled.div`
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  padding-bottom: 1rem;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`;

const CarouselItem = styled(Link)`
  flex: 0 0 auto;
  width: 220px;
  scroll-snap-align: start;
  background-color: #fff;
  border-radius: 0.75rem;
  padding: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }

  img {
    width: auto;
    height: 140px;
    object-fit: contain;
    margin-bottom: 1rem;
  }

  p {
    font-weight: 500;
    margin-bottom: 0.5rem;
    min-height: 3rem;
  }

  span {
    font-weight: bold;
    color: #333;
  }
`;

const Categories = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 2.5rem 0 3rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const CategoryButton = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 1rem;
  padding: 2rem 1.5rem;
  width: 280px;
  height: 280px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  text-decoration: none;
  color: inherit;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  img {
    width: 120px;
    height: auto;
    object-fit: contain;
    margin-bottom: 1rem;
  }

  span {
    font-weight: bold;
    color: #2b3f42;
    font-size: 1.2rem;
  }
`;

const Testimonials = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
`;

const Testimonial = styled.div`
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 0.75rem;
  flex: 1 1 30%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .profile {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.75rem;

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
    }

    h4 {
      margin: 0;
      color: #344A4b;
      font-size: 1rem;
    }
  }

  p {
    font-size: 0.95rem;
    color: #333;
  }
`;

const Stars = styled.div`
  font-size: 1.2rem;
  color: #FFD700;
  margin-top: 0.25rem;
`;


const HomeContainer = styled.div`
  background-color: #f4f4f4;
  padding: 0 4rem 2rem 4rem;
  box-sizing: border-box;
  @media (max-width: 768px) {
    padding: 0 1rem 2rem 1rem;
  }
`;

const BannerImage = styled.img`
  width: 100vw;
  height: auto;
  object-fit: contain;
  display: block;
`;

const BannerWrapper = styled(Link)`
  position: relative;
  width: 100vw;
  max-width: 100vw;
  margin-left: calc(-50vw + 50%);
  overflow: hidden;
  display: block;
`;

const BannerTextBox = styled.div`
  position: absolute;
  top: 50%;
  left: 55%;
  transform: translate(-50%, -50%);
  background-color: #fff8f2;
  padding: 2rem 2.5rem;
  border-radius: 2rem;
  text-align: left;
  max-width: 400px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);

  p {
    color: #243436;
    font-size: 1.7rem;
    font-weight: 700;
    line-height: 1.4;
    margin-bottom: 1.5rem;
  }

  button {
    background-color: #F54900;
    color: white;
    padding: 0.85rem 1.75rem;
    font-size: 1.1rem;
    font-weight: 600;
    border: none;
    border-radius: 9999px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      filter: brightness(1.1);
    }
  }
`;


export default Home;
