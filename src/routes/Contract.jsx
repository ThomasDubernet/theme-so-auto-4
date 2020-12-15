import React from 'react'
import TextIllus from '../components/TextIllus'

export default function Contract() {
  
  return (
    <React.Fragment>
      <div className="container">
        <TextIllus
          title = "Mon contrat"
          titleClasse="h3"
          textWarning = "Mon contrat de formation"
          content = "Le contrat de formation vous permet de vous présenter aux examens théorique et pratique du permis de conduire. Il vous permet également de bénéficier d’une remise à niveau si vous disposez déjà dudit permis. Vous le signerez après avoir été évalué par un de nos moniteurs."
          contentClasse="d-none d-md-block sm"
          textBtn="Télécharger le pdf"
          btnPlayClasse="d-none"
        />
      </div>
      <div className="container">
        <TextIllus
          title = ""
          textWarning = "Mes factures"
          content = "Vous n’avez encore rien acheté. Retrouvez nos offres dans la boutique !"
          contentClasse="d-none d-md-block sm"
          btnClasse= "d-none"
          btnPlayClasse="d-none"
        />
      </div>
    </React.Fragment>
  )
}
