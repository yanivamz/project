function ProductCard({ product:{_id,name,price} }) {
    return (
        <div className="product-card">
            <div className="product-id">
                id: {_id}
            </div>
            <h3>{name}</h3>
            <div className="price">
                price: {price} &#8362;
            </div>
        </div>
    );
}

export default ProductCard
