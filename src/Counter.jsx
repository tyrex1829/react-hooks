import { useState } from "react";

function Counter({ item, removeItem }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <h2>{item.name}</h2>

        <button
          style={{ marginRight: "10px" }}
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +1
        </button>

        <span>{count}</span>

        <button
          style={{ marginLeft: "10px", marginRight: "10px" }}
          onClick={() => {
            if (count <= 0) {
              alert(`${item.name} is already 0`);
            } else {
              setCount(count - 1);
            }
          }}
        >
          -1
        </button>

        {count > 0 && (
          <button
            onClick={() => {
              removeItem(item.name);
            }}
          >
            remove
          </button>
        )}
      </div>
    </div>
  );
}

export default Counter;
