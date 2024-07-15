import { addTodo, setText } from "@/reducer/todoSlice";
import { RootState } from "@/store";
import { ITodo } from "@/type/todo";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";

const todoSchema = yup.object({
  text: yup.string().required(),
});

type Props = {
  handleAddTodo: () => void;
};

function TodoForm({ handleAddTodo }: Props) {
  const { form } = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();
  const [lastId, setLastId] = useState(0);

  const { register, handleSubmit, reset, control } = useForm({
    resolver: yupResolver(todoSchema),
    defaultValues: {
      text: "",
    }
  });

  const onSubmit = (data: any) => {
    const newTodo: ITodo = {
      id: lastId + 1,
      text: data.text,
      completed: false,
    };
    console.log(newTodo)

    dispatch(addTodo(newTodo));
    setLastId(lastId + 1);
    reset();
    handleAddTodo();
  };

  return (
    <section className="todo__form">
      <form className="flex gap-x-3" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("text")}
          type="text"
          className="border border-black py-1 rounded text-black"
        />
        <button className="bg-black text-white px-5 py-1">Submit</button>
      </form>
    </section>
  );
}

export default TodoForm;
