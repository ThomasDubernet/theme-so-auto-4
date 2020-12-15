import React from 'react'
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons'
import Cookies from 'js-cookie'
import Context from '../context/Context'

export default class MenuAccount extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      openMenu: false,
      logo: ''
    }
  }
  static contextType = Context

  logoutConfirm () {
    if (window.confirm("Etes vous sur de vouloir vous déconnecter ?")) {
      Cookies.remove("so_auto_user_id")
      Cookies.remove("so_auto_user_type")
      document.location.href= window.location.origin
    } else (
      alert('ok')
    )
  }

  componentDidMount() {
    this.setState({logo: document.querySelector('.navbar-brand')})
  }
  
  componentDidUpdate(){
    this.state.logo.classList.add('ml-7','ml-xll-0')
    if (this.state.openMenu) {
      this.state.logo.classList.remove('showing')
    }
    else if(!this.state.openMenu){
      this.state.logo.classList.add('showing')
    }
  }


  render() {
    
    function MenuStudent(props){
      return (
        <React.Fragment>
          <div className="my-3">
            <p className="font-weight-bold sm"><span className="ft-bold sm">Code obtenu le
              </span>{(props.user.codeObtain ? props.user.codeObtain : 0)}</p>
            <h5>Séances de code :</h5>
            <div className="progress">
              <div className="progress-bar bg-dark" style={{width: (props.user.sessionsCode ? props.user.sessionsCode : 0) * 100 / 20 + '%'}}
                role="progressbar" aria-valuenow={(props.user.sessionsCode ? props.user.sessionsCode : 0) * 100 / 20} aria-valuemin="0"
                aria-valuemax="100"></div>
            </div>
            <div className="d-flex position-relative">
              <p className="sm">0s</p>
              <p className="sm font-weight-bold position-absolute"
                style={{left: ((props.user.sessionsCode ? props.user.sessionsCode : 0) * 100 / 20 - 1.5) + '%'}}>{(props.user.sessionsCode ? props.user.sessionsCode : 0)}s</p>
              <p className="sm ml-auto">20s</p>
            </div>
          </div>

          <div className="my-3">
            <p className="font-weight-bold sm"><span className="ft-bold sm">Prochaine heure le
              </span>{(props.user.futurHour ? props.user.futurHour : 0)}</p>
            <h5>Heure de conduites :</h5>
            <div className="progress">
              <div className="progress-bar bg-dark" style={{width: (props.user.driveHours ? props.user.driveHours : 0) * 100 / 30 + '%'}}
                role="progressbar" aria-valuenow={(props.user.driveHours ? props.user.driveHours : 0) * 100 / 30} aria-valuemin="0" aria-valuemax="100">
              </div>
            </div>
            <div className="d-flex position-relative">
              <p className="sm">0h</p>
              <p className="sm font-weight-bold position-absolute"
                style={{left: ((props.user.driveHours ? props.user.driveHours : 0) * 100 / 30 - 2.5) + '%'}}>{(props.user.driveHours ? props.user.driveHours : 0)}h</p>
              <p className="sm ml-auto">30h</p>
            </div>
          </div>

          <div className="my-3">
            <p className="font-weight-bold sm"><span className="ft-bold sm">Prochaine paiement le
              </span>{(props.user.futurPaiement ? props.user.futurPaiement : 0)}</p>
            <h5>Crédits So'auto :</h5>
            <div className="progress">
              <div className="progress-bar bg-dark" style={{width: (props.user.credits ? props.user.credits : 0) * 100 / 50 + '%'}} role="progressbar"
                aria-valuenow={(props.user.credits ? props.user.credits : 0) * 100 / 50} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="d-flex position-relative">
              <p className="sm">0crd</p>
              <p className="sm font-weight-bold position-absolute"
                style={{left: ((props.user.credits ? props.user.credits : 0) * 100 / 50 - 4) + '%'}}>{(props.user.credits ? props.user.credits : 0)}crd</p>
              <p className="sm ml-auto">50crd</p>
            </div>
          </div>
        </React.Fragment>
      )
    }

    function MenuTeacher(props){
      return (
        <React.Fragment>
          <div className="my-3">
            <p className="font-weight-bold sm"><span className="ft-bold sm">Mise à jour le 
              </span>{(props.user.miseAJour ? props.user.miseAJour : 0)}</p>
            <h5>Taux de reussites :</h5>
            <div className="progress">
              <div className="progress-bar bg-dark" style={{width: (props.user.reussite ? props.user.reussite : 0) * 100 / 100 + '%'}}
                role="progressbar" aria-valuenow={(props.user.reussite ? props.user.reussite : 0) * 100 / 100} aria-valuemin="0" aria-valuemax="100">
              </div>
            </div>
            <div className="d-flex position-relative">
              <p className="sm">0%</p>
              <p className="sm font-weight-bold position-absolute"
                style={{left: ((props.user.reussite ? props.user.reussite : 0) * 100 / 100 - 1.5) + '%'}}>{(props.user.reussite ? props.user.reussite : 0)}%</p>
              <p className="sm ml-auto">100%</p>
            </div>
          </div>

          <div className="my-3">
            <p className="font-weight-bold sm"><span className="ft-bold sm">Prochaine heure le
              </span>{(props.user.futurHour ? props.user.futurHour : 0)}</p>
            <h5>Heure de conduites :</h5>
            <div className="progress">
              <div className="progress-bar bg-dark" style={{width: (props.user.driveHours ? props.user.driveHours : 0) * 100 / 300 + '%'}}
                role="progressbar" aria-valuenow={(props.user.driveHours ? props.user.driveHours : 0) * 100 / 300} aria-valuemin="0" aria-valuemax="100">
              </div>
            </div>
            <div className="d-flex position-relative">
              <p className="sm">0h</p>
              <p className="sm font-weight-bold position-absolute"
                style={{left: ((props.user.driveHours ? props.user.driveHours : 0) * 100 / 300 - 2.5) + '%'}}>{(props.user.driveHours ? props.user.driveHours : 0)}h</p>
              <p className="sm ml-auto">300h</p>
            </div>
          </div>

          <div className="my-3">
            <p className="font-weight-bold sm"><span className="ft-bold sm">Prochaine paiement le
              </span>{(props.user.futurPaiement ? props.user.futurPaiement : 0)}</p>
            <h5>Solde So'auto :</h5>
            <div className="progress">
              <div className="progress-bar bg-dark" style={{width: (props.user.solde ? props.user.solde : 0) * 100 / 500 + '%'}} role="progressbar"
                aria-valuenow={(props.user.solde ? props.user.solde : 0) * 100 / 500} aria-valuemin="0" aria-valuemax="100">
              </div>
            </div>
            <div className="d-flex position-relative">
              <p className="sm">0crd</p>
              <p className="sm font-weight-bold position-absolute"
                style={{left: ((props.user.solde ? props.user.solde : 0) * 100 / 500 - 4) + '%'}}>{(props.user.solde ? this.context.user.solde : 0)}crd</p>
              <p className="sm ml-auto">500crd</p>
            </div>
          </div>
        </React.Fragment>
      )
    }

    let menu
    if(this.state.openMenu) {
      if (this.context.userType === "student") {
        menu = <MenuStudent user={this.context.user} />
          
      } else {
        menu = <MenuTeacher user={this.context.user} />
      }
    }

    return(
      <React.Fragment>
          <div className={"Menu-account fixed-top my-auto my-md-0 pt-4 pb-4 " + (this.state.openMenu ? '' : 'radius-top')}  >
            <div className="container d-flex flex-column">
              <div className={"my-3 " + (this.state.openMenu ? 'd-flex ' : 'd-none d-md-flex flex-md-column') }>
                <NavLink className={"App-link navbar-brand " + (this.state.openMenu ? '' : 'd-none') } activeClassName="Active-link" exact to="/">
                  <h5>S<span className="h5 text-warning">o</span>'aut<span className="h5 text-warning">o</span></h5>
                </NavLink>
                <button className={"btn btn-outline-dark " + (this.state.openMenu ? 'ml-auto mr-2' : 'mx-auto mb-3') }><FontAwesomeIcon icon={faShoppingCart} /></button>
                <button className={"btn btn-outline-dark " + (this.state.openMenu ? ' mx-2' : 'mx-auto mb-3 order-first') } onClick={this.logoutConfirm}><FontAwesomeIcon icon={faTimes} /></button>
              </div>

              <div>
                <div className={(this.state.openMenu ? 'mx-2 my-4 d-flex' : 'd-none d-md-flex flex-md-column') }>
                  <img className={"circle-img "  + (this.state.openMenu ? 'mr-4' : 'm-auto')} src="https://picsum.photos/id/0/80/80" alt="" />
                  <h3 className={(this.state.openMenu ? 'ml-4' : 'mx-auto text-center') }> {this.context.user.firstname} </h3>
                </div>

                {menu}

              </div>
              <div className={"d-md-none my-2 "  + (this.state.openMenu ? 'd-block ' : 'd-none')}>
                <div className="d-flex flex-column">
                  <button className="btn btn-outline-dark my-2 mx-4">Mon dossier</button>
                  <button className="btn btn-outline-dark my-2 mx-4">Mon contrat</button>
                </div>
              </div>

              <div className={"containerbtn "}>

                <div className={"Row-btn-desktop d-flex "  + (this.state.openMenu ? '' : 'flex-md-column')}>

                  {
                    this.context.userType === "student" ? <NavLink className={"verticalText pbtn btn btn-outline-dark " + (this.state.openMenu ? ' m-auto' : 'mx-auto my-md-2 py-md-4 px-md-2 verticalActive' )} activeClassName="Active-link btn-dark" exact to="/student/livret" >Mon livret</NavLink> : <NavLink className={"verticalText pbtn btn btn-outline-dark " + (this.state.openMenu ? ' m-auto' : 'mx-auto my-md-2 py-md-4 px-md-2 verticalActive' )} activeClassName="Active-link btn-dark" exact to="/teacher/planning" >Mon planning</NavLink>
                  }
                  
                  <NavLink className={"verticalText pbtn btn btn-outline-dark " + (this.state.openMenu ? ' m-auto' : 'mx-auto my-md-2 py-md-4 px-md-2 verticalActive' )} activeClassName="Active-link btn-dark" exact to="/teacher/help" >Aide</NavLink>
                  <button className={"btn btn-outline-dark mx-auto m-md-auto "} onClick={() => this.setState({openMenu: !this.state.openMenu})}>
                    <FontAwesomeIcon icon={faCaretRight} />
                  </button>
                
                </div>
              </div>
            </div>
          </div>
      </React.Fragment>
    )
  }
}