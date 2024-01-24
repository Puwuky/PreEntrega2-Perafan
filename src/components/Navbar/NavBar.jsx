import '../css/styles.css';
import imagotipo from '../img/imagotipo.png';
import Carrito from './CartWidget';
import inicio from "../Cuerpo/inicio"

const NavBar = () => {
  return (
    <>
      <header className="bgNavbar">
        <div className="flexContainer">
          <ul className="ordenList">
            <li>
            <a href="../Cuerpo/inicio" className="decoracion">
              <img 
              src={imagotipo} alt="Logo Gamer" className="ImgDimensions" />
              </a>
            </li>
            <li className="ElementOrder withSubMenu">
              Tienda
              <div className="subMenu">
                <div>
                  <a href="../Cuerpo/inicio" className="decoracion">inicio</a>
                </div>
                <div>
                  <a href ="#" className="decoracion">Lista de Descubrimientos</a>
                </div>
                <div>
                  <a href ="#" className="decoracion">Lista de Deseados</a>
                </div>
                <div>
                  <a href ="#" className="decoracion"> Tienda de Puntos</a>
                </div>
                <div>
                  <a href ="#" className="decoracion"> 
                    Noticias
                  </a>
                </div>
                <div>
                  <a href ="#" className="decoracion"> 
                    Estadísticas
                  </a>
                </div>
              </div>
            </li>
            <li className="ElementOrder withSubMenu">
              Comunidad
              <div className="subMenu">
                <div>
                  <a href="#" className="decoracion">Inicio</a>
                </div>
                <div>
                  <a href="#" className="decoracion">Discusiones</a>
                </div>
                <div>
                  <a href="#" className="decoracion">Workshop</a>
                </div>
                <div>
                  <a href="#" className="decoracion">Mercado</a>
                </div>
                <div>
                  <a href="#" className="decoracion">Retransmisiones</a>
                </div>
              </div>
            </li>
            <li className="ElementOrder withSubMenu">
              Acerca De
              <div className="subMenu">
                <div>
                  <a href="#" className="decoracion">Nosotros</a>
                </div>
                <div>
                  <a href="#" className="decoracion">Datos</a>
                </div>
              </div>
            </li>
            <li className="ElementOrder withSubMenu">
              Soporte
              <div className="subMenu">
                <div>
                  <a href="#" className="decoracion">Soporte técnico</a>
                </div>
                <div>
                  <a href="#" className="decoracion">Soporte</a>
                </div>
              </div>
            </li>
          </ul>
          <div>
            <Carrito/>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
