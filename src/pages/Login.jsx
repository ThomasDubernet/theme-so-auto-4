import React, {useState, useEffect} from 'react'
import {useSpring} from 'react-spring'

import SignForm from '../components/SignForm'
import ConnectForm from '../components/ConnectForm'

export default function Login(props) {

  const teacher = props.location.teacher
  const [users, setUsers] = useState([])

  useEffect( () => {
    async function fetchUsers(){
      
      let responseStud = await fetch(`${window.location.origin}/wp-json/so-auto/v1/students`)
      let dataStud = await responseStud.json()

      let responseteach = await fetch(`${window.location.origin}/wp-json/so-auto/v1/teachers`)
      let dataTeach = await responseteach.json()

      let users = []
      users.students = dataStud
      users.teachers = dataTeach

      setUsers(users)
    }
    fetchUsers()
  }, [])
  
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
