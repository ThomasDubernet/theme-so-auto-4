import React, {useContext} from 'react'
import { useForm } from 'react-hook-form'
import Context from '../../context/Context';

export default function CivilForm() {

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
        <TitleGroupInput title='Etat civil' text="Ces informations nous permettent de remplir le dossier nécessaire à votre inscription en préfécture.<br/>Rendez-vous sur <span class='font-weight-bold sm'>examen</span> pour plus d’informations !" />
        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label className="font-weight-bold">Sexe</label>
              <div className="d-flex">
                <div className={"male-label w-50 " + (context.user.sexe === "homme" ? 'current' : '')}>
                  <input className="form-control input-sexe-male" type="radio" name={"sexe"} value="homme" placeholder="Homme" ref={register}/>
                  <span>Homme</span>
                </div>
                <div className={"femelle-label w-50 " + (context.user.sexe === "femme" ? 'current' : '')}>
                  <input className="form-control input-sexe-femelle" type="radio" name={"sexe"} value="femme" placeholder="Femme"  ref={register}/>
                  <span>Femme</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <Input name={"firstname"} label="Prénom" type="text" value={context.user.firstname} />
          </div>
          <div className="col-md-4">
            <Input name={"lastname"} label="Nom de naissance" type="text" value={context.user.lastname} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Input name={"birthday"} label="Date de naissance" type="text" value={context.user.birthday} placeholder="jr/mm/aaaa" />
          </div>
          <div className="col-md-4">
            <Input name={"city_of_birth"} label="Ville de naissance" type="text" value={context.user.city_of_birth} />
          </div>
          <div className="col-md-4">
            <Input name={"zipcode_of_birth"} label="Code postal de la ville" type="text" value={context.user.zipcode_of_birth} />
          </div>
        </div>
      </form>
    </React.Fragment>
  )
}
