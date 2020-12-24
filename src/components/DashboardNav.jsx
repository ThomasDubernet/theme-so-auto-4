import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import Context from '../context/Context'

export default class DashboardNav extends Component {
  constructor(props) {
    super(props)
    this.activeNav = this.activeNav.bind(this)

    this.state = {
      openNav: false
    }
  }

  static contextType = Context

  activeNav = () => {
    const burger = document.querySelector('.navbar-burger')
    burger.classList.toggle('activate')
    this.setState({openNav: true})
  }

  componentDidMount(){
    const linksNav = document.querySelectorAll('.link-d-none')
    linksNav.forEach(link => {
      link.classList.remove('activeShow')
    })
  }

  componentDidUpdate() {
    if (this.context.userType !== "student" && this.context.user.activated > 0 ) {
      const linksNav = document.querySelectorAll('.link-d-none')
      if (this.state.openNav) {
        linksNav.forEach(link => {
          link.classList.add('activeShow')
        })
      } else if(!this.state.openNav) {
        linksNav.forEach(link => {
          link.classList.remove('activeShow')
          const burger = document.querySelector('.navbar-burger')
          burger.classList.remove('activate')
        })
      }
    } else if (this.context.userType === "student") {
      const linksNav = document.querySelectorAll('.link-d-none')
      if (this.state.openNav) {
        linksNav.forEach(link => {
          link.classList.add('activeShow')
        })
      } else if(!this.state.openNav) {
        linksNav.forEach(link => {
          link.classList.remove('activeShow')
          const burger = document.querySelector('.navbar-burger')
          burger.classList.remove('activate')
        })
      }
    }
  }

  render() {

    function TeacherNav(props) {
      return (
        <React.Fragment>
          <NavLink className="App-link my-2 my-md-0 btn btn-outline-warning link-d-none activeShow" activeClassName="Active-link btn-warning" exact to="/teacher/sector" >Secteur</NavLink>

          <NavLink className="App-link my-2 my-md-0 btn btn-outline-warning link-d-none activeShow" activeClassName="Active-link btn-warning" exact to="/teacher/students" >Elèves</NavLink>        
        </React.Fragment>
      )
    }

    function StudentNav() {
      return (
        <React.Fragment>
              <NavLink className="App-link my-2 my-md-0 btn btn-outline-warning link-d-none activeShow" activeClassName="Active-link btn-warning" exact to="/student/code" >Code de la route</NavLink>
          
              <NavLink className="App-link my-2 my-md-0 btn btn-outline-warning link-d-none activeShow" activeClassName="Active-link btn-warning" exact to="/student/drive" >Conduite</NavLink>

              <a className="App-link my-2 my-md-0 btn btn-outline-warning link-d-none activeShow" href="/boutique/" >Boutique</a>
        </React.Fragment>
      )
    }

    return (
      <React.Fragment>
        <div className="my-auto mx-auto ml-md-4 mr-md-auto">
            <button className={"App-link " + (this.state.openNav ? 'bg-warning link-circle' : '')} onClick={this.state.openNav ? () => this.setState({openNav: !this.state.openNav}) : null}>
              {this.state.openNav ? '' : <NavLink className="App-link btn btn-outline-warning " activeClassName="Active-link btn-warning" exact to={`/${this.context.userType}/folder`}>Mon dossier </NavLink>}  
            </button>

            <button className={"App-link " + (this.state.openNav ? 'bg-warning link-circle' : '')} onClick={this.state.openNav ? () => this.setState({openNav: !this.state.openNav}) : null}>
              {this.state.openNav ? '' : <NavLink className="App-link btn btn-outline-warning " activeClassName="Active-link btn-warning" exact to={`/${this.context.userType}/contract`}>Mon contrat </NavLink>}
            </button>
          
        </div>

        <div className="nav-right ml-md-auto mx-auto mx-md-0 d-flex flex-column flex-md-row d-block">
          {(this.context.userType === "student") ? <StudentNav openNav={this.state.openNav} /> : <TeacherNav openNav={this.state.openNav} />}
        </div>
        <button className="navbar-burger my-auto" onClick={this.activeNav}>
          <div className="burger">
            <div className="burger-icon"></div>
          </div>
        </button>
        
        {/* <div className="nav-right ml-md-auto mx-auto mx-md-0 d-flex flex-column flex-md-row d-block">
          {this.context.userType === "student" ? <StudentNav openNav={this.state.openNav} /> : (
            this.context.user.activated > 0 ? <TeacherNav  openNav={this.state.openNav} /> : ''
          )}
        </div>
        {
          this.context.userType === "student" ?
            <button className="navbar-burger my-auto" onClick={this.activeNav}>
              <div className="burger">
                <div className="burger-icon"></div>
              </div>
            </button> 
          : (
            this.context.user.activated > 0 ? 
              <button className="navbar-burger my-auto" onClick={this.activeNav}>
                <div className="burger">
                  <div className="burger-icon"></div>
                </div>
              </button>
            : ''
            )
        } */}
        
      </React.Fragment>
    )
  }
}
