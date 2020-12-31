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
      body: formData,
      redirect: 'follow'
    };
    try {
      const response = await fetch(`${window.location.origin}/wp-json/so-auto/v1/${context.userType}s?teacher_id=${context.user.id}&teacher_name=${context.user.username}&files=true`, requestOptions)
      const result = await response.json()
      context.updateUser(result[0])
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
            {context.user.id_card
              ?
                <div>
                  <p>Pièce d'identité</p>
                  {
                    context.user.id_card.split('.').pop() === 'pdf'
                    ? <embed height="" src={`${window.location.origin}/wp-content/uploads/so_auto/teachers/${context.user.username}/${context.user.id_card}`} type="application/pdf" />
                    
                    : <img className="w-100" src={`${window.location.origin}/wp-content/uploads/so_auto/teachers/${context.user.username}/${context.user.id_card}`} alt=""/>
                  }
                  <div className="input-group mt-4">
                    <div className="custom-file">
                      <input className="custom-file-input" id="inputFileid_card" type="file" name="id_card" ref={register} />
                      <label className="custom-file-label" htmlFor="inputFileid_card">Changer de doc.</label>
                    </div>
                  </div>
                </div>  
              :
                <Input name={"id_card"} label="Pièce d'identité" type="file" placeholder="Format pdf" />
            }
          </div>
          <div className="col-md-4">
            {context.user.permis
              ?
                <div>
                  <p>Permis de conduire</p>
                  {
                    context.user.permis.split('.').pop() === 'pdf'
                    ? <embed height="350.8" width="248" src={`${window.location.origin}/wp-content/uploads/so_auto/teachers/${context.user.username}/${context.user.permis}`}  type="application/pdf" />
                    
                    : <img className="w-100" src={`${window.location.origin}/wp-content/uploads/so_auto/teachers/${context.user.username}/${context.user.permis}`} alt=""/>
                  }
                  <div className="input-group mt-4">
                    <div className="custom-file">
                      <input className="custom-file-input" id="inputFilepermis" type="file" name="permis" ref={register} />
                      <label className="custom-file-label" htmlFor="inputFilepermis">Changer de doc.</label>
                    </div>
                  </div>
                </div>  
              :
                <Input name={"permis"} label="Permis de conduire" type="file" placeholder="Format pdf" />
            }
          </div>
          <div className="col-md-4">
            {context.user.auth_work
              ?
                <div>
                  <p>Autorisation d'enseigner</p>
                  {
                    context.user.auth_work.split('.').pop() === 'pdf'
                    ? <embed height="" src={`${window.location.origin}/wp-content/uploads/so_auto/teachers/${context.user.username}/${context.user.auth_work}`} type="application/pdf" />
                    
                    : <img className="w-100" src={`${window.location.origin}/wp-content/uploads/so_auto/teachers/${context.user.username}/${context.user.auth_work}`} alt=""/>
                  }
                  <div className="input-group mt-4">
                    <div className="custom-file">
                      <input className="custom-file-input" id="inputFileauth_work" type="file" name="auth_work" ref={register} />
                      <label className="custom-file-label" htmlFor="inputFileauth_work">Changer de doc.</label>
                    </div>
                  </div>
                </div>  
              :
                <Input name={"auth_work"} label="Autorisation d'enseigner" type="file" placeholder="Format pdf" />
            }
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            {context.user.criminal_record
              ?
                <div>
                  <p>Casier judiciaire</p>
                  {
                    context.user.criminal_record.split('.').pop() === 'pdf'
                    ? <embed height="" src={`${window.location.origin}/wp-content/uploads/so_auto/teachers/${context.user.username}/${context.user.criminal_record}`} type="application/pdf" />
                    
                    : <img className="w-100" src={`${window.location.origin}/wp-content/uploads/so_auto/teachers/${context.user.username}/${context.user.criminal_record}`} alt=""/>
                  }
                  <div className="input-group mt-4">
                    <div className="custom-file">
                      <input className="custom-file-input" id="inputFilecriminal_record" type="file" name="criminal_record" ref={register} />
                      <label className="custom-file-label" htmlFor="inputFilecriminal_record">Changer de doc.</label>
                    </div>
                  </div>
                </div>  
              :
                <Input name={"criminal_record"} label="Casier judiciaire" type="file" placeholder="Format pdf" />
            }
          </div>
          <div className="col-md-4">
            {context.user.statement_infos
              ?
                <div>
                  <p>Relevé d'information</p>
                  {
                    context.user.statement_infos.split('.').pop() === 'pdf'
                    ? <embed height="" src={`${window.location.origin}/wp-content/uploads/so_auto/teachers/${context.user.username}/${context.user.statement_infos}`} type="application/pdf" />
                    
                    : <img className="w-100" src={`${window.location.origin}/wp-content/uploads/so_auto/teachers/${context.user.username}/${context.user.statement_infos}`} alt=""/>
                  }
                  <div className="input-group mt-4">
                    <div className="custom-file">
                      <input className="custom-file-input" id="inputFilestatement_infos" type="file" name="statement_infos" ref={register} />
                      <label className="custom-file-label" htmlFor="inputFilestatement_infos">Changer de doc.</label>
                    </div>
                  </div>
                </div>  
              :
                <Input name={"statement_infos"} label="Relevé d'information" type="file" placeholder="Format pdf" />
            }
          </div>
          <div className="col-md-4">
            {context.user.auth_medical
              ?
                <div>
                  <p>Autorisation médicale</p>
                  {
                    context.user.auth_medical.split('.').pop() === 'pdf'
                    ? <embed height="" src={`${window.location.origin}/wp-content/uploads/so_auto/teachers/${context.user.username}/${context.user.auth_medic}`} type="application/pdf" />
                    
                    : <img className="w-100" src={`${window.location.origin}/wp-content/uploads/so_auto/teachers/${context.user.username}/${context.user.auth_medical}`} alt=""/>
                  }
                  <div className="input-group mt-4">
                    <div className="custom-file">
                      <input className="custom-file-input" id="inputFileauth_medical" type="file" name="auth_medical" ref={register} />
                      <label className="custom-file-label" htmlFor="inputFileauth_medical">Changer de doc.</label>
                    </div>
                  </div>
                </div>  
              :
                <Input name={"auth_medical"} label="Autorisation médicale" type="file" placeholder="Format pdf" />
            }
          </div>
        </div>
      </form>
    </React.Fragment>
  )
}
