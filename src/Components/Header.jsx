import Logo from '../Images/logo_fizzmod.svg';
import SearchIcon from '../Images/icone-loupe-gris.png';
import cart from '../Images/icono-carrito.png';
import { DataContext } from '../context/context';
import { useContext } from 'react';

const Header = () => {
    
    const [state] = useContext(DataContext);

     return(
         <div className='header'>
            <nav className='nav'>
                <div className="navbar">
                    <div className="container nav-container">
                        {/* menu hamburguesa */}
                        <input className="checkbox" type="checkbox" name="" id="" />
                        <div className="hamburger-lines">
                            <span className="line line1"></span>
                            <span className="line line2"></span>
                            <span className="line line3"></span>
                        </div> 
                        {/* logo  */}
                        <a href="/" className='logo'>
                            <img src={Logo} alt="" />
                        </a>
                        <div className='menu-desk-container'>
                            <div className="menu-items">
                                <li><a href="#">Ayuda</a></li>
                                <li><a href="#">Mis pedidos</a></li>
                                <li><a href="#">Mi cuenta</a></li>
                            </div>
                            <form action="" className='search'>
                                <div className='search-container'>
                                    <button className='nav-icon-search'>
                                        <img src={SearchIcon} alt="" className='search-icon'/>
                                    </button>
                                    <input type="text" placeholder='Buscar un producto...' className='input-search' />
                                </div>
                            </form>
                            <button className='btn-cart'>
                                <img src={cart} alt="" />
                                <p>MI CARRITO</p>
                            </button>
                        </div>
                    </div>
                    <form action="" className='search-mobile'>
                        <div className='search-container'>
                            <button className='nav-icon-search'>
                                <img src={SearchIcon} alt="" className='search-icon'/>
                            </button>
                            <input type="text" placeholder='Buscar un producto...' />
                        </div>
                    </form>
                <div className='menu-categories'>
                    <ul>
                        {state.categories.map((category) => (
                            <li key={category.title}><a href={category.href}>{category.title}</a></li>
                        ))}
                    </ul>
                </div>
                </div>
                <a href="#cart">
                    <img src="" alt="" />
                </a>
            </nav>
         </div>
     )
};

export default Header;