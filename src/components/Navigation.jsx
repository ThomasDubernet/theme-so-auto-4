import React from 'react'
import { NavLink } from "react-router-dom";

import MenuAccount from './MenuAccount'
import DashboardNav from './DashboardNav'

export default function Navigation() {
  return (
    <React.Fragment>
          <header className="App-header position-relative">
            <nav className="navbar navbar-expand-lg navbar-light bg-white container px-0">
            <NavLink className="App-link navbar-brand showing" activeClassName="Active-link" exact to="/"><h2>S<span className="h1 text-warning">o</span>'aut<span className="h1 text-warning">o</span></h2></NavLink>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav w-100 dashboard-nav">
                  <DashboardNav />
                </ul>
              </div>
            </nav>
              <MenuAccount />
          </header>
      </React.Fragment>
  )
}
