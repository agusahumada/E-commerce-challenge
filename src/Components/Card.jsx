import React, {useEffect, useState} from 'react';


const Card = ({product}) => {  

  const [percentage, setPercentage] = useState(0);

  useEffect(()=>{
    getPercentage();
  },[]);
  
  const getPercentage = () => {
    const percentage = (product.price.sellingPrice / product.price.listPrice)* 100;
    return Math.round(percentage - 100)
  }
  return(
      <div className="card-product">
        { product.price.sellingPrice === product.price.listPrice? null : 
          <p className="discount">{getPercentage()}%</p>
        }
        <img src={`./Images/Products/${product.image}`} alt="" className="image-card"/>
        <div className='card-data'>
          <p className="title-card">{product.title}</p>
          { product.price.sellingPrice === product.price.listPrice? null : 
            <del className="listPrice-card">${product.price?.listPrice}</del>
          }
          <p className="sellingPrice-card">${product.price?.sellingPrice}</p>
        </div>
      </div>
  );
}  

export default Card;