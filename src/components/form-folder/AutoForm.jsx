import React, {useContext} from 'react'
import { useForm } from 'react-hook-form'
import Context from '../../context/Context';

export default function AutoForm() {
  
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
        <TitleGroupInput title='Véhicule école' text="Ces informations nous permettent de remplir le dossier nécessaire à votre inscription en préfécture.<br />Rendez-vous sur <span class='font-weight-bold sm'>carrières</span> pour plus d’informations !" />
        <div className="row">
          <div className="col-md-5">
            <Input name={"car_brand"} label="Marque" type="text" value={context.user.car_brand} />
          </div>
          <div className="col-md-8">
            <Input name={"car_model"} label="Modèle" type="text" value={context.user.car_model} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Input name={"immat"} label="Numéro plaque d'immatriculation" type="text" value={context.user.immat} />
          </div>
          <div className="col-md-3" >
            <div className="form-group">
              <label className="font-weight-bold">Type de boîte</label>
              <select className="form-control" name="auto_or_not" ref={register} >
                <option value="manuelle">Manuelle</option>
                <option value="auto">Automatique</option>
              </select>
            </div>
          </div>
          <div className="col-md-3">
            <Input name={"fuel"} label="Carburant" type="text" value={context.user.fuel} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            {context.user.gray_card
                ?
                  <div>
                    <p>Carte grise</p>
                    <img className="w-100" src={`${window.location.origin}/wp-content/uploads/so_auto/teachers/${context.user.username}/${context.user.gray_card}`} alt=""/>
                    <div className="input-group mt-4">
                      <div className="custom-file">
                        <input className="custom-file-input" id="inputFilegray_card" type="file" name="gray_card" defaultValue={context.user.gray_card} ref={register} />
                        <label className="custom-file-label" htmlFor="inputFilegray_card">Changer de doc.</label>
                      </div>
                    </div>
                  </div>  
                :
                  <Input name={"gray_card"} label="Carte grise" type="file" value={context.user.gray_card} placeholder="Format pdf" />
              }
          </div>
          <div className="col-md-4">
            {context.user.technical_control
                ?
                  <div>
                    <p>Contrôle technique</p>
                    <img className="w-100" src={`${window.location.origin}/wp-content/uploads/so_auto/teachers/${context.user.username}/${context.user.technical_control}`} alt=""/>
                    <div className="input-group mt-4">
                      <div className="custom-file">
                        <input className="custom-file-input" id="inputFiletechnical_control" type="file" name="technical_control" defaultValue={context.user.technical_control} ref={register} />
                        <label className="custom-file-label" htmlFor="inputFiletechnical_control">Changer de doc.</label>
                      </div>
                    </div>
                  </div>  
                :
                  <Input name={"technical_control"} label="Contrôle technique" type="file" value={context.user.technical_control} placeholder="Format pdf" />
              }
          </div>
          <div className="col-md-4">
            {context.user.insurance
                ?
                  <div>
                    <p>Assurance</p>
                    <img className="w-100" src={`${window.location.origin}/wp-content/uploads/so_auto/teachers/${context.user.username}/${context.user.insurance}`} alt=""/>
                    <div className="input-group mt-4">
                      <div className="custom-file">
                        <input className="custom-file-input" id="inputFileinsurance" type="file" name="insurance" ref={register} />
                        <label className="custom-file-label" htmlFor="inputFileinsurance">Changer de doc.</label>
                      </div>
                    </div>
                  </div>  
                :
                  <Input name={"insurance"} label="Assurance" type="file" value={context.user.insurance} placeholder="Format pdf" />
              }
            
          </div>
        </div>
      </form>
    </React.Fragment>
  )
}
