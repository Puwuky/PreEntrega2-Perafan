import NavBar from './components/Navbar/NavBar'; 
import Body from './components/Cuerpo/Boody';
import Productos from './components/Cuerpo/itemListContainer';
import '../src/components/css/styles.css';
import Inicio from './components/Cuerpo/inicio';

function App() {
  const estiloConFondoAzul = {
    background: '#2E3F4F', 
    minHeight: '100vh',  
  };
  
  return (
    <div>
    <Inicio/>
       <div className="backImg">
         <div>
           <NavBar/>
        </div>
        <div>
            <Body/>
        <br></br>
            <Productos/>
         </div>
    </div>
    </div>
  )
}

export default App