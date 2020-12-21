import React from 'react'

export default function Followup() {

  return (
    <React.Fragment>
      <h6 className="text-warning mt-5">Vos élèves So'auto</h6>
      <p className="sm">Les derniers élèves que vous avez vu en conduite s'affichent ici. Pensez à remplir leur suivi pédagogique à chaque fin de cours.<br/>Rendez-vous sur aide pour plus d'informations.</p>
      <div class="dropholder">
        <div class="dropdown studenttab">
          <h6>Pierre C.</h6>
        </div>
        <ul class="learntab">
          <li><h6>Livret Pédagogique</h6></li>
        </ul>
      </div>

    </React.Fragment>
  )
}