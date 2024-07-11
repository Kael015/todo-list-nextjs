"use client";
import Image from "next/image";
import { useState } from "react";

type listToDo = {
  id: number;
  name: string;
  completed: boolean;
};

export default function Home() {
  const [list, setList] = useState<listToDo[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [input, setInput] = useState("");
  const [lastId, setLastId] = useState(0);

  const handleComplete = (id: number) => () => {
    setList(
      list.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={() => setShowForm(true)}>Add</button>
      {showForm === true ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setList([
              ...list,
              { id: lastId + 1,
                name: input, completed: false },
            ]);
            setInput("");
            setLastId(lastId + 1);
            setShowForm(false);
          }}
        >
          <input type="text" className="text-black" onChange={(e) => setInput(e.target.value)}/>
          <button type="submit">Add</button>
        </form>
      ) : (
        <table className="text-white">
          <tbody>
          {list.map((item) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td><input type="checkbox" checked={item.completed} onChange={handleComplete(item.id)}/></td>
            </tr>
          ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
