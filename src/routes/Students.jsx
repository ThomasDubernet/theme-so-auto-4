import React from 'react'
import Map from '../components/Map'

export default function Students() {
  return (
    <React.Fragment>
      <h2>Suivre le parcours<br />de vos élèves en un clique !</h2>
      <h6 className="text-warning mt-5">Vos élèves So'auto</h6>
      <p className="sm">Les derniers élèves que vous avez vu en conduite s'affichent ici. Pensez à remplir leur suivi pédagogique à chaque fin de cours.<br/>Rendez-vous sur aide pour plus d'informations.</p>

      <h6 className="text-warning mt-5">Retrouvez vos élèves So'auto</h6>
      <p className="sm">Les élèves qui ont rendez-vous avec vous cette semaine apparaissent sur la carte.</p>

      <Map container='ApiMapboxStudents' />
    </React.Fragment>
  )
}
