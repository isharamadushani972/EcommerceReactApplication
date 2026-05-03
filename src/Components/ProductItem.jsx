

function ProductItem({product}) {
    console.log("duytdei");
    return (
        <div className="col-12 col-lg-4">
            <div className="product-item">
                <div className="pi-pic">
                    <img src={product.image} alt={product.name} />
                    <div className="sale pp-sale">Sale</div>
                    <div className="icon">
                        <i className="icon_heart_alt"></i>
                    </div>
                    <ul>
                        <li className="w-icon active"><a href="#"><i className="icon_bag_alt"></i></a></li>
                        <li className="quick-view"><a href="#">+ Quick View</a></li>
                        <li className="w-icon"><a href="#"><i className="fa fa-random"></i></a></li>
                    </ul>
                </div>
                <div className="pi-text">
                    <div className="catagory-name">{product.category}</div>
                    <a href="#">
                        <h5>{product.name}</h5>
                    </a>
                    <div className="product-price">
                        ${product.price}
                        <span>${product.originalPrice}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem