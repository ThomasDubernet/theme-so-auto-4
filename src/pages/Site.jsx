import React, {useState, useEffect} from 'react'
import { Route } from 'react-router-dom'

import Context from '../context/Context'
import Navigation from '../components/Navigation';

import Student from '../views/Student';
import Teacher from '../views/Teacher';

export default function Site(props) {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const abortController = new AbortController()
    async function fetchProducts(){

      let responseCode = await fetch(`${window.location.origin}/wp-json/wc/v3/products?category=37&order=asc&filter[orderby]=meta_value_num&orderby=price`, {
        headers: {
          "Authorization": `Bearer ${props.token}`
        },
        signal: abortController.signal
      })
      let dataCode = await responseCode.json()

      let responseDrive = await fetch(`${window.location.origin}/wp-json/wc/v3/products?category=38&order=asc&filter[orderby]=meta_value_num&orderby=price`, {
        headers: {
          "Authorization": `Bearer ${props.token}`
        },
        signal: abortController.signal
      })
      let dataDrive = await responseDrive.json()

      let products = []
      products.codeProducts = dataCode
      products.driveProducts = dataDrive

      setProducts(products)
    }

    fetchProducts()

    return () => (
      abortController.abort()
    )
  }, [props])


  const setUserFormat = (userOldFormat) => {
    const userKeys = Object.keys(userOldFormat)
    const userOld = []
    const userArr = {}
    
    for(let i in userOldFormat){
      userOld.push(userOldFormat[i])
    }
    
    userKeys.forEach( (value, index) => {
      
      const newValue = value.replace(props.userType + '_', '')
      if(newValue === 'birthday') {
        let dateArray = userOld[index].split('-')
        dateArray = dateArray.reverse()
        userOld[index] = dateArray[0] + '/' + dateArray[1] + '/' + dateArray[2]
      }
      userArr[newValue] = userOld[index]
    })
    
    return JSON.parse(JSON.stringify(userArr))
  }

  const [user, setUser] = useState(setUserFormat(props.user))
  const [type, setType] = useState(props.userType)

  const updateUser = (oldUser) => {
    setUser(setUserFormat(oldUser))
  }

  const fetchUser = async (id) => {
    let response = await fetch(`${window.location.origin}/wp-json/so-auto/v1/students/${id}`)
    let user = await response.json()
    if(response.status >= 200 && response.status < 299) {
      updateUser(user[0])
    }
  }

  const contextValue = {
    user,
    userType: type,
    codeProducts: products.codeProducts,
    driveProducts: products.driveProducts,
    updateUser: updateUser,
    updateUserType: setType,
    fetchUser: fetchUser
  }

  return (
    <Context.Provider value={contextValue}>
      <Navigation userType={props.userType} />
      <Route path="/student" component={Student} />
      <Route path="/teacher" component={Teacher} />
    </Context.Provider>
  )
}
