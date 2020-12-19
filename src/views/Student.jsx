import React, { useState, useContext } from 'react'
import { Route, Redirect, NavLink } from 'react-router-dom'
import Context from '../context/Context'

import Livret from '../routes/Livret';
// import Help from '../routes/Help';
import Folder from '../routes/Folder'
import Contract from '../routes/Contract';
import Code from '../routes/Code';
import Drive from '../routes/Drive';
import DriveBookings from '../routes/DriveBookings';
// import Shop from '../routes/Shop';

export default function Student() {

  const context = useContext(Context)
  
  const [redirect] = useState(context.user.first_connect === 'true' ? true : false)

  return (
    <React.Fragment>
      {redirect ? <Redirect to={`/${context.userType}/drive/bookings`} /> : <Redirect to={`/${context.userType}/livret`} />}
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-2"></div>
            <div className="col-12 col-md-10 py-6">
              <div className="mr-md-4 mr-xll-8">
                <Route exact path="/student/livret" component={Livret} />
                {/* <Route exact path="/student/help" component={Help} /> */}
                <Route exact path="/student/folder" component={Folder} />
                <Route exact path="/student/contract" component={Contract} />
                <Route exact path="/student/code" component={Code} />
                <Route exact path="/student/drive" component={Drive} />
                <Route exact path="/student/drive/bookings" component={DriveBookings} />
                {/* <Route path="/student/shop" component={Shop} /> */}
              </div>
            </div>
          </div>
        </div>

        <footer className="App-footer">
          <div className="container py-6">
            <div className="row align-items-start">
              <div className="col-md-5 d-flex justify-content-md-center">
                <div className="mx-md-auto">
                  <h2>S<span className="h1 text-warning">o</span>'aut<span className="h1 text-warning">o</span></h2>
                  <ul className="list-unstyled mt-4 pt-2">
                    <li className="infos my-2">+33 05 46 34 15 25</li>
                    <li className="infos my-2">contact@so-autoecole.fr</li>
                    <li className="infos my-2">57 bis Av. Jean Guîton,<br />17 000 La Rochelle</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2">
                <h5 className="my-4">Sitemap</h5>
                <ul className="list-unstyled">
                  <li className="links my-3">Home</li>
                  <li className="links my-3">A propos</li>
                  <li className="links my-3">Services</li>
                  <li className="links my-3">Carrières</li>
                  <li className="links my-2">Tarifications</li>
                  <li className="links my-3">
                    <NavLink
                      activeClassName="Active-link"
                      exact to={"/infos-test"}
                     >Infos</NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h5 className="my-4">Services</h5>
                <ul className="list-unstyled">
                  <li className="links my-3">Code de la route</li>
                  <li className="links my-3">Conduite accompagnée</li>
                  <li className="links my-3">Permis de conduire</li>
                  <li className="links my-3">Devenir moniteur</li>
                </ul>
              </div>
              <div className="col-md-2">
                <h5 className="my-4">Connect</h5>
                <ul className="list-unstyled">
                  <li className="links my-3">Facebook</li>
                  <li className="links my-3">Twitter</li>
                  <li className="links my-3">Linkedin</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row bg-light">
            <p className="m-auto py-4 sm">Copyright © 2020 | So’auto | All Rights Reserved</p>
          </div>
        </footer>
      </React.Fragment>
  )
}
