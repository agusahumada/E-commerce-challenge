import { useContext, useState } from 'react';
import { DataContext } from '../context/context';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from './Card';


const Home = () =>{

  const [state, setState] = useContext(DataContext);
  const [checkedFilters, setCheckedFilters] = useState([]);

  const updateFilters = (e) => {
    const activeFilters = [];
    const inputsChecked = document.querySelectorAll('.checkbox');
    inputsChecked.forEach(element => {
      if (element.checked) {
        activeFilters.push(element.value);
      }
    });
    applyFilters(activeFilters);
  }

  const applyFilters = (filters) => {
    let filteredList = [];
    if (filters.length === 0) {
      filteredList = state.products;
    }else{
      filters.forEach( element => {
        state.products.forEach( product => {
          product.attributes.forEach( attribute => {
            if (attribute.value === element) {
              filteredList.push(product);
            }
          });
        })
  
      })
    }
    setState((prevState)=>{
      return {
        ...prevState,
        filteredProducts: filteredList
      }
    }) 
  }

    return(
        <section>
            {state.slides.length === 0 ? null : 
              <Carousel
                showIndicators={false}
                showThumbs={false}
                autoPlay={true}
                infiniteLoop={true}
                showStatus={false}
                className="slides">
                {state.slides.map((slide)=>(
                  <div key={slide.imgName}>
                      <a href={slide.href}>
                        <img src={`./Images/BANNERS/${slide.imgName}`} alt=""/>
                      </a>
                  </div>
                ))}
              </Carousel>
            }
            <article className="products-checkbox">
              <div className="container-check">
                {state.filters.map((filter, index)=>(
                  <div key={index}>
                    <p className="title-check-form">{filter.title}</p>
                    <form action="" id="" className="form-checkbox">
                      {filter.values.map((value, index)=>(
                        <div key={index}>
                          <input type="checkbox" className="checkbox" id="product1" name="product1" value={value} 
                          onChange={(e)=>{updateFilters(e)}}/>
                          <label htmlFor="product1">{value}</label><br></br>
                        </div>
                      ))}
                    </form>
                  </div>
                ))}
              </div>
              {/* Products list */}
              <div className="products-container">
                  {state.products.length === 0 ? (
                      <p>No hay productos para mostrar</p>
                  ) : (
                      state.filteredProducts.map(product =>{
                          return(
                              <Card
                                  product={product}
                                  key={product.id}
                              />
                          )
                      })
                  )}
              </div>
            </article>
        </section>

    );
}

export default Home;