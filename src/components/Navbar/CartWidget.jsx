import { useState } from 'react';
import '../css/styles.css';
import Icon from '@mdi/react';
import { mdiCartOutline } from '@mdi/js';

const Carro = () => {
    const [numCarrito] = useState(3);
  
    return (
      <>
        <header className="bgNavbar">
          <div className="flexContainer">
            <div className="carrito">
            {numCarrito > 0 && <div className="numeroCarrito">{numCarrito}</div>}
              <Icon path={mdiCartOutline} size={1} />
            </div>
          </div>
        </header>
      </>
    );
};

export default Carro;
