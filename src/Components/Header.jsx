import Logo from '../Images/logo_fizzmod.svg';
import SearchIcon from '../Images/icone-loupe-gris.png';
import Cart from '../Images/cart.png';

const Header = () => {
    
     return(
         <div className='header'>
            <nav className='nav'>
                <div class="navbar">
                    <div class="container nav-container">
                        {/* carrito */}
                        <div className='cart-container'>
                            <a href="#"><img src={Cart} alt="" className='cart'/></a>
                        </div>
                        {/* menu hamburguesa */}
                        <input class="checkbox" type="checkbox" name="" id="" />
                        <div class="hamburger-lines">
                            <span class="line line1"></span>
                            <span class="line line2"></span>
                            <span class="line line3"></span>
                        </div> 
                        {/* logo  */}
                        <a href="/" className='logo'>
                            <img src={Logo} alt="" />
                        </a>
                        <div class="menu-items">
                            <li><a href="#">Ayuda</a></li>
                            <li><a href="#">Mis pedidos</a></li>
                            <li><a href="#">Mi cuenta</a></li>
                        </div>
                    </div>
                </div>
                <form action="" className='search'>
                    <input type="text" placeholder='Buscar un producto...' />
                    <button className='nav-icon-search'>
                        <img src={SearchIcon} alt="" className='search-icon'/>
                    </button>
                </form>
                <div className='menu-categories'>
                    <ul>
                        <li><a href="category">categoria</a></li>
                        <li><a href="category">categoria</a></li>
                        <li><a href="category">categoria</a></li>
                        <li><a href="category">categoria</a></li>
                        <li><a href="category">categoria</a></li>
                    </ul>
                </div>
                <a href="#cart">
                    <img src="" alt="" />
                </a>
            </nav>
         </div>
     )
};

export default Header;