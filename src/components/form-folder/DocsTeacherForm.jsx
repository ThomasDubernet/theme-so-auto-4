import React, {useContext} from 'react'
import { useForm } from 'react-hook-form'
import Context from '../../context/Context';

export default function DocsTeacherForm() {
  
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
        <TitleGroupInput title='Documents complémentaires' text="Ces documents nous permettent de remplir le dossier nécessaire à votre inscription en préfécture.<br/>Rendez-vous sur <span class='font-weight-bold sm'>examen</span> pour plus d’informations !" />
        <div className="row">
          <div className="col-md-4">
            <Input name={"id_card"} label="Pièce d'identité" type="text" value={context.user.id_card} placeholder="Format pdf" />
          </div>
          <div className="col-md-4">
            <Input name={"permis"} label="Permis de conduire" type="text" value={context.user.permis} placeholder="Format pdf" />
          </div>
          <div className="col-md-4">
            <Input name={"auth_work"} label="Autorisation d'enseigner" type="text" value={context.user.auth_work} placeholder="Format pdf" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Input name={"criminal_record"} label="Casier judiciaire" type="text" value={context.user.criminal_record} placeholder="Format pdf" />
          </div>
          <div className="col-md-4">
            <Input name={"statement_infos"} label="Relevé d'information" type="text" value={context.user.statement_infos} placeholder="Format pdf" />
          </div>
          <div className="col-md-4">
            <Input name={"auth_medical"} label="Autorisation médicale" type="text" value={context.user.auth_medical} placeholder="Format pdf" />
          </div>
        </div>
      </form>
    </React.Fragment>
  )
}
