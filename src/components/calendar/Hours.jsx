import React, {useContext} from 'react'
import { useForm } from 'react-hook-form'

import Context from '../../context/Context'

function Form(props) {
  const { register, handleSubmit} = useForm()

  /* eslint-disable no-unused-vars */
  const context = useContext(Context)
/* eslint-enable no-unused-vars */

async function postBookings(datasJson) {
  await fetch(`${window.location.origin}/wp-json/so-auto/v1/bookings`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(datasJson),
    redirect: 'follow'
  })
}

  const onSubmit = (datas) => {

    let newDatas = []

    for(var item in datas) {
      if(datas[item] === 'true') {
        newDatas.push(item)
      }
    }

    newDatas.forEach( data => {
      const datasJson = {
        "date_available": props.day + " " + data,
        "teacher_id": context.user.id,
        "teacher_name": context.user.firstname + " " + context.user.lastname,
        "teacher_number": context.user.number,
        "boite": "manuelle"
      }
      postBookings(datasJson)
    })

    props.hide()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        {
          props.hours.map((hour, index)=> (
            <div key={index} className="col-4 my-2">
              <div className="d-flex align-items-center">
                <p className="mb-0 mr-auto sm"> {hour} </p>
                <input className="ml-auto" type="checkbox" name={hour} value={true} ref={register} />
              </div>
            </div>
          ))
        }
      </div>
      <div className="mt-3 mx-auto">
        <button type="submit" className="btn btn-sm btn-outline-dark sub">Valider</button>
      </div>
    </form>
  )
}


export default class Hours extends React.Component {
  constructor(props) {
    super(props)

    this.selectedCheckbox = new Set()
  
    this.state = {
      hours: [],
      active: props.active,
      isChecked: false
    }
  }

  componentDidMount() {
    const hours = []
    new Array(24).fill().forEach((acc, index)=> {
      if(index > 5 && index < 23)
      hours.push(this.props.day.clone().add(index, 'hour').format('k:mm'))
    })
    this.setState({hours: hours})
  }

  hide = () => this.setState({active: false})

  render() {
    return (
      <React.Fragment>
        { this.state.active ?

          <div className="hours">
            <div className="d-flex align-items-center mx-1 mb-3">
              <h6 className="mb-0 mx-auto">{this.props.day.format('DD MMM')}</h6>
              <button className="btn btn-outline-dark ml-auto" onClick={this.hide}>X</button>
            </div>
            
            <Form day={this.props.day.format('YYYY-MM-DD')} hide={this.hide} hours={this.state.hours}/>
          </div>
        : ''
        }
      </React.Fragment>
    )
  }
}