import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

export default class Product extends Component {
  constructor(props) {
    super(props)
    this.product = props.product
  }

  render() {

    function NormalCard(props) {
      return (
        <React.Fragment>
            <h3 className="my-3"> {props.product.name} </h3>
            <p className="h3 text-warning w-75"> {props.product.regular_price}€</p>
            <p>10 % moins chère</p>
            <div className="d-flex">
              <button className="btn btn-outline-dark">En savoir plus</button>
              <button className="btn btn-outline-dark ml-4"><FontAwesomeIcon icon={faCaretRight} /></button>
            </div>
        </React.Fragment>
      )
    }
  
    function FullCard(props) {
      return (
        <React.Fragment>
          <div className="d-flex flex-column flex-md-row">
            <h3 className="my-3 w-50"> {props.product.name} </h3>
  
            <div className="ml-auto">
              <p className="h3 text-warning"> {props.product.regular_price}€</p>
              <p>10 % moins chère</p>
              <div className="d-flex">
                <button className="btn btn-outline-dark">En savoir plus</button>
                <button className="btn btn-outline-dark ml-4"><FontAwesomeIcon icon={faCaretRight} /></button>
              </div>
            </div>
          </div>
        </React.Fragment>
      )
    }
    return (
      <React.Fragment>
        {this.props.colfull ? <FullCard product={this.product} /> : <NormalCard product={this.product} />}
      </React.Fragment>
    )
  }
}
