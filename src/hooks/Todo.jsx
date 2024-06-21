import { useEffect, useState } from "react";
import axios from "axios";

export default function Todo({ id }) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`).then((res) => {
      setTodo(res.data.todo);
    });
  }, []);

  return (
    <>
      <h1>{Todo.title}</h1>
      <h4>{Todo.description}</h4>
    </>
  );
}
