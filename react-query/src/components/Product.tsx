
interface ProductProps {
  product: {
    name: string;
    category: string;
    price: number;
    inStock: boolean;
  }
}
const Product = ({ product }: ProductProps) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>In Stock: {product.inStock ? 'Yes' : 'No'}</p>
    </div>
  )
}

export default Product