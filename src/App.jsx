import { useState } from "react";
import "./App.css";
import Counter from "./Counter";

function App() {
  const [cartItem, setCartItem] = useState([
    { name: "Item-1", quantity: 0 },
    { name: "Item-2", quantity: 0 },
    { name: "Item-3", quantity: 0 },
    { name: "Item-4", quantity: 0 },
    { name: "Item-5", quantity: 0 },
  ]);

  const removeItem = (itemName) => {
    const updatedCartItems = cartItem.filter((i) => i.name !== itemName);
    setCartItem(updatedCartItems);
  };
  return (
    <>
      <h1>Shopping cart</h1>
      {cartItem.map((item, index) => (
        <Counter key={index} item={item} removeItem={removeItem} />
      ))}
    </>
  );
}

export default App;
