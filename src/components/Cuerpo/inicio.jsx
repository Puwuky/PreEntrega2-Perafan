import React, { useState } from "react";
import imagen from "../img/imagotipo.png";

class Inicio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mostrarVista: true,
    };
  }

  cerrarVista = () => {
    this.setState({ mostrarVista: false });
  };

  render() {
    const { mostrarVista } = this.state;

    if (!mostrarVista) {
      return null; // No renderizar nada si mostrarVista es false
    }

    return (
      <div className="backcolor">
        <div className="backDato">
          <div className="BackDatoDiv">
            <div className="contenido">
              <span className="fontLetra">
                Bienvenido a YemiGamer <br />
                ¿Deseas Jugar Videojuegos?
              </span>
              <br />
              <br />
              <p className="Subtex">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                altr
                <br />
                exercitationem nam eos aliquam, illo praesentium distinctio, modi
                <br />
                molestiae numquam neque, quidem vero blanditiis cum sapiente q
                <br />
                labore quas? Quam, nostrum? Soluta molestias qui, laborum istesa
                <br />
              </p>
              <button className="boton" onClick={this.cerrarVista}>
                <strong>jugar</strong>
              </button>
            </div>
            <div className="imagenContenedor">
              <img src={imagen} alt="YemiGamer" className="tuClaseDeEstilo" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Inicio;
