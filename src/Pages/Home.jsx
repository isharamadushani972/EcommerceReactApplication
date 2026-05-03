import ProductItem from "../Components/ProductItem";
import { getProducts } from "../Data/products"


function Home() {

  const productList=getProducts();

  return (
    <div>
      <div>
        <h2 style={{ margin: '20px 0', color: '#333' }}>Welcome to Our Store</h2>

      </div>
      <h2 style={{ textAlign: 'left', margin: '20px 0', color: '#333' }}>Featured Products</h2>
      <div className="row">
        {productList.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Home