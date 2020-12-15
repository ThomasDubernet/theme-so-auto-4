import React from 'react'

export default React.createContext({
  user: [],
  userType: '',
  updateUser: () => {},
  updateUserType: () => {},
  codeProducts: [],
  driveProducts: []
})