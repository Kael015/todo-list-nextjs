"use client";
import Button from "@/component/atom/button";
import Input from "@/component/atom/input";
import TodoForm from "@/component/molecule/todoForm";
import TodoList from "@/component/molecule/todoList";
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
  const [showForm, setShowForm] = useState(false);
  const [lastId, setLastId] = useState(0);

  const { todos, form } = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  // function onchange(e: FormEvent<HTMLInputElement>) {
  //   dispatch(setText(e.currentTarget.value));
  // }

  function handleSubmit() {
    setShowForm(false);
  }

  // const handleComplete = (id: number) => () => {
  //   // );
  //   const updatedTodos = todos.map((todo) => {
  //     if (todo.id === id) {
  //       return { ...todo, completed: !todo.completed };
  //     }
  //     return todo;
  //   })
    
  // };

  console.log(todos, form);

  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <Button
        text="Add"
        callback={() => setShowForm(!showForm)}
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 my-3 rounded"
      />
      {showForm === true ? (
        <TodoForm handleAddTodo={handleSubmit}/>
      ) : (
        <div>
          <TodoList />
        </div>
      )}
    </div>
  );
}
