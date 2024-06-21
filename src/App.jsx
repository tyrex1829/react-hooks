import { useState, useEffect, useMemo } from "react";
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

  // todo id code
  // const [buttonId, setButtonId] = useState(1);

  // Memo
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  let count = useMemo(() => {
    console.log("render");
    let finalCount = 0;
    for (let i = 1; i <= inputValue; i++) {
      finalCount = finalCount + i;
    }
    return finalCount;
  }, [inputValue]);

  return (
    // <>
    //   <h1>Shopping cart</h1>
    //   {cartItem.map((item, index) => (
    //     <Counter key={index} item={item} removeItem={removeItem} />
    //   ))}
    // </>
    // <>
    //   {/* state hook code */}
    //   {/* <State /> */}
    //   {/* code of effect hook to render all todos not infinitely. */}
    //   {/* {effect && effect.length > 0 ? (
    //     effect.map((e) => (
    //       <Effect key={e.id} title={e.title} description={e.description} />
    //     ))
    //   ) : (
    //     <p>No data available</p>
    //   )} */}

    //   {/* todo id code */}
    //   <button
    //     onClick={() => {
    //       setButtonId(1);
    //     }}
    //   >
    //     1
    //   </button>
    //   <button
    //     onClick={() => {
    //       setButtonId(2);
    //     }}
    //   >
    //     2
    //   </button>
    //   <button
    //     onClick={() => {
    //       setButtonId(3);
    //     }}
    //   >
    //     3
    //   </button>
    //   <button
    //     onClick={() => {
    //       setButtonId(4);
    //     }}
    //   >
    //     4
    //   </button>
    //   <Todo id={buttonId} />
    // </>

    // useMemo
    <>
      <input
        type="text"
        placeholder="Find sum from 1 to n"
        required
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <h1>
        Sum from 1 to {inputValue} is {count}
      </h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter ({counter})
      </button>
    </>
  );
}

export default App;
