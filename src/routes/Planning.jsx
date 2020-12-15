import React from 'react'
import Calendar from '../components/Calendar'

export default function Planning() {
  return (
    <React.Fragment>
      <h2>Mon planning</h2>

      <h6 className="text-warning mt-5">Mon planning semaine après semaine !</h6>
      <p className="sm">Le planning So'auto vous permet de connaître vos heures d'un simple geste sur la photo de vos élèves.<br />Il vous permet aussi de valider vos heures dès qu'elles sont effectives.</p>

      <Calendar />
    </React.Fragment>
  )
}
