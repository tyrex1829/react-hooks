import { useState } from "react";

export default function State() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        count : {count}
      </button>
    </div>
  );
}
