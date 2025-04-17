import React from 'react';
import '../styles/NossaHistoria.css';
import img1 from '../assets/nossa_historia_1.png';
import img2 from '../assets/nossa_historia_2.png';
import img3 from '../assets/nossa_historia_3.png';
import img4 from '../assets/nossa_historia_4.png';
import img5 from '../assets/nossa_historia_5.png';

const NossaHistoria = () => {
  return (
    <div className="historia-container">
      <header className="historia-header">
        <h1>Nossa História</h1>
        <p>
          Conheça os marcos que fizeram da
          <strong> R. Amaral Office</strong> uma referência em
          soluções corporativas.
        </p>
      </header>

      <section className="timeline">
        <div className="evento">
          <img className= "avatar-img" src={img1} alt="Fundador" />
          <div className="texto">
            <h2>2010 | Fundação</h2>
            <p>
              Ricardo Amaral fundou a R. Amaral Office em São Paulo com a missão de oferecer produtos práticos,
              duráveis e acessíveis para escritórios. Com foco inicial no móvel físico e na redefinição da entrega
              local, a marca se destacou pela prática no ciclo pedido com a qualidade dos produtos e a relação próxima com o cliente.
            </p>
          </div>
        </div>

        <div className="evento">
          <div className="texto">
            <h2>2012 | Portfólio ampliado e primeiros contratos públicos</h2>
            <p>
              Com o crescimento da demanda, a empresa expandiu seu portfólio, passando a oferecer também papelaria, itens de organização e equipamentos eletrônicos.
              Nesse período, conquistou seus primeiros contratos com instituições públicas, reforçando sua credibilidade no fornecimento B2B.
            </p>
          </div>
          <img className= "avatar-img" src={img2} alt="Portfólio" />
        </div>

        <div className="evento">
          <img className= "avatar-img" src={img3} alt="Loja Física" />
          <div className="texto">
            <h2>2020 | Adaptação e resposta à nova realidade</h2>
            <p>
              Com a chegada da pandemia e o crescimento do trabalho remoto, a empresa ampliou sua atenção para o público final (B2C).
              Começa a oferecer soluções para home office, atendendo profissionais autônomos e pequenas empresas com ergonomia e praticidade, sem abrir mão do preço justo.
            </p>
          </div>
        </div>

        <div className="evento">
          <div className="texto">
            <h2>2016 | Fortalecimento no ecossistema empresarial</h2>
            <p>
              A R. Amaral Office se torna referência no fornecimento para startups, empresas e coworkings.
              Nesse período, suas soluções modulares, com boa durabilidade e capacidade de escalar, marcam a presença no planejamento estratégico de negócios modernos e flexíveis.
            </p>
          </div>
          <img className= "avatar-img" src={img4} alt="Startups" />
        </div>

        <div className="evento">
          <img className= "avatar-img" src={img5} alt="Estoque" />
          <div className="texto">
            <h2>2024 | Lançamento do e-commerce</h2>
            <p>
              É lançada oficialmente a plataforma online da R. Amaral Office.
              O e-commerce oferece uma experiência de compra ágil e personalizada com combinações prontas de produtos para clientes B2B e B2C.
              Tudo com atendimento humano, catálogo intuitivo e design responsivo.
            </p>
          </div>
        </div>


      </section>
    </div>
  );
};

export default NossaHistoria;