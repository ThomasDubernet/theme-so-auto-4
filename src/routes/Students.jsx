import React from 'react'
import Map from '../components/Map'

import Followup from '../routes/Followup'

export default function Students() {
  return (
    <React.Fragment>
      <h2>Suivre le parcours<br />de vos élèves en un clique !</h2>
      <div className="mr-md-4 mr-xll-8">
        <Followup />
      </div>

      <h6 className="text-warning mt-5">Retrouvez vos élèves So'auto</h6>
      <p className="sm">Les élèves qui ont rendez-vous avec vous cette semaine apparaissent sur la carte.</p>

      <Map container='ApiMapboxStudents' />
    </React.Fragment>
  )
}
