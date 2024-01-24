import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import banner from '../img/banner.jpg';
import '../css/styles.css';
import Productos from './itemListContainer'

function Boody() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
    <div className="centrarDiv">
      <Slider {...settings} className="carousel">
        <div>
          <img src={banner} alt="" className="image" />
        </div>
        <div>
          <img src={banner} alt="" className="image" />
        </div>
        <div>
          <img src={banner} alt="" className="image" />
        </div>
      </Slider>
    </div>
    </div>
    
  );
}


export default Boody;
