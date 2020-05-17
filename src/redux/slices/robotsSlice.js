import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getRobots } from '../../api/robotApi'

export const sendRobots = createAsyncThunk(
  'robots/sendRobots',
  async thunkAPI => {
    const response = await getRobots()
    return response
  }
)

const robotsSlice = createSlice({
  name: 'robots',
  initialState: {
    robots: [],
    hasError: false,
    errorMessage: null,
    isLoaded: false
  },
  reducers: {
    setRobots: (state, { payload }) => {
      state.robots = payload
    }
  },
  extraReducers: {
    [sendRobots.fulfilled]: (state, { payload }) => {
      state.isLoaded = true
      state.robots = payload
    },
    [sendRobots.rejected]: (state, { payload }) => {
      console.log(payload)
      state.hasError = true
      state.errorMessage = 'error'
    },
    [sendRobots.pending]: state => {
      state.isLoaded = false
      state.hasError = false
    }
  }
})

const { actions, reducer } = robotsSlice
export const { setRobots } = actions
export default reducer
