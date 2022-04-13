import React , { useContext} from 'react'
import Product from '../../components/Product/Product';
import { CartProvider } from '../../contexts/cartContext';
import { ProductsContext } from '../../contexts/productsContext';
import './Shop.scss';
 
function Shop() {
   const { products } = useContext(ProductsContext); 
  return (
    <div className="products-container">
        { products.map( product => (<Product key={product.id} product={product} />)
        )}
    </div>
  )
}

export default Shop