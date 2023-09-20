import CartItem from './CartItem';


function ShopingCart({ cartItems, addToCart, removeFromCart }) {
    console.log(cartItems);
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    return (
        <div className='shopingCart'>
            <h1>Shopping Cart</h1>
            <div className='shopingCarItem'>
                {cartItems.map(item => (
                    <CartItem key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart} />
                ))}
            </div>
            <div className='cart-total'>
                <p>{totalPrice.toFixed(2)} &#8362; :לתשלום</p>
                <p>{totalQuantity} :כמות מוצרים בסל</p>
            </div>
        </div>
    );
}


export default ShopingCart;