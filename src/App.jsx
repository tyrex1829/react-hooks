import { useState, useEffect } from "react";
import "./App.css";
import Counter from "./Counter";
import State from "./hooks/State";
import axios from "axios";
import Effect from "./hooks/Effect";
import Todo from "./hooks/Todo";

function App() {
  // shopping cart code commented
  // const [cartItem, setCartItem] = useState([
  //   { name: "Item-1", quantity: 0 },
  //   { name: "Item-2", quantity: 0 },
  //   { name: "Item-3", quantity: 0 },
  //   { name: "Item-4", quantity: 0 },
  //   { name: "Item-5", quantity: 0 },
  // ]);

  // const removeItem = (itemName) => {
  //   const updatedCartItems = cartItem.filter((i) => i.name !== itemName);
  //   setCartItem(updatedCartItems);
  // };

  // code of effect hook to render all todos not infinitely.
  // const [effect, setEffect] = useState([]);

  // useEffect(() => {
  //   axios.get("https://sum-server.100xdevs.com/todos").then((response) => {
  //     setEffect(response.data.todos);
  //   });
  // }, []);

  return (
    // <>
    //   <h1>Shopping cart</h1>
    //   {cartItem.map((item, index) => (
    //     <Counter key={index} item={item} removeItem={removeItem} />
    //   ))}
    // </>
    <>
      {/* state hook code */}
      {/* <State /> */}
      {/* code of effect hook to render all todos not infinitely. */}
      {/* {effect && effect.length > 0 ? (
        effect.map((e) => (
          <Effect key={e.id} title={e.title} description={e.description} />
        ))
      ) : (
        <p>No data available</p>
      )} */}

      {/* todo id code */}
      <Todo id={1} />
    </>
  );
}

export default App;
