import React, {useContext, useState, useEffect, useRef} from 'react'
import TextIllus from '../components/TextIllus'
import Cookies from 'js-cookie'
import moment from 'moment'

import Map from '../components/Map'
import Slider from '../components/Slider'
import Product from '../components/Product'
import Context from '../context/Context'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import persons from '../img/persons.svg'
import { NavLink } from 'react-router-dom'

export default function Drive() {
  const context = useContext(Context)
  const [lessons, setLessons] = useState([])

  let lessonsToCome = useRef([])
  let lessonsPassed = useRef([])

  useEffect( () => {
    const abortController = new AbortController()
    const student_id = Cookies.get("so_auto_user_id")

    async function fetchLessons() {
      let response = await fetch(`${window.location.origin}/wp-json/so-auto/v1/bookings?student_id=${student_id}`, {
        meth: 'GET',
        signal: abortController.signal,
        redirect: 'follow'
      })
      let data = await response.json()
      setLessons(data)
    }
    fetchLessons()
    
    return () => {
      abortController.abort()
    }
  }, [])

useEffect(() => {

  lessons.forEach(lesson => {
    if(moment(lesson.date_available).isBefore(moment())) {
      lessonsPassed.current.push(lesson)
    } else if (moment(lesson.date_available).isAfter(moment()) || moment(lesson.date_available).isSame(moment())) {
      lessonsToCome.current.push(lesson)
    }
  })
}, [lessons])

  const avisUsers = [
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

  async function deleteBooking(id) {
    const resetStudent = {
      student_address: "",
      student_city: "",
      student_id: "",
      student_name: ""
    }
    let response = await fetch(`${window.location.origin}/wp-json/so-auto/v1/bookings/${id}`, {
      method: "PUT",
      body: JSON.stringify(resetStudent)
    })
    let data = await response.json()
    console.log(data);
  }

  return (
    <React.Fragment>
      {context.user.first_connect === "true" ?
        <React.Fragment>
          <div className="container mb-6 position-relative">
            <TextIllus
              title = "En route, l’examen au permis<br/>de conduire vous attends !"
              textWarningClasse="w-md-75"
              textWarning = "Apprenez à conduire selon votre planning ! Rencontrez votre moniteur dès aujourd’hui, Il vous accompagnera jusqu’à la réussite !"
              content = "Rencontrez votre moniteur pour évaluer votre niveau et définissez ensemble un plan de formation personnalisé."
              contentClasse="d-none d-md-block w-md-75"
              textBtn="Réserve ta 1ère heure"
              btnPlayClasse="d-none"
              secondBtn= 'true'
              secondBtnClasse = 'ml-4 Btn-link'
              linkSecondBtn= 'true'
              textSecondBtn="Regarder les vidéos"
            />

            <div className="img-persons-drive d-none d-md-block">
              <img src={persons} alt=""/>
            </div>

          </div>
          <div className="container mb-3">
            <TextIllus
              title = "Des offres à<br/>ne pas manquer !"
              textWarningClasse="w-md-75"
              textWarning = "Les packs conduites So’auto !"
              content = "Apprenez à conduire à votre rythme."
              contentClasse="d-none d-md-block w-md-75"
              btnClasse= "d-none"
              btnPlayClasse="d-none"
            />
          </div>
          <div className="container mb-6 px-0">
            <div className="row no-gutters">

              {
                context.driveProducts.map((item, index) => {
                  return(
                    <div key={index} className="col-12 p-2 col-md-4">
                      <div className="cardProduct p-4 ">
                        <Product product={item} colfull={false} />
                      </div>
                    </div>
                  )
                  
                })
              }

            </div>
          </div>
          <div className="container mb-3">
            <TextIllus
              title = "Un moniteur pour<br/>toute votre formation"
              textWarningClasse="w-md-75"
              textWarning = "Trouver votre moniteur So’auto !"
              content = "Il suffit de choisir un moniteur sur la carte."
              contentClasse="d-none d-md-block w-md-75"
              btnClasse= "d-none"
              btnPlayClasse="d-none"
            />
          </div>

          <div className="container mb-6">
            <Map container='ApiMapboxDrive' home="mb-6" />
          </div>

          <div className="container mb-6">
            <TextIllus
              title = "Un accompagnement<br/>sûr-mesure !"
              textWarningClasse="w-md-75"
              textWarning = "De la première heure de conduite, jusqu’à l’obtention de votre permis de conduire So’auto, vous accompagne !"
              content = "Comme chaque auto-école, nous avons un livret d’apprentissage. Mais le notre est interactif et évolutif, selon votre évolution !"
              contentClasse="d-none d-md-block w-md-75"
              textBtn= "Le livret d'apprentissage"
              btnPlayClasse="d-none"
              secondBtn= 'true'
              linkSecondBtn= 'true'
              secondBtnClasse="btn btn-outline-white ml-4 "
              textSecondBtn="Les avis de nos élèves"
            />
          </div>

          <div  className="container position-relative carousel__container">
            <Slider slides={avisUsers} />
          </div>
        </React.Fragment>
      :
        <React.Fragment>
          <h3 className="mb-4">Leçons de conduite</h3>
          <div className="d-flex flex-column flex-md-row my-3">
            <h5>Leçons à venir</h5>
            <div className="count-credits ml-md-auto">
              <p className="text-center font-weight-bold m-auto px-3 py-2">{context.user.credits ? context.user.credits : 0 } heures disponibles</p>
            </div>
          </div>
          <div className="card-lessons p-4 mb-4">
            {context.user.futurHour ? 
              <React.Fragment>
                <p>Voici la future leçons</p>
              </React.Fragment>
            :
              <React.Fragment>
                { 
                  lessonsToCome.current.length > 0 ?
                    lessonsToCome.current.map((lesson, id) => (
                      <div key={id} className="d-flex justify-content-between align-items-center my-3">
                        <p className="mb-0"> {moment(lesson.date_available).format('dddd DD MMMM')} </p>
                        <p className="mb-0">{moment(lesson.date_available).format('hh:mm')} <FontAwesomeIcon icon={faArrowRight} /> {moment(lesson.date_available).add(1, 'hours').format('hh:mm')}</p>
                        <p className="mb-0"> {lesson.teacher_id} </p>
                        <button onClick={() => deleteBooking(lesson.id)} className="btn btn-sm btn-outline-dark">X</button>
                      </div>
                    ))
                  : <p>Vous n'avez pas de leçons à venir.</p>
                }
                
                <NavLink className="App-link btn btn-warning text-white" exact to="/student/drive/bookings">Réserver une leçon</NavLink>
              </React.Fragment>
            }
          </div>
          <h5>Leçons passées [{lessonsPassed.current.length}]</h5>

          {
            lessonsPassed.current.map((lesson, index) => (
              <div key={index} className="passed-lesson my-3">
                <div className="row px-4 py-3">
                  <div className="col-5">
                    <p className="font-weight-bold"> {moment(lesson.date_available).format('dddd DD MMMM')} </p>
                  </div>
                  <div className="col-7">
                    <p className="font-weight-bold">{moment(lesson.date_available).format('hh:mm')} <FontAwesomeIcon icon={faArrowRight} /> {moment(lesson.date_available).add(1, 'hours').format('hh:mm')}</p>
                  </div>
                </div>
                <div className="row px-4 py-3 ">
                  <div className="col-5">
                    <div className="d-flex">
                      <p className="text-secondary">Jessica Millet<br/>06 47 17 78 55</p>
                    </div>
                  </div>
                  <div className="col-7">
                    <p className="text-secondary"> {lesson.message} </p>
                  </div>
                </div>
              </div>
            ))
          }
        </React.Fragment>
      }
    </React.Fragment>
  )
}