import React from 'react'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck} from '@fortawesome/free-solid-svg-icons'

export default function Livret() {

  const competences = [
    {
      subject: "Maîtriser le maniement du véhicule dans un trafic faible ou nul.",
      datas: [
        {
          title: "Connaître les principaux organes et commandes du véhicule, effectuer des vérifications intérieures et extérieures.",
          lvlAcquisiton: 2
        },
        {
          title: "Entrer, s’installer au poste de conduite et en sortir.",
          lvlAcquisiton: 2
        },
        {
          title: "Tenir, tourner le volant et maintenir la trajectoire.",
          lvlAcquisiton: 2
        },
        {
          title: "Démarrer et s’arrêter.",
          lvlAcquisiton: 2
        },
        {
          title: "Doser l’accélération et le freinage à diverses allures.",
          lvlAcquisiton: 2
        },
        {
          title: "Utiliser la boîte de vitesses.",
          lvlAcquisiton: 2
        },
        {
          title: "Diriger la voiture en avant en ligne droite et en courbe en adaptant allure et trajectoire.",
          lvlAcquisiton: 2
        },
        {
          title: "Regarder autour de soi et avertir.",
          lvlAcquisiton: 2
        },
        {
          title: "Effectuer une marche arrière et un demi-tour en sécurité.",
          lvlAcquisiton: 2
        }
      ]
    },
    {
      subject: "Appréhender la route et circuler dans des conditions normales.",
      datas: [
        {
          title: "Rechercher la signalisation, les indices utiles et en tenir compte.",
          lvlAcquisiton: 2
        },
        {
          title: "Positionner le véhicule sur la chaussée et choisir la voie de circulation.",
          lvlAcquisiton: 2
        },
        {
          title: "Adapter l’allure aux situations.",
          lvlAcquisiton: 1
        },
        {
          title: "Tourner à droite et à gauche en agglomération.",
          lvlAcquisiton: 2
        },
        {
          title: "Détecter, identifier et franchir les intersections suivant le régime de priorité.",
          lvlAcquisiton: 1
        },
        {
          title: "Franchir les ronds-points et les carrefours à sens giratoire.",
          lvlAcquisiton: 2
        },
        {
          title: "S’arrêter et stationner en épi, en bataille et en créneau.",
          lvlAcquisiton: 2
        }
      ]
    },
    {
      subject: "Circuler dans des conditions difficiles et partager la route avec les autres usagers.",
      datas: [
        {
          title: "Evaluer et maintenir les distances de sécurité.",
          lvlAcquisiton: 1
        },
        {
          title: "Croiser, dépasser, être dépaser.",
          lvlAcquisiton: 2
        },
        {
          title: "Passer des virages et conduire en déclivité.",
          lvlAcquisiton: 2
        },
        {
          title: "Connaître les caractéristiques des autres usagers et savoir se comporter à leur égard avec respect et courtoisie.",
          lvlAcquisiton: 0
        },
        {
          title: "S’insérer, circuler et sortir d’une voie rapide.",
          lvlAcquisiton: 0
        },
        {
          title: "Conduire dans une file de véhicules et dans une circulation dense.",
          lvlAcquisiton: 2
        },
        {
          title: "Conduire quand l’adhérence et la visibilité sont réduites.",
          lvlAcquisiton: 2
        }
      ]
    },
    {
      subject: "Pratiquer une conduite autonome, sûre et économique.",
      datas: [
        {
          title: "Suivre un itinéraire de manière autonome.",
          lvlAcquisiton: 1
        },
        {
          title: "Préparer et effectuer un voyage « longue distance » en autonomie.",
          lvlAcquisiton: 1
        },
        {
          title: "Connaître les principaux facteurs de risque au volant et les recommandations à appliquer.",
          lvlAcquisiton: 1
        },
        {
          title: "Connaître les comportements à adopter en cas d’accident : protéger, alerter, secourir.",
          lvlAcquisiton: 0
        },
        {
          title: "Faire l’expérience des aides à la conduite du véhicule (régulateur, limiteur de vitesse, ABS,aides à la navigation...).",
          lvlAcquisiton: 0
        },
        {
          title: "Avoir des notions sur l’entretien, le dépannage et les situations d’urgence.",
          lvlAcquisiton: 0
        },
        {
          title: "Pratiquer l'écoconduite.",
          lvlAcquisiton: 2
        }
      ]
    },
    
  ]

  function Competence(props){

    let colorLvl = ''
    let valueLvl = 0

    switch (props.lvl) {
      case 2:
        colorLvl = '#1bd033'
        valueLvl = 100
        break;
      case 1:
        colorLvl = '#c72b2b'
         valueLvl = 60
        break;
      case 0:
        colorLvl = '#747474'
         valueLvl = 0
        break;
    
      default:
        break;
    }



    return (
      <div className="competence d-flex align-items-center justify-content-between px-4 my-2">
        <CircularProgressbarWithChildren 
          value={valueLvl}
          styles={{
            path: {
              stroke: colorLvl
            }
          }}
        >
          <FontAwesomeIcon icon={faCheck} color={colorLvl} />
        </CircularProgressbarWithChildren>
        <p className="my-4 ml-4 mr-auto">{props.title}</p>
      </div>
    )
  }

  return (
    <React.Fragment>
      <h3>Mon livret</h3>

      <h6 className="text-warning mt-5">Mon livret d'apprentissage</h6>
      <p className="sm">Ce livret vous permet de suivre pas à pas les étapes de formation, du code de la route jusqu'au permis de conduire.<br />il vous sert également de justificatif de formation routière lors d'un contrôle de police.</p>

      <div className="container_livret">
        {competences.map( (competence, i) => {
          return (
            <div className="my-4" key={i} >
              <p className="text-center text-secondary">Compétence {i+1} </p>
              <h6 className="text-center mx-5 mb-4"> {competence.subject} </h6>
              {competence.datas.map( (item, index) => {
                return (<Competence title={item.title} lvl={item.lvlAcquisiton} key={index} />)
              })}
            </div>
          )
        })}
        
      </div>
    </React.Fragment>
  )

}
