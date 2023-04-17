import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Itask } from "../components/Input";

interface TasksState {
  tasks: Itask[];
}

const initialState: TasksState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Itask>) => {
        const newTasks = action.payload;
        state.tasks = [...state.tasks, newTasks];
    },
  },
});

export const { addTask } = tasksSlice.actions;

export default tasksSlice.reducer;