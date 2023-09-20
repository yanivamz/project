import "bootstrap/dist/css/bootstrap.min.css"
import React from "react";
const apiHost = import.meta.env.VITE_API_HOST;

function ProductCard({ product: { _id, name, price ,image}, addToCart ,cartItems}) {
    const quantity = 0;
    console.log(quantity);
 
    return (
        <div className="product-card">
            <div className="product-image">
                <img src={`${apiHost}${image}`} alt={name} />
            </div>
            <div className="product-id">
                id: {_id}
            </div>
            <h3>{name}</h3>
            <div className="price">
                price: {price} &#8362;
            </div>

            <div>
                {quantity===0 ? (<button onClick={() => addToCart({ id: _id, name, price, image })} className="buy-button">
                    לרכישה
                </button>) :
                    (
                        <div>
                            <button>-</button>
                            {quantity}
                            <button>+</button>
                            <button variant="danger" size="sm">הסר</button>
                        </div>
                    )
                }

            </div>
        </div>
        
    );
    
}

export default ProductCard