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
            <div key={index} className="col-6 my-2">
              <div className="d-flex align-items-center">
                <p className="mb-0 mr-auto"> {hour} </p>
                <input className="mr-2" type="checkbox" name={hour} value={true} ref={register} />
              </div>
            </div>
          ))
        }
        <div className="col-6 m-auto">
          <button type="submit" className="btn btn-sm btn-outline-dark sub">Valider</button>
        </div>
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
      if(index > 7 && index < 19)
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
            <div className="d-flex align-items-center mx-1">
              <h6 className="mb-0">{this.props.day.format('DD MMMM')}</h6>
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