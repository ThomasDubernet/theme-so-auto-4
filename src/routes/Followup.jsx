import React from 'react'

import btnArrow from '../img/btnArrow.svg'

export default function Followup() {

  return (
    <React.Fragment>
      <h6 className="text-warning mt-5">Vos élèves So'auto</h6>
      <p className="sm">Les derniers élèves que vous avez vu en conduite s'affichent ici. Pensez à remplir leur suivi pédagogique à chaque fin de cours.<br/>Rendez-vous sur aide pour plus d'informations.</p>
      <div className="d-flex align-items-start">
        <div className="nav flex-column nav-pills mr-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <a className="nav-link my-2 d-flex active" id="v-pills-first-tab" data-bs-toggle="pill" href="#v-pills-first" role="tab" aria-controls="v-pills-first" aria-selected="true">
            <img className="circle-img my-auto mr-3" src="https://picsum.photos/id/0/48/48" alt="" />
            <div className="student my-auto">
              <h6 className="studentname">Pierre C.</h6>
              <p className="address">10 Av. du Président Wilson,<br />17 000 La Rochelle</p>
            </div>
            <button className="btn btn-outline-white ml-4"><img src={btnArrow} alt=""/></button>
          </a>
          <a className="nav-link my-2 d-flex" id="v-pills-second-tab" data-bs-toggle="pill" href="#v-pills-second" role="tab" aria-controls="v-pills-second" aria-selected="false">
            <img className="circle-img my-auto mr-3" src="https://picsum.photos/id/0/48/48" alt="" />
            <div className="student my-auto">
              <h6 className="studentname">Pierre C.</h6>
              <p className="address">10 Av. du Président Wilson,<br />17 000 La Rochelle</p>
            </div>
            <button className="btn btn-outline-white ml-4"><img src={btnArrow} alt=""/></button>
          </a>
          <a className="nav-link my-2 d-flex" id="v-pills-third-tab" data-bs-toggle="pill" href="#v-pills-third" role="tab" aria-controls="v-pills-third" aria-selected="false">
            <img className="circle-img my-auto mr-3" src="https://picsum.photos/id/0/48/48" alt="" />
            <div className="student my-auto">
              <h6 className="studentname">Pierre C.</h6>
              <p className="address">10 Av. du Président Wilson,<br />17 000 La Rochelle</p>
            </div>
            <button className="btn btn-outline-white ml-4"><img src={btnArrow} alt=""/></button>
          </a>
          <a className="nav-link my-2 d-flex" id="v-pills-fourth-tab" data-bs-toggle="pill" href="#v-pills-fourth" role="tab" aria-controls="v-pills-fourth" aria-selected="false">
            <img className="circle-img my-auto mr-3" src="https://picsum.photos/id/0/48/48" alt="" />
            <div className="student my-auto">
              <h6 className="studentname">Pierre C.</h6>
              <p className="address">10 Av. du Président Wilson,<br />17 000 La Rochelle</p>
            </div>
            <button className="btn btn-outline-white ml-4"><img src={btnArrow} alt=""/></button>
          </a>
          <a className="nav-link my-2 d-flex" id="v-pills-fifth-tab" data-bs-toggle="pill" href="#v-pills-fifth" role="tab" aria-controls="v-pills-fifth" aria-selected="false">
            <img className="circle-img my-auto mr-3" src="https://picsum.photos/id/0/48/48" alt="" />
            <div className="student my-auto">
              <h6 className="studentname">Pierre C.</h6>
              <p className="address">10 Av. du Président Wilson,<br />17 000 La Rochelle</p>
            </div>
            <img className="btn btn-outline-white ml-4" src={btnArrow} alt=""/>
          </a>
        </div>
        <div className="tab-content" id="v-pills-tabContent">
          <div className="tab-pane my-2 fade show active" id="v-pills-first" role="tabpanel" aria-labelledby="v-pills-first-tab">
            <h6>Livret pédagogique</h6>
          </div>
          <div className="tab-pane my-2 fade" id="v-pills-second" role="tabpanel" aria-labelledby="v-pills-second-tab">
            <h6>Livret pédagogique</h6>
          </div>
          <div className="tab-pane my-2 fade" id="v-pills-third" role="tabpanel" aria-labelledby="v-pills-third-tab">
            <h6>Livret pédagogique</h6>
          </div>
          <div className="tab-pane my-2 fade" id="v-pills-fourth" role="tabpanel" aria-labelledby="v-pills-fourth-tab">
            <h6>Livret pédagogique</h6>
          </div>
          <div className="tab-pane my-2 fade" id="v-pills-fifth" role="tabpanel" aria-labelledby="v-pills-fifth-tab">
            <h6>Livret pédagogique</h6>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

