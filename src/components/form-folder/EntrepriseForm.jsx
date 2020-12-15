import React, {useContext} from 'react'
import { useForm } from 'react-hook-form'
import Context from '../../context/Context';

export default function EntrepriseForm() {
  
  const context = useContext(Context)
  
  const onSubmit = (data) => {
    var requestOptions = {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
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
        <button type="submit" className="btn btn-outline-dark ml-auto">Enregistrer</button>
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
        <TitleGroupInput title='Entreprise' text="Ces informations servirons à l’émission de vos factures. So’auto décline toute responsabilité à l’égard d’informations inexactes.<br/>Si vous êtes en micro-entreprise, vous pouvez télécharger ici le document d’enregistrement aux répertoires des entreprises de l’insee." />
        <div className="row">
          <div className="col-md-4">
            <Input name={"corporate_name"} label="Dénomation" type="text" value={context.user.corporate_name} />
          </div>
          <div className="col-md-4">
            <Input name={"createdAt"} label="Date de création" type="text" value={context.user.createdAt} />
          </div>
          <div className="col-md-4">
            <Input name={"rc_pro"} label="Attestion RC Pro" type="text" value={context.user.rc_pro} placeholder="Format pdf" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Input name={"siret"} label="Numéro de SIRET" type="text" value={context.user.siret} />
          </div>
          <div className="col-md-4">
            <Input name={"tva"} label="Numéro de TVA" type="text" value={context.user.tva} />
          </div>
          <div className="col-md-4">
            <Input name={"insee"} label="Certificat insee" type="text" value={context.user.insee} placeholder="Format pdf" />
          </div>
        </div>
      </form>
    </React.Fragment>
  )
}
