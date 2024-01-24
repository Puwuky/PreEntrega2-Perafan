import ImagenM from '../img/Minecraft.jpg';
import ImagenP from '../img/palworld.jpg';
import ImagenF from '../img/fortinaiti.jpg';
import ImagenV from '../img/valorant.jpg';


const ProductList = () => {
  const productList = [
    {
      id: 1,
      title: 'Minecraft',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident',
      price: '$10.00',
      imageUrl: ImagenM,
    },
    {
      id: 2,
      title: 'Palworld',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident',
      price: '$13.55',
      imageUrl: ImagenP,
    },
    {
      id: 3,
      title: 'Fortnite',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident',
      price: '$10.00',
      imageUrl: ImagenF,
    },
    {
      id: 4,
      title: 'Valorant',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident',
      price: '$10.00',
      imageUrl: ImagenV,
    },

  ];

  return (
    <div className="centrarDiv">
    <div className="product-list">
      <ul>
        {productList.map((product) => (
          <li key={product.id} className="product-item">
            <div className="product-image">
              <img src={product.imageUrl} alt={product.title} />
            </div>
            <div className="product-details">
              <h3 className="product-title">{product.title}</h3>
              <br/>
              <p>{product.description }</p>
            </div>
            <div className="product-price">
              <p>{product.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default ProductList;