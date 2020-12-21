import React, {useContext} from 'react'
import { useForm } from 'react-hook-form'
import Context from '../../context/Context';

export default function DocsTeacherForm() {
  
  const context = useContext(Context)
  
  const onSubmit = async (files) => {
    const formData = new FormData()

    for (const [key, value] of Object.entries(files)) {
      if(value.length > 0) {
        formData.append(`${key}`,value[0], value[0].name)
      }
    }

    var requestOptions = {
      method: 'POST',
      body: formData
    };
    try {
      const response = await fetch(`${window.location.origin}/wp-json/so-auto/v1/${context.userType}s?teacher_id=${context.user.id}&teacher_name=${context.user.username}&files=true`, requestOptions)
      const result = await response.json()
      // context.updateUser(result[0])
      console.log(result);
    } catch (e) {
      console.log(e);
    }
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
      <input className="form-control" type={type} name={name} placeholder={placeholder} ref={register} />
    </div>
  )

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TitleGroupInput title='Documents complémentaires' text="Ces documents nous permettent de remplir le dossier nécessaire à votre inscription en préfécture.<br/>Rendez-vous sur <span class='font-weight-bold sm'>examen</span> pour plus d’informations !" />
        <div className="row">
          <div className="col-md-4">
            <Input name={"id_card"} label="Pièce d'identité" type="file" value={context.user.id_card} placeholder="Format pdf" />
          </div>
          <div className="col-md-4">
            <Input name={"permis"} label="Permis de conduire" type="file" value={context.user.permis} placeholder="Format pdf" />
          </div>
          <div className="col-md-4">
            <Input name={"auth_work"} label="Autorisation d'enseigner" type="file" value={context.user.auth_work} placeholder="Format pdf" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Input name={"criminal_record"} label="Casier judiciaire" type="file" value={context.user.criminal_record} placeholder="Format pdf" />
          </div>
          <div className="col-md-4">
            <Input name={"statement_infos"} label="Relevé d'information" type="file" value={context.user.statement_infos} placeholder="Format pdf" />
          </div>
          <div className="col-md-4">
            <Input name={"auth_medical"} label="Autorisation médicale" type="file" value={context.user.auth_medical} placeholder="Format pdf" />
          </div>
        </div>
      </form>
    </React.Fragment>
  )
}
