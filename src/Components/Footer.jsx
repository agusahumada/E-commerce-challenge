import Logo_1 from '../Images/facebook-icon.svg'
import Logo_2 from '../Images/twitter-icon.svg'
import Logo_3 from '../Images/youtube-icon.svg'

const Footer = () => {
  return (
    <div className="footer">
      <div className="products-list_1">
        <p className="title-list-footer">PRODUCTOS</p>
        <p>Compre junto</p>
        <p>Kit look </p>
        <p>Completá tu compra</p>
        <p> Shop the look</p>
        <p>Sin Stock</p>
      </div>
      <div className="products-list_2">
        <p className="title-list-footer">MI CUENTA</p>
        <p>Mis pedidos</p>
        <p>Whishlist</p>
        <p>Productos frecuentes</p>
        <p> Mis listas</p>
        <p>Mis recetas</p>
      </div>
      <div className="products-list_3">
        <p className="title-list-footer">CONTACTANOS</p>
        <p>Nuestras Sucursales</p>
        <p>Horarios y Teléfonos</p>
        <p>Completá tu compra</p>
      </div>
      {/* <div className="media-icons">
        <a href="#">
          <img src={Logo_1} alt="" />
        </a>
        <a href="#">
          <img src={Logo_2} alt="" />
        </a>
        <a href="#">
          <img src={Logo_3} alt="" />
        </a>
      </div> */}
    </div>
  );
};

export default Footer;
