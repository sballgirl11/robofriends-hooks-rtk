import React from 'react'
import RobotCard from '../RobotCard/RobotCard'
import './styles.css'

const Robots = ({ robots }) => {
  // const robots = useSelector(state => state.robots.robots)

  return (
    <div className='robots'>
      {robots.map(robot => {
        return (
          <RobotCard
            key={robot.id}
            id={robot.id}
            name={robot.name}
            email={robot.email}
          />
        )
      })}
    </div>
  )
}

export default Robots
