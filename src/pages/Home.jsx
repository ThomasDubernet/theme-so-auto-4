import React from 'react'
import { NavLink } from 'react-router-dom'
import TextIllus from '../components/TextIllus'
import Map from '../components/Map'
import Slider from '../components/Slider'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

import fille from '../img/fille.svg'
import tablet from '../img/tablet.svg'
import code from '../img/code.svg'

export default function Home(props) {
  
  // const [avisUser, setAvisUser] = useState([])
  const avisUser = [
    {
      name: "Nelly D.",
      ville: "La Rochelle",
      comment: "Parfait !",
      description: `"J'ai obtenu mon permis ! Présent pour répondre à mes questions et donner suite à mes interrogations, l'équipe était super !"`
    },
    {
      name: "Pierre C.",
      ville: "Poitiers",
      comment: "Merci !",
      description: `"J'ai obtenu mon permis ! Présent pour répondre à mes questions et donner suite à mes interrogations, l'équipe était super !"`
    },
    {
      name: "Sarah N.",
      ville: "Nantes",
      comment: "Excellent !",
      description: `"J'ai obtenu mon permis ! Présent pour répondre à mes questions et donner suite à mes interrogations, l'équipe était super !"`
    },
    {
      name: "Thomas v.",
      ville: "Bordeaux",
      comment: "Great !",
      description: `"J'ai obtenu mon permis ! Présent pour répondre à mes questions et donner suite à mes interrogations, l'équipe était super !"`
    },
    {
      name: "John N.",
      ville: "Nantes",
      comment: "Merdique !",
      description: `"J'ai obtenu mon permis ! Présent pour répondre à mes questions et donner suite à mes interrogations, l'équipe était super !"`
    }
  ]

  return (
    <React.Fragment>
      <header className="App-header position-relative">
        <nav className="navbar navbar-expand-lg navbar-light bg-white container px-0">
          
          <NavLink className="App-link navbar-brand showing" activeClassName="Active-link" exact to="/">
            <h2>S<span className="h1 text-warning">o</span>'aut<span className="h1 text-warning">o</span></h2>
          </NavLink>
          
          <button className="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <NavLink
                className="App-link btn btn-outline-warning"
                activeClassName="Active-link"
                exact to={{
                  pathname:'/log',
                  teacher: false
                }}
              >Connexion</NavLink>
            </ul>
          </div>

        </nav>        
      </header>



      <div className="container mt-4">
        <div className="d-flex">
          
          <div className="col-12 col-md-9 py-6 px-0">
            <h1>L'auto-école en ligne,<br/>plus réelle que jamais !</h1>
            <div className="row">

              <div className="col-md-4">
                <h3 className="my-3">Code<br/>de la route</h3>
                <p className="h3 text-warning">29,90 €</p>
                <p>10 % moins chère</p>
                <div className="d-flex">
                  <button className="btn btn-outline-white">En savoir plus</button>
                  <button className="btn btn-outline-white ml-4"><FontAwesomeIcon icon={faCaretRight} /></button>
                </div>
              </div>

              <div className="col-md-4 d-none d-md-block">
                <h3 className="my-3">Conduite<br/>accompagnée</h3>
                <p className="h3 text-warning">999 €</p>
                <p>Au lieu de <span className="text-line-through">1 099 €</span></p>
                <div className="d-flex">
                  <button className="btn btn-outline-white">En savoir plus</button>
                  <button className="btn btn-outline-white ml-4"> <FontAwesomeIcon icon={faCaretRight} /> </button>
                </div>
              </div>

              <div className="col-md-4 d-none d-md-block">
                <h3 className="my-3">Permis<br/>de conduire</h3>
                <p className="h3 text-warning">749 €</p>
                <p>30 % moins chère</p>
                <div className="d-flex">
                  <button className="btn btn-outline-white">En savoir plus</button>
                  <button className="btn btn-outline-white ml-4"><FontAwesomeIcon icon={faCaretRight} /></button>
                </div>
              </div>

            </div>
          </div>

          <div className="d-none d-md-block col-md-3 px-0 d-flex align-items-center justify-content-center">
            <img src={fille} alt=""/>
          </div>

        </div>
      </div>
      
      <div  className="container position-relative carousel__container mt-6">
        <Slider slides={avisUser} />
      </div>
      
      <div className="container">
        <div className="my-6 my-md-8">
          <TextIllus
            imgSrc = {tablet}
            title = "Code<br/> de la route"
            textWarning = "Réviser votre code partout en illimité grâce à notre formation en ligne."
            content = "2000 questions d'entraînements, cours, et séries thématiques à votre disposition, histoire de se préparer en toute sécurité."
            contentClasse="d-none d-md-block"
            btnPlayClasse="d-none d-md-block"
          />
        </div>
        <div className="my-6 my-md-8">
          <TextIllus
            order= "2"
            imgSrc = {code}
            title = "Permis<br/>de conduire"
            textWarning = "Apprenez à conduire selon votre planning, avec un moniteur qui accompagnera jusqu'à obtention de votre permis."
            content = "Un plan de formation et un livret pédagogique sûr-mesure, une équipe à votre écoute, pour favoriser votre résussite."
            contentClasse="d-none d-md-block"
            btnPlayClasse="d-none d-md-block"
          />
        </div>
      </div>
      <div className="percent d-flex flex-column flex-md-row justify-content-center">
        <div className="mb-5 my-md-8 mx-md-6 align-self-md-start">
          <h3>95 %<br/>de réussite au<br />Code de la route</h3>
          <p className="mt-5 d-none d-md-block">Des outils en ligne, un enseignement pédagogue et un accompagnement sans faille pour une satisfaction record !</p>
          <button className="mt-4 btn btn-outline-white d-block d-md-none">En savoir plus</button>
        </div>
        <div className="my-4 my-md-8 mx-md-6 align-self-md-end">
          <h3>75 %<br/>de réussite au<br />Permis de conduire</h3>
          <p className="mt-5 d-none d-md-block">Des outils en ligne, un enseignement pédagogue et un accompagnement sans faille pour une satisfaction record !</p>
          <button className="mt-4 btn btn-outline-white d-block d-md-none">En savoir plus</button>
        </div>
      </div>
      
      <Map container='ApiMapbox' home={true} longitude={props.gps.longitude} latitude={props.gps.latitude} />
    
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
                <li className="links my-3">Tarifications</li>
                <li className="links my-3">Infos</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5 className="my-4">Services</h5>
              <ul className="list-unstyled">
                <li className="links my-3">Code de la route</li>
                <li className="links my-3">Conduite accompagnée</li>
                <li className="links my-3">Permis de conduire</li>
                <li className="links my-3">
                  <NavLink
                    activeClassName="Active-link"
                    exact to={{
                      pathname:'/log',
                      teacher: true
                    }}
                  
                  >Devenir Moniteur</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <h5 className="my-4">Connect</h5>
              <ul className="list-unstyled">
                <li className="links my-2">Facebook</li>
                <li className="links my-2">Twitter</li>
                <li className="links my-2">Linkedin</li>
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
