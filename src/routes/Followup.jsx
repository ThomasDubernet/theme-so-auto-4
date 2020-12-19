import React from 'react'
import Learning from '../components/Learning'

export default function Followup() {
  return (
    <React.Fragment>
      <h2>Mon planning</h2>

      <h6 className="text-warning mt-5">Vos élèves So'auto</h6>
      <p className="sm">Les derniers élèves que vous avez vu en conduite s'affichent ici. Pensez à remplir leur suivi pédagogique à chaque fin de cours.<br/>Rendez-vous sur aide pour plus d'informations.</p>
      <div class="dropholder">
        <div class="dropdown">
          <p><i class="h6"></i>Pierre C.</p>
        </div>
        <ul class="learntab">
          <li><i class="h6"></i>Livret Pédagogique</li>
        </ul>
      </div>

      <Learning />
    </React.Fragment>
  )
}