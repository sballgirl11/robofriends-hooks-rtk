import React from 'react'
import store from './redux/store'
import { Provider } from 'react-redux'
import HomePage from './pages/HomePage'

function App() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  )
}

export default App
