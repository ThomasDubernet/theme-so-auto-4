import React, {useContext} from 'react'
import { useForm } from 'react-hook-form'
import Context from '../../context/Context';

export default function AdressForm() {
  
  const context = useContext(Context)

  const onSubmit = (data) => {
    var requestOptions = {
      method: 'PUT',
      body: JSON.stringify(data),
      redirect: 'follow'
    };
    
      fetch(`${window.location.origin}/wp-json/so-auto/v1/${context.userType}s/${context.user.id}`, requestOptions)
      .then(response => response.json() )
      .then(result => context.updateUser(result[0]))
      .catch(error => console.log('error', error));
  }

  const { register, handleSubmit} = useForm()  
  function TitleGroupInput(props) {
    return (
      <React.Fragment>
      <div className="d-flex mt-5">
        <h6 className="text-warning"> {props.title} </h6>
        <button type="submit" className="btn btn-outline-white ml-auto">Enregistrer</button>
      </div>
      {typeof props.text ? <p className="sm" dangerouslySetInnerHTML={{__html: props.text}} ></p> : ''}
    </React.Fragment>
    )
  }
  const Input = ({type, label, placeholder, name, value }) => (
    <div className="form-group">
      <label className="font-weight-bold">{label}</label>
      <input className="form-control" type={type} name={name} placeholder={placeholder} defaultValue={value} ref={register} />
    </div>
  )

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TitleGroupInput title='Adresse postale' />
        <div className="row">
          <div className="col-md-4">
            <Input name={"address_number"} label="Numéro de voie" type="text" value={context.user.address_number} />
          </div>
          <div className="col-md-4">
            <Input name={"address_name"} label="Nom de la voie" type="text" value={context.user.address_name} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Input name={"address_zipcode"} label="Code postal" type="text" value={context.user.address_zipcode} />
          </div>
          <div className="col-md-4">
            <Input name={"address_city"} label="Ville" type="text" value={context.user.address_city} />
          </div>
        </div>
      </form>
    </React.Fragment>
  )
}
