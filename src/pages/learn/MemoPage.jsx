import { memo, useState } from "react";
import Button from "../../components/elements/Button";

// eslint-disable-next-line react/display-name
const Todos = memo(({ todos }) => {
  console.log("render todos");
  return (
    <div>
      <h1 className="text-3xl font-bold">Todos</h1>
      <ol>
        {todos.map((todo, i) => (
          <li key={`${i}-${todo}`} className="list-disc">
            {todo}
          </li>
        ))}
      </ol>
    </div>
  );
});

const Counter = memo(({ count }) => {
  console.log("render counter");
  return <span className="text-3xl font-bold mx-5">{count}</span>;
});
Counter.displayName = "Counter";

export default function MemoPage() {
  const [todos, setTodos] = useState(["coding", "memasak", "mandi"]);
  const [count, setCount] = useState(0);
  return (
    <div className="mx-10">
      <Todos todos={todos} />
      <Button
        classname="text-xl  bg-slate-500"
        onClick={() => setTodos([...todos, "main"])}
      >
        Tambah Todo
      </Button>
      <br className="my-10" />
      <Button
        classname="text-xl  bg-slate-500"
        onClick={() => setCount(count + 1)}
      >
        +
      </Button>
      <Counter count={count} />
      <Button
        classname="text-xl  bg-slate-500"
        onClick={() => setCount(count - 1)}
      >
        -
      </Button>
    </div>
  );
}
