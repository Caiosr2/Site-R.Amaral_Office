import { Link } from 'react-router-dom';
import './Footer.css';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const handleClick = () => {
    const nomeInput = document.getElementById('nome') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;

    alert('Obrigado, ${nomeInput.value}! Entraremos em contato no email ${emailInput.value}.');

    nomeInput.value = '';
    emailInput.value = '';
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-col">
          <h3>R. Amaral Office</h3>
          <p className="footer-descricao">
            Referência em qualidade e inovação no mercado corporativo. Especializada em móveis, eletrônicos e suprimentos para escritórios. Agora também online!
          </p>
        </div>

        <div className="footer-col">
          <h4>Mapa do Site</h4>
          <ul>
            <li><Link to="/funcionarios">Funcionários</Link></li>
            <li><Link to="/nossa-historia">Nossa História</Link></li>
            <li><Link to="/produtos">Produtos</Link></li>
            <li><Link to="/servicos">Serviços</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contato</h4>
          <p><FaMapMarkerAlt /> Rua XXXXX – XXXX (UF)</p>
          <p><FaPhoneAlt /> (XX) XXXXX-XXXX</p>
          <p><FaEnvelope /> suporte@ramaral.com.br</p>
        </div>

        <div className="footer-col">
          <h4>Quer ser atendido?</h4>
          <div className="footer-form">
            <input type="text" id="nome" placeholder="Seu nome" required />
            <input type="email" id="email" placeholder="Seu email" required />
            <button onClick={handleClick}>Enviar</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;