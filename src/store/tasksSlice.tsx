import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Itask } from "../components/Input";

 export interface TasksState {
  tasks: Itask[];
}

const initialState: TasksState = {
  tasks: [],
};

type action = PayloadAction<Itask>

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: action) => {
        const newTasks = action.payload;
        state.tasks = [...state.tasks, newTasks];
    },
  },
});

export const { addTask } = tasksSlice.actions;

export default tasksSlice.reducer;