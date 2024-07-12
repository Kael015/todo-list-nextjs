"use client";
import Button from "@/component/button";
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

  console.log(list)

  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <Button text="Add" callback={() => setShowForm(!showForm)} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 my-3 rounded"/>
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
          <input type="text" className="text-black mx-2" onChange={(e) => setInput(e.target.value)}/>
          <button type="submit">Add</button>
        </form>
      ) : (
        <div>
          {list.map((item) => (
            <div key={item.id} className="text-white">
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-white">
                <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
                  <p className={`mb-3 font-normal text-gray-700 dark:text-gray-400 ${item.completed ? "line-through" : ""}`}>{item.name}</p>
                  <input type="checkbox" checked={item.completed} onChange={handleComplete(item.id)}/>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
