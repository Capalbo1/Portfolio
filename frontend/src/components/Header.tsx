
import '../styles/global.css'; // Estilos globais
import '../styles/variables.css';
import '../styles/header.css'; // Estilos específicos

export function Header() {
    return (
      <header className="header">
        <div className="header-container container">
          <div className="logo">Meu Portfólio</div>
          <nav>
            <ul className="nav-list">
              <li><a href="/" className="nav-link">Home</a></li>
              <li><a href="/projects" className="nav-link">Projetos</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }