import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import mouse from '../assets/mouse.png';
import cadeira from '../assets/cadeira.png';
import impressora from '../assets/impressora.png';
import moveis from '../assets/categoria_moveis.png';
import tecnologia from '../assets/categoria_tecnologia.png';
import papelaria from '../assets/categoria_papelaria.png';

const Home = () => {
  const banners = [banner1, banner2];
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
      <Banner>
        <BannerImage src={banners[currentBanner]} alt="banner" />
      </Banner>

      <SectionTitle>Produtos mais procurados</SectionTitle>
      <Carousel ref={carouselRef}>
        <CarouselItem to="/produto/1">
          <img src={mouse} alt="Mouse" />
          <p>Mouse com fio USB Logitech M90</p>
          <span>R$ 33,90</span>
        </CarouselItem>
        <CarouselItem to="/produto/2">
          <img src={cadeira} alt="Cadeira" />
          <p>Cadeira de Escritório Fortt Milano</p>
          <span>R$ 199,99</span>
        </CarouselItem>
        <CarouselItem to="/produto/3">
          <img src={impressora} alt="Impressora" />
          <p>Impressora Multifuncional Epson L5590</p>
          <span>R$ 1709,99</span>
        </CarouselItem>
      </Carousel>

      <Categories>
        <img src={moveis} alt="Móveis" />
        <img src={tecnologia} alt="Tecnologia" />
        <img src={papelaria} alt="Papelaria" />
      </Categories>

      <SectionTitle>Depoimentos de clientes</SectionTitle>
      <Testimonials>
        <Testimonial>
          <h4>Lucas Andrade</h4>
          <p>"A Amaral Office transformou nosso escritório com móveis confortáveis e modernos. Excelente experiência!"</p>
        </Testimonial>
        <Testimonial>
          <h4>Fernanda Lopes</h4>
          <p>"Produtos de alta qualidade e atendimento excelente. A entrega foi rápida e os preços são justos."</p>
        </Testimonial>
        <Testimonial>
          <h4>Mariana Queiroz</h4>
          <p>"Recomendo demais! Encontrei tudo que precisava para meu home office com ótimo custo-benefício."</p>
        </Testimonial>
      </Testimonials>
    </HomeContainer>
  );
};
const HomeContainer = styled.div`
  background-color: #f4f4f4;
  padding: 2rem 4rem;
  box-sizing: border-box;
`;

const Banner = styled.div`
  width: 100%;
  overflow: hidden;
  margin-bottom: 2rem;
`;

const BannerImage = styled.img`
  width: 100%;
  border-radius: 12px;
  object-fit: cover;
`;

const SectionTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: bold;
  margin: 2rem 0 1rem;
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
  justify-content: space-around;
  margin: 2rem 0;
  gap: 1rem;

  img {
    width: 100px;
    height: auto;
    object-fit: contain;
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

  h4 {
    margin-bottom: 0.5rem;
    color: #344A4b;
  }

  p {
    font-size: 0.95rem;
    color: #333;
  }
`;
export default Home;

