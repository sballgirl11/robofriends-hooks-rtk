import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sendRobots } from '../redux/slices/robotsSlice'
import Layout from '../layout/Layout'
import SearchBox from '../components/SearchBox/SearchBox'
import Robots from '../components/Robots/Robots'
import './pageStyles.css'

const HomePage = () => {
  const dispatch = useDispatch()
  const error = useSelector(state => state.robots.hasError)
  const pending = useSelector(state => !state.robots.isLoaded)
  const search = useSelector(state => state.search.search)
  const robots = useSelector(state => state.robots.robots)
  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(search.toLowerCase())
  })
  useEffect(() => {
    dispatch(sendRobots())
  }, [dispatch])
  return (
    <Layout>
      <SearchBox />
      {pending ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Uh oh! Something went wrong.</h1>
      ) : (
        <Robots robots={filteredRobots} />
      )}
    </Layout>
  )
}

export default HomePage
