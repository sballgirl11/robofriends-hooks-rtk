import { combineReducers } from '@reduxjs/toolkit'
import robotsReducer from './slices/robotsSlice'
import searchReducer from './slices/searchSlice'

export default combineReducers({
  robots: robotsReducer,
  search: searchReducer
})
