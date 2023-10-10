import { Link, useMatch, useResolvedPath } from "react-router-dom";
import logo from "./imagens/pedro_pereira_construcoes.png"
import "./header.css";

function Header(){

  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth',
    });
  }

  return (
    <nav className="nav">
      <Link className="site-title" to="/Home">
        <img className="logo" src={logo} alt="Logo"/>
      </Link>

      <ul>
        <CustomLink to="/Home">Quem Somos</CustomLink>

        <CustomLink to="/Services">Serviços</CustomLink>

        <CustomLink to="/Projects">Projetos</CustomLink>

        <li>
          <Link><a onClick={handleScroll}>Contactos</a></Link>
        </li>
      </ul>
    </nav>
  );
};

function CustomLink({to, children, ...props}){
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({path: resolvedPath.pathname, end: true})

  return(
    <li className={isActive ? "active" : ""}>
      <Link to={to}>{children}</Link>
    </li>
  )
}

export default Header;
