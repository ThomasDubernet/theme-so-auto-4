import React, {useState} from 'react'
import {useSpring} from 'react-spring'

import SignForm from '../components/SignForm'
import ConnectForm from '../components/ConnectForm'
import verifyUsers from '../api/verifyUsers.js'

export default function Login(props) {

  const teacher = props.location.teacher
  const users = verifyUsers()
  
  const [connect, setConnect] = useState(teacher ? false : true)
  
  const propsSpring = useSpring({
    config: {
      friction: 180,
      tension: 200
    },
    to: {
      transform: 'scale(1)',
      opacity: 1
    },
    from: {
      transform: 'scale(0.5)',
      opacity: 0
    },
    delay: 600
  })

  const changeConnect = (bool) => setConnect(bool)

  return (
    <div id="login" className="d-flex justify-content-center align-items-center">
      <div className="formSignConnect p-4">
        {connect ? 
          <ConnectForm {...props} users={users} effect={propsSpring} setConnect={changeConnect} teacher={teacher} />
          :
          <SignForm {...props} users={users} effect={propsSpring} setConnect={changeConnect} teacher={teacher} />
        }
      </div>
    </div>
  )
}
