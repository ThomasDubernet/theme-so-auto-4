import React, { useContext } from 'react'
import TextIllus from '../components/TextIllus'
// import Product from '../components/Product'
import Context from '../context/Context'

import tablet from '../img/tablet.svg'
import rousseau from '../img/rousseau.svg'

export default function Code() {
  
  const context = useContext(Context)
  console.log(context)

  return (
    <React.Fragment>
      <div className="position-relative">
        <div className="container mb-6">
          <TextIllus
            title = "Obtenez votre code de la route pour moins de <span class='h2 text-warning'>30,00 €</span>"
            textWarningClasse="w-md-75"
            textWarning = "Réviser votre code partout en illimité grâce à notre formation en ligne."
            content = "2000 questions d'entraînements, cours, et séries thématiques à votre disposition, histoire de se préparer en toute sécurité."
            contentClasse="w-md-75"
            textBtn="Acheter un pack code"
            btnPlayClasse="d-none"
            secondBtn = 'true'
            secondBtnClasse = 'ml-4 Btn-link d-none d-md-block'
            linkSecondBtn= 'true'
            textSecondBtn="Essayer une série gratuite"
          />
        </div>

        <div className="img-tablet-code d-flex flex-column">
          <img className="mb-3" src={tablet} alt=""/>
          <img className="ml-auto" src={rousseau} alt=""/>
        </div>
        
        <div className="container mb-6">
          <TextIllus
            title = "Partenaire<br/>de Code Rousseau"
            textWarningClasse="w-md-75"
            textWarning = "So’auto est partenaire de l’acteur historique de la formation au permis."
            content = "L’éditeur de supports de formation aux différents permis de conduire nous accompagne dans la réalisation de nos contenus, afin de vous offrir la meilleure préparation possible pour obtenir votre code de la route."
            contentClasse="w-md-75"
            textBtn="Découvrez toutes nos offres"
            btnPlayClasse="d-none"
          />
        </div>
      </div>
      <div className="container mb-3">
        <TextIllus
          title = "Des offres à<br/>ne pas manquer !"
          textWarningClasse="w-md-75"
          textWarning = "Les packs codes So’auto !"
          content = "Apprenez les rouages de la route en toute sécurité."
          contentClasse="w-md-75"
          btnClasse= "d-none"
          btnPlayClasse="d-none"
        />
      </div>
      <div className="container mb-6">
        <div className="row no-gutters">
          {
            // context.codeProducts.map((item, index) => {
            //   return(
            //     <div key={index} className={"col-12 p-2 " + (index === (context.codeProducts.length - 1) ? 'col-md-12' : 'col-md-4')}>
            //       <div className="cardProduct p-4 ">
            //         <Product product={item} colfull={index === (context.codeProducts.length - 1) ? true : false} />
            //       </div>
            //     </div>
            //   )
            // })
          }

        </div>
      </div>
    </React.Fragment>
  )
}
