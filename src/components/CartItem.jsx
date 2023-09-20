import React from 'react';
const apiHost = import.meta.env.VITE_API_HOST;

function CartItem({ item, addToCart, removeFromCart}) {
  return (
    <div className='cart-item'>
      <div className='item-price'>
        <div>
          {item.price * item.quantity} &#8362;  :מחיר
          </div>
      </div>
      <div className='cart-item-button-name'>
        <div className='item-button'>
          <button className='button-control' onClick={() => addToCart(item)}>+</button>
          <div>{item.quantity} :יחידות</div>
          <button className='button-control' onClick={() => removeFromCart(item.id)}>-</button>
        </div>
        <div className='cart-item-name-image'>
          <h3>{item.name}</h3>
          <div className='item-imag'>
          <img src={`${apiHost}${item.image}`} width={35} alt={item.name} />
          </div>
        </div>
      </div>
      

      {/* You can add buttons to increment/decrement the quantity or remove the item */}
    </div>
  );
}

export default CartItem;