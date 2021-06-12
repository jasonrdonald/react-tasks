import { createSlice } from '@reduxjs/toolkit'

export const taskSlice = createSlice({
  name: 'task',
  initialState: {
    status: '',
    title: '',
    taskconfig: '',
    priority: ''
  },
  reducers: {
    status: (state, action) => {
      state.status += action.payload
    },
    title: (state, action) => {
      state.title += action.payload
    },
    taskconfig: (state, action) => {
      state.taskconfig += action.payload
    },
    priority: (state, action) => {
      state.priority += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { status, title, taskconfig, priority } = taskSlice.actions

export default taskSlice.reducer