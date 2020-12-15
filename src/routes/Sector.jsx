import React from 'react'
import Map from '../components/Map'

export default function Sector() {
  return (
    <React.Fragment>
      <h2>Nos élèves<br/>à portée de main !</h2>
      <div className="d-flex mt-5">
        <h6 className="text-warning">Adresse de rendez-vous</h6>
        <button className="btn btn-outline-dark ml-auto">Enregistrer</button>
      </div>
      <p className="sm">Choisir un point de rendez-vous pour vos élèves, si sou souhaitez qu'il soit différent de l'addresse de votre société.<br/>Rendez-vous sur <span className="sm font-weight-bold">aide</span> pour plus d'informations !</p>

      <div className="row">
        <div className="col-md-4">
          <div className="form-group">
            <label className="font-weight-bold">Numéro de la voie</label>
            <input className="form-control" type="text" name="rdv_number" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <label className="font-weight-bold">Nom de la voie</label>
            <input className="form-control" type="text" name="rdv_name" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <label className="font-weight-bold">ville</label>
            <input className="form-control" type="text" name="rdv_city" />
          </div>
        </div>
      </div>

      <h6 className="text-warning">Rencontrez vos futurs élèves !</h6>
      <p>Il suffit de choisir votre rayon d'intervention sur la carte.</p>
      
      
      <Map container='ApiMapboxSector' />
    </React.Fragment>
  )
}
