import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'


export default class TextIllus extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          {typeof this.props.imgSrc == 'undefined' ? '' : <div className={'col-12 col-md-6 ' + (typeof this.props.order == 'undefined' ? 'order-0 ' : 'order-'+ this.props.order + ' ') + (typeof this.props.classeImg == 'undefined' ? '' : this.props.classeImg)}>
            <img src={this.props.imgSrc} alt=""/>
          </div>}
          <div className={ 'col-12 ' +  (typeof this.props.imgSrc === 'undefined' ? ' col-md-10 ' : 'col-md-6 order-1')} test="">
            <h2 className={typeof this.props.titleClasse === 'undefined' ? '' : this.props.titleClasse} dangerouslySetInnerHTML={{__html: this.props.title}}></h2>

            <h6 className={"text-warning mt-5 " + (typeof this.props.textWarningClasse == 'undefined' ? '' : this.props.textWarningClasse)} dangerouslySetInnerHTML={{__html: this.props.textWarning}}></h6>

            <p className={(typeof this.props.contentClasse == 'undefined' ? '' : this.props.contentClasse)} dangerouslySetInnerHTML={{__html: this.props.content}}></p>

            <div className="d-flex mt-4">

              <button className={'btn btn-outline-dark ' + (typeof this.props.btnClasse == 'undefined' ? '' : this.props.btnClasse)}>
                {typeof this.props.textBtn == 'undefined' ? 'En savoir plus' : this.props.textBtn}
              </button>

              { typeof this.props.secondBtn == 'undefined' ? '' :  
                <button className={(typeof this.props.secondBtnClasse == 'undefined' ? '' : this.props.secondBtnClasse)}>

                  {typeof this.props.textSecondBtn == 'undefined' ? '' : (typeof this.props.linkSecondBtn != 'undefined' ? '' : this.props.textSecondBtn)}
                  
                  {typeof this.props.linkSecondBtn == 'undefined' ? '' : <NavLink className="App-link" exact to='/test'>{this.props.textSecondBtn}</NavLink>}

                </button>
              }

              <button className={'btn btn-outline-dark ml-4 ' + (typeof this.props.btnPlayClasse == 'undefined' ? '' : this.props.btnPlayClasse)}><FontAwesomeIcon icon={faCaretRight} /></button>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
