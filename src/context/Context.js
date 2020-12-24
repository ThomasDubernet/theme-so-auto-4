import React from 'react'

export default React.createContext({
  user: [],
  userType: '',
  codeProducts: [],
  driveProducts: [],
  updateUser: () => {},
  updateUserType: () => {},
  fetchUser: () => {}
})