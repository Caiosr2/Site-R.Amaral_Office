import { Link } from 'react-router-dom';
import './Footer.css';
import { FaShoppingCart } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
          <p>
            <strong>R. Amaral Office</strong><br />
            Empresa referência em qualidade e inovação no mercado corporativo..<br />
            Especializada em móveis, eletrônicos e suprimentos para escritórios. <br />
            Tudo o que você precisa para equipar e modernizar seu espaço de trabalho, agora também online! <br/><br />
          </p>
          <p>
            📍 Rua XXXXX - XXXX Campinas (SP)<br />
            📞 (XX) XXXXX-XXXX<br />
            📧 suporte@ramaral.com.br
          </p>
        </footer>
      );
    };
    
    export default Footer;

