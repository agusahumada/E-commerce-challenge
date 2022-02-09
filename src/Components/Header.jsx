import Logo from '../Images/logo_fizzmod.svg';
import SearchIcon from '../Images/icone-loupe-gris.png';
import cart from '../Images/icono-carrito.png';
import { DataContext } from '../context/context';
import { useState, useContext } from 'react';

const Header = () => {
    
    const [state] = useContext(DataContext);
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleToggle = () => {
        console.log(navbarOpen);
        setNavbarOpen(!navbarOpen);
        const htmlElement = document.querySelector('html');
        if (!navbarOpen) {
            console.log(htmlElement);
            htmlElement.classList.add('test');  
        }else{
            htmlElement.classList.remove('test');
        }
    }

     return(
         <div className='header-container'>
            <div className='header'>
                <div className='logo-container'>
                    <img src={Logo} alt="" />
                </div>
                <div className='menu-container'>
                    <ul>
                        <li><a href="#">Ayuda</a></li>
                        <li><a href="#">Mis pedidos</a></li>
                        <li><a href="#">Micuenta</a></li>
                    </ul>
                </div>
               {/* menu hamburger */}
               <nav className='navBar'>
                    <div className='btn-container'>
                        <input onChange={()=>{handleToggle()}} type="checkbox" id="checkbox3" className="checkbox3 visuallyHidden"/>
                        <label htmlFor="checkbox3">
                            <div className="hamburger hamburger3">
                                <span className="bar bar1"></span>
                                <span className="bar bar2"></span>
                                <span className="bar bar3"></span>
                                <span className="bar bar4"></span>
                            </div>
                        </label>
                    </div>
                </nav>
                <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                    <li><a href="#">Ayuda</a></li>
                    <li><a href="#">Mis pedidos</a></li>
                    <li><a href="#">Micuenta</a></li>
                </ul>
                <div className='search-container'>
                    <span>
                        <img src={SearchIcon} alt=""/>
                    </span>
                    <input type="text" className='input-search' placeholder='Buscar un producto...'/>
                </div>
                <div className='cart-btn-container'>
                    <button>
                        <div className='cart-logo-container'>
                            <img src={cart} alt="" />
                        </div>
                        <p>MI CARRITO</p>
                    </button>
                </div>
            </div>
            <div className='menu-categories'>
                <ul>
                    {state.categories.map((category) => (
                        <li key={category.title}><a href={category.href}>{category.title}</a></li>
                    ))}
                </ul>
            </div>
         </div>
     )
};

export default Header;