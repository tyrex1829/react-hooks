import axios from "axios";
import { useState, useEffect } from "react";

function useTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
      setTodos(res.data.todos);
    });
  }, []);

  return todos;
}

export default useTodos;
