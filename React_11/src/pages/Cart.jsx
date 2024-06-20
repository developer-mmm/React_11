import { useGlobalContext } from "../hooks/useGlobalContext";

function Cart() {
  const { total, products } = useGlobalContext();
  console.log(products);
  return (
    <div className="site-container">
      <ul>
        {products.length > 0 &&
          products.map((product) => {
            return (
              <li key={product.id}>
                <h3>{product.title}</h3>
              </li>
            );
          })}
      </ul>
      <button className="btn btn-primary block mb-4">Add</button>

      <button className="btn btn-secondary">Delete</button>
    </div>
  );
}

export default Cart;


