import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    search: ''
  },
  reducers: {
    setSearch: (state, { payload }) => {
      state.search = payload
    }
  }
})

const { actions, reducer } = searchSlice
export const { setSearch } = actions
export default reducer
