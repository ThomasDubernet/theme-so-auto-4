import React, {useState, useEffect, useRef} from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Cookies from 'js-cookie'
import moment from 'moment'
import localization from 'moment/locale/fr';



import Home from './pages/Home'
import Login from "./pages/Login";
import Site from "./pages/Site";

export default function App() {

  moment.updateLocale('fr', localization);
  
  const [token, setToken] = useState('')
  const [user, setUser] = useState({})
  let onConnect = useRef(false)
  let redirect = useRef(false)
  let user_type = Cookies.get("so_auto_user_type") || ''

  if (token === ''){
    fetch(`${window.location.origin}/wp-json/jwt-auth/v1/token?username=admin&password=admin`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      redirect: 'follow'
    }).then(response => response.json())
      .then(result => {
        setToken(result.token)
      })
      .catch(error => console.log('error', error));
  }

  const gpsDefault = { longitude: -1.139698, latitude: 46.158067 }
  const [gpsInfos, setGpsInfos] = useState(gpsDefault)

  if ("geolocation" in navigator) {
    if (gpsInfos === gpsDefault) {
      navigator.geolocation.getCurrentPosition(position => {
        setGpsInfos({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude
        })
      })
    }
  }

  const fetchUser = (user) => {
    onConnect.current = true
    redirect.current = true
    setUser(user)
  }


  useEffect(() => {
    const abortController = new AbortController()
    const user_id = Cookies.get("so_auto_user_id")
    const userType = Cookies.get("so_auto_user_type")
    if(user_id && userType){
      async function getUser() {
        let response = await fetch(`${window.location.origin}/wp-json/so-auto/v1/${userType}s/${user_id}`, {
          method: 'GET',
          redirect: 'follow',
          signal: abortController.signal
        })
        let data = await response.json()

        onConnect.current = true
        redirect.current = true
        setUser(data[0])
      }

      getUser()
    }

    return () => {
      abortController.abort()
    }

  }, [])

  const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
      <Route
        {...rest}
        render = {() => onConnect.current ? (
          <Component /> 
        ) : (
          <Redirect to='/log' />
        )
      } />
    )
  }

  const Routes = () => {
    return (
      <Switch>
        <Route
          exact path="/"
          component={() => <Home gps={gpsInfos} />}
        />
        <Route
          exact path="/log"
          component={(props) => <Login {...props} setUser={fetchUser} />}
        />
        <ProtectedRoute path={["/student", "/teacher"]} component={() => <Site user={user} userType={user_type} gps={gpsInfos} token={token} />} />
      </Switch>
    )
  }
  
  return (
    <div className="App">
      <Router>
        {redirect.current && <Redirect to={`/${user_type}`} />}
        <Routes />
      </Router>
    </div>
  )
}
