import React, { useState} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

export default function Followup(props) {

  const [users, setUsers] = useState([])

  async function fetchUserInfos(id) {
    let response = await fetch(`${window.location.origin}/wp-json/so-auto/v1/students/${id}`)
    let data = await response.json()
    const userJson = {
      "name": data[0].student_firstname + " " + data[0].student_lastname,
      "addresse": data[0].student_address_number + " " + data[0].student_address_name + " ",
      "city": data[0].student_address_zipcode + " " +  + data[0].student_address_city
    }
    
    if((users.filter(user => (user.name === userJson.name)).length === 0 )) {
      const newUsers = users.slice()
      newUsers.push(userJson)
      setUsers(newUsers)
    }
  }

  for (let index = 0; index < props.students.length; index++) {
    fetchUserInfos(props.students[index]) 
  }

  return (
    <React.Fragment>
      <h6 className="text-warning mt-5">Vos élèves So'auto</h6>
      <p className="sm">Les derniers élèves que vous avez vu en conduite s'affichent ici. Pensez à remplir leur suivi pédagogique à chaque fin de cours.<br/>Rendez-vous sur aide pour plus d'informations.</p>
      <div className="d-flex align-items-start">
        <div className="nav flex-column nav-pills mr-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">

          {
            users.map( (user, index) => (
              <a key={index} className="nav-link my-2 d-flex active" id={"v-pills-" + index +"-tab"} data-toggle="pill" href={"#v-pills-" + index} role="tab" aria-controls={"v-pills-" + index} aria-selected="true">
                <img className="circle-img my-auto mr-3" src="https://picsum.photos/id/0/48/48" alt="" />
                <div className="student my-auto">
                  <h6 className="studentname"> {user.name} </h6>
                  <p className="address"> {user.addresse}, <br /> {user.city} </p>
                </div>
                <button className="btn btn-outline-white ml-4"><FontAwesomeIcon icon={faCaretRight} /></button>
              </a>
            ))
          }

  
        </div>
        <div className="tab-content" id="v-pills-tabContent">
          
          {
            users.map( (user, index) => (
              <div className={"tab-pane my-2 fade " + (index === 0 ? 'show active' : '')} id={"v-pills-" + index} role="tabpanel" aria-labelledby={"v-pills-" + index + "-tab"}>
                <h6>Livret de {user.name} 1</h6>
              </div>
            ))
          }

        </div>
      </div>
    </React.Fragment>
  )
}


