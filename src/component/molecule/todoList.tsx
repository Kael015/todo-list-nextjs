import { RootState } from "@/store";
import React from "react";
import { useSelector } from "react-redux";

function TodoList() {
  const { todos } = useSelector((state: RootState) => state.todo);

  return (
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
                  {/* <input
                    type="checkbox"
                    checked={item.completed}
                  /> */}
                </div>
              </div>
            </div>
          ))}
        </div>
  );
}

export default TodoList;