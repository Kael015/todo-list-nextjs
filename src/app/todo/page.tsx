"use client";
import Button from "@/component/button";
import Input from "@/component/input";
import { addTodo, setText } from "@/reducer/todoSlice";
import { RootState } from "@/store";
import { ITodo } from "@/type/todo";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// type listToDo = {
//   id: number;
//   name: string;
//   completed: boolean;
// };

export default function Home() {
  // const [list, setList] = useState<listToDo[]>([]);
  const [showForm, setShowForm] = useState(false);
  // const [input, setInput] = useState("");
  const [lastId, setLastId] = useState(0);

  const { todos, form } = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  function onchange(e: FormEvent<HTMLInputElement>) {
    dispatch(setText(e.currentTarget.value));
  }

  function handleSubmit() {
    if (form.text) {
      const newTodo: ITodo = {
        id: lastId + 1,
        text: form.text,
        completed: false,
      };
      dispatch(addTodo(newTodo));
      setLastId(lastId + 1);
    }
  }

  const handleComplete = (id: number) => () => {
    // setList(
    //   list.map((item) => {
    //     if (item.id === id) {
    //       return { ...item, completed: !item.completed };
    //     }
    //     return item;
    //   })
    // );
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    })
    
  };

  console.log(todos, form);

  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <Button
        text="Add"
        callback={() => setShowForm(!showForm)}
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 my-3 rounded"
      />
      {showForm === true ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // setList([
            //   ...list,
            //   { id: lastId + 1,
            //     name: input, completed: false },
            // ]);
            // setInput("");
            // setLastId(lastId + 1);
            handleSubmit();
            setShowForm(false);
          }}
        >
          {/* <input
            type="text"
            className="text-black mx-2 border-white rounded"
            onChange={(e) => setInput(e.target.value)}
          /> */}
          <Input
            type="text"
            name="text"
            callback={onchange}
            className="text-black mx-2 py-1 px-4 my-3 rounded"
          />
          <Button
            type="submit"
            text="Submit"
            className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 my-3 rounded"
          />
        </form>
      ) : (
        <div>
          {todos.map((item) => (
            <div key={item.id} className="text-white">
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-white">
                <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
                  <p
                    className={`mb-3 font-normal text-gray-700 dark:text-gray-400 ${
                      item.completed ? "line-through" : ""
                    }`}
                  >
                    {item.text}
                  </p>
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={handleComplete(item.id)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
