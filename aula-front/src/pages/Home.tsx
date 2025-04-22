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
import avatar1 from '../assets/avatar1.png';
import avatar2 from '../assets/avatar2.png';
import avatar3 from '../assets/avatar3.png';

const Home = () => {
  const banners =  [
    { image: banner1, link: "/orcamento" },
    { image: banner2, link: "/produtos" }
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
      <BannerImage
        src={banners[currentBanner].image}
        alt="banner"
        className={`banner-${currentBanner}`}
      />
    </BannerWrapper>

      <SectionTitle>Produtos mais procurados</SectionTitle>
      <CarouselWrapper>
        <Carousel ref={carouselRef}>
          <CarouselItem to="/produto1">
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
          <CarouselItem to="/produto/4">
            <img src={moveis} alt="Mesa Escritório" />
            <p>Mesa Escritório Compacta</p>
            <span>R$ 299,90</span>
          </CarouselItem>
          <CarouselItem to="/produto/5">
            <img src={tecnologia} alt="Notebook" />
            <p>Notebook Dell Inspiron</p>
            <span>R$ 3199,00</span>
          </CarouselItem>
          <CarouselItem to="/produto/6">
            <img src={papelaria} alt="Caneta" />
            <p>Kit Canetas Esferográficas</p>
            <span>R$ 19,90</span>
          </CarouselItem>
        </Carousel>
      </CarouselWrapper>

      <SectionTitle>Categorias</SectionTitle>
      <Categories>
        <CategoryButton to="/moveis">
          <img src={moveis} alt="Móveis" />
          <span>MÓVEIS</span>
        </CategoryButton>
        <CategoryButton to="/tecnologia">
          <img src={tecnologia} alt="Tecnologia" />
          <span>TECNOLOGIA</span>
        </CategoryButton>
        <CategoryButton to="/papelaria">
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
color: #FFD700; /* cor dourada para estrelas */
margin-top: 0.25rem;
`;

export default Home;