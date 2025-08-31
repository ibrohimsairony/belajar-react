import { memo, useCallback, useState } from "react";
import Button from "../../components/elements/Button";

const usersData = ["Ibrohim", "Mushab", "Sandika"];

// eslint-disable-next-line react/display-name
const Search = memo(({ onChange }) => {
  console.log("search render");

  return (
    <input
      className="border"
      type="text"
      onChange={(e) => onChange(e.target.value)}
    />
  );
});

export default function UseCallbackPage() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState(usersData);

  const suffle = () => {
    users.sort(() => Math.random() - 0.5);
    setUsers([...users]);
  };

  const handleSearch = useCallback((txt) => {
    const filteredUser = usersData.filter((user) =>
      user.toLowerCase().includes(txt)
    );
    setUsers(filteredUser);
  }, []);
  return (
    <div className="p-5">
      <h4 className="font-bold text-2xl">Count : {count}</h4>
      <Button onClick={() => setCount(count + 1)} classname={"bg-sky-400 mt-3"}>
        +
      </Button>
      <hr className="my-10" />
      <Search onChange={handleSearch} />
      <ul className="mt-5">
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
      <Button onClick={suffle} classname={"bg-sky-400 mt-3"}>
        Acak
      </Button>
    </div>
  );
}
