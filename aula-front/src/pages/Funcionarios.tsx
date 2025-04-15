
import { Link } from "react-router-dom";
import "../styles/Funcionarios.css";

const Funcionarios = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Área do Funcionário</h2>

        <label htmlFor="usuario">Usuário</label>
        <input
          type="text"
          id="usuario"
          placeholder="Digite seu usuário"
        />

        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          id="senha"
          placeholder="Digite sua senha"
        />

        <Link to="/uso-interno" className="btn-entrar-link">
          Entrar
        </Link>

        <button type="button" className="btn-link" onClick={() => alert("Redirecionar para recuperação de senha")}>Esqueci minha senha</button>
        <button type="button" className="btn-link" onClick={() => alert("Redirecionar para criar conta")}>Criar conta</button>
      </form>
    </div>
  );
};

export default Funcionarios;
