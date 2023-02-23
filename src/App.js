import "./App.css";
import Product from "./containers/Product";
import Cart from "./containers/Cart";

function App() {
  return (
    <>
      <div>
        <h1>Shopping Store</h1>
      </div>
      <div>
        <Product />
        <Cart />
      </div>
    </>
  );
}

export default App;
