import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'

export const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />

            </div>

        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>

            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(117)</p>  
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-old">
                    ${product.old_price}

                </div>
                <div className="productdisplay-lefth-new">
                    ${product.new_price}
                </div>
            </div>
            <div className="productdisplay-right-description">
                esto es una descripcion de prueba
            </div>
            <div className="productdisplay-right-size">
                <h1>select size</h1>
                <div className="productdisplay-right-size">
                    <div>s</div>
                    <div>m</div>
                    <div>l</div>
                    <div>xl</div>
                    <div>xxl</div>


                </div>
            </div>
            <button>add to cart</button>
            <p className='productdisplay-right-category'><span>category</span>women , T-shirt, crop top</p>
            <p className='productdisplay-right-category'><span>tags :</span>modern , latest</p>
           


            
        </div>



    </div>
  )
}


export default ProductDisplay;
