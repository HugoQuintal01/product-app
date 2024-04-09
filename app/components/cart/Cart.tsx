const Cart = () => {
    return(
        <div className="cart-container">
            <div className="cart-container-inside">
                <div className="close-cart-div">
                    <span className="close-cart">X</span>
                </div>
                <div className="cart-item gridrowfull">
                    <div className="cart-item-image col-2">
                        <img src="#" alt="#" />
                    </div>
                    <div className="cart-item-name col-3">
                        <span>Product Name</span>
                    </div>
                    <div className="cart-item-quantity col-2">
                        <span>Quantity: 1</span>
                    </div>
                    <div className="cart-item-price col-2">
                        <span>Price</span>
                    </div>
                    <div className="remove-from-cart col-3">
                        <span>Remove item</span>
                    </div>
                </div>
                <div className="cart-item gridrowfull">
                    <div className="cart-item-image col-2">
                        <img src="#" alt="#" />
                    </div>
                    <div className="cart-item-name col-3">
                        <span>Product Name</span>
                    </div>
                    <div className="cart-item-quantity col-2">
                        <span>Quantity: 1</span>
                    </div>
                    <div className="cart-item-price col-2">
                        <span>Price</span>
                    </div>
                    <div className="remove-from-cart col-3">
                        <span>Remove item</span>
                    </div>
                </div>
                <div className="cart-item gridrowfull">
                    <div className="cart-item-image col-2">
                        <img src="#" alt="#" />
                    </div>
                    <div className="cart-item-name col-3">
                        <span>Product Name</span>
                    </div>
                    <div className="cart-item-quantity col-2">
                        <span>Quantity: 1</span>
                    </div>
                    <div className="cart-item-price col-2">
                        <span>Price</span>
                    </div>
                    <div className="remove-from-cart col-3">
                        <span>Remove item</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;