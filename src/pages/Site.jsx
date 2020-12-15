import React, {useState} from 'react'
import { Route } from 'react-router-dom'

import Context from '../context/Context'
import Navigation from '../components/Navigation';

import Student from '../views/Student';
import Teacher from '../views/Teacher';

export default function Site(props) {

  const setUserFormat = (userOldFormat) => {
    const userKeys = Object.keys(userOldFormat)
    const userOld = []
    const userArr = {}
    
    for(let i in userOldFormat){
      userOld.push(userOldFormat[i])
    }
    
    userKeys.forEach( (value, index) => {
      const newValue = value.replace(props.userType + '_', '')
      userArr[newValue] = userOld[index]
    })
    
    return JSON.parse(JSON.stringify(userArr))
  }

  const [user, setUser] = useState(setUserFormat(props.user))
  const [type, setType] = useState(props.userType)

  const updateUser = (oldUser) => {
    setUser(setUserFormat(oldUser))
  }

  const contextValue = {
    user,
    userType: type,
    updateUser: updateUser,
    updateUserType: setType,
    codeProducts: "test",
    driveProducts: "test"
  }

  return (
    <Context.Provider value={contextValue}>
      <Navigation userType={props.userType} />
      <Route path="/student" component={Student} />
      <Route path="/teacher" component={Teacher} />
    </Context.Provider>
  )
}
