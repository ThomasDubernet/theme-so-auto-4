import React, { useState, useContext } from 'react'
import { Route, Redirect, NavLink } from 'react-router-dom'
import Context from '../context/Context'

import Infos from '../routes/Infos';
import Planning from '../routes/Planning';
import Folder from '../routes/Folder'
import Contract from '../routes/Contract';
import Sector from '../routes/Sector';
import Students from '../routes/Students';

export default function Teacher() {

  const context = useContext(Context)
  const [redirect] = useState(context.user.first_connect === 'true' ? true : false)

  return (
    <React.Fragment>
      {redirect ? <Redirect to={`/${context.userType}/students`} /> : <Redirect to={`/${context.userType}/planning`} />}
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-2"></div>
            <div className="col-12 col-md-10 py-6">
              <div className="mr-md-4 mr-xll-8">
                <Route exact path="/teacher/planning" component={Planning} />
                {/* <Route exact path="/teacher/help" component={Help} /> */}
                <Route exact path="/teacher/folder" component={Folder} />
                <Route exact path="/teacher/contract" component={Contract} />
                <Route exact path="/teacher/sector" component={Sector} />
                <Route path="/teacher/students" component={Students} />
                <Route path="/teacher/infos/:slug" component={Infos} />
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
                    <li className="infos my-2"><a href="tel:+33 05 46 34 15 25">+33 05 46 34 15 25</a> </li>
                    <li className="infos my-2"><a href="mailto:contact@so-auto-ecole.fr">contact@so-auto-ecole.fr</a></li>
                    <li className="infos my-2"><a href="https://goo.gl/maps/iGkhJE1iQbZm7PGb7" target="_blank" rel="noopener noreferrer"> 57 bis Av. Jean Guîton,<br />17 000 La Rochelle</a></li>
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
                  <li className="links my-3">Tarifications</li>
                  <li className="links my-3">
                    <NavLink
                    activeClassName="Active-link"
                    exact to="/infos/conditions-dutilisation"
                    >
                      CGV
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h5 className="my-4">Services</h5>
                <ul className="list-unstyled">
                  <li className="links my-3">
                    <NavLink
                      activeClassName="Active-link"
                      exact to="/teacher/infos/formez-vous-au-code-en-ligne-avec-pass-rousseau"
                     >Code de la route</NavLink>
                  </li>
                  <li className="links my-3">
                    <NavLink
                      activeClassName="Active-link"
                      exact to="/teacher/infos/apprentissage-anticipe-de-la-conduite"
                     >Conduite accompagnée</NavLink>
                  </li>
                  <li className="links my-3">
                    <NavLink
                      activeClassName="Active-link"
                      exact to="/teacher/infos/passer-son-permis-b"
                     >Permis de conduire</NavLink>
                  </li>
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
