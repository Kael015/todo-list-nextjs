import { ITodo } from '@/type/todo'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface TodoState {
  todos: ITodo[]
  form: IForm
}

type IForm = {
  text: string
}

const initialState: TodoState = {
  todos: [],
  form: {
    text: ''}
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) => {
        state.todos = [...state.todos, action.payload]
    },
    setText: (state, action: PayloadAction<string>) => {
        state.form = {
            ...state.form,
            text: action.payload}
    }
  },
})

// Action creators are generated for each case reducer function
export const { addTodo, setText } = todoSlice.actions

export default todoSlice.reducer