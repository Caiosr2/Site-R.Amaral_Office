
import { Link } from "react-router-dom";
import "../styles/Funcionarios.css";
import predio from "../assets/predio.png"
import { FiArrowLeft } from 'react-icons/fi';

const Funcionarios = () => {
  return (
    <div className="login-wrapper">
      <div className="login-left">
        <img src={predio} alt="Insper" />
      </div>

      <div className="login-right">
  <div className="login-card">
    <Link to="/" className="back-button">
      <FiArrowLeft size={20} />
      <span>Voltar</span>
    </Link>
    <h2>Área do Funcionário </h2>
    
    <label htmlFor="usuario">Usuário</label>
    <input id="usuario" type="text" placeholder="Digite seu usuário" />

    <label htmlFor="senha">Senha</label>
    <input id="senha" type="password" placeholder="Digite sua senha" />
    <Link to="/uso-interno" className="login-submit">
      Entrar
    </Link>
    

    <a href="#" className="login-link">Esqueci minha senha</a>
    <a href="#" className="login-link">Criar conta</a>
  </div>
</div>
    </div>
  );
}


export default Funcionarios;
