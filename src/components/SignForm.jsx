import React from 'react'
import {animated} from 'react-spring'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import logoSoAuto from '../img/logo.svg'

export default function SignForm(props) {

  const yupSchema = yup.object().shape({
    username: yup
    .string()
    .min(4, "L'identifiant doit contenir un minimum de 5 lettres")
    .required("Vous devez entrer un identifiant"),
    email: yup
      .string()
      .email("Entrez un email valide")
      .required("Vous devez entrer un email"),
    prenom: yup
      .string()
      .min(5, "Le prénom doit contenir un minimum de 5 lettres"),
    nom: yup
      .string()
      .min(5, "Le nom doit contenir un minimum de 5 lettres"),
    site: yup
      .string()
      .url('Vous devez entrer un site valide'),
    password: yup
      .string()
      .min(8, "Le mot de passe doit faire au moins 8 charactères")
      .required("Vous devez entrer un mot de passe")
      .matches(
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/,
        "Il doit contenir 8 charactères dont 1 Majuscule, 1 Minuscule, 1 chiffre"
      )
  })

  const { register, handleSubmit, errors} = useForm({resolver: yupResolver(yupSchema)})
  
  function labelisation(label) {
    if(label === "username"){
      label = 'identifiant'
    } else if (label === "password") {
      label = 'mot_de_passe'
    } else if (label === "first_name") {
      label = 'prenom'
    } else if (label === "last_name") {
      label = 'nom'
    }
    return label.charAt(0).toUpperCase() + label.replaceAll('_', ' ').slice(1)
  }

  const Input = ({type, label, register, required }) => (
    <div className="form-group">
      <label>{labelisation(label)}</label>
      <input className="form-control" type={type} name={label} ref={register({ required })} />
    </div>
  )

  const onSubmitSign = (data) => {
    if(data){
      var passwordHash = require('password-hash');
      data.password = passwordHash.generate(data.password)

      var requestOptionsSo = {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
        redirect: 'follow'
      };

      if(props.teacher) {
        fetch(`${window.location.origin}/wp-json/so-auto/v1/teachers`, requestOptionsSo)
        .then(response => response.json() )
        .then(result => {
          if(result){
            props.setConnect(true)
          }
        })
        .catch(error => console.log('error', error));
      } else if (!props.teacher) {
        fetch(`${window.location.origin}/wp-json/so-auto/v1/students`, requestOptionsSo)
        .then(response => response.json() )
        .then(result => {
          if(result){
            props.setConnect(true)
          }
        })
        .catch(error => console.log('error', error));
      }
    }
  }

  return (
    <animated.form style={props.effect} onSubmit={handleSubmit(onSubmitSign)} noValidate>
      <div className="m-6 d-flex flex-column">
        <div className="mx-auto my-4">
          <img src={logoSoAuto} alt="" />
        </div>

        <div className="row">
          <div className="col-12 col-md-6 d-flex flex-column">
            <div className="tooltipform">
              <Input label="username" type="text" register={register} />
              {errors.username && <span className="tooltiptext sm">{errors.username.message}</span>}
            </div>

            <div className="tooltipform">
              <Input label="email" type="email" register={register} />
              {errors.email && <span className="tooltiptext sm">{errors.email.message}</span>}
            </div>

            <div className="tooltipform">
              <Input label="firstname" type="text" register={register} required />
              {errors.first_name && <span className="tooltiptext sm">{errors.firstname.message}</span>}
            </div>
          </div>

          <div className="col-12 col-md-6 d-flex flex-column">
            <div className="tooltipform">
              <Input label="lastname" type="text" register={register} required />
              {errors.last_name && <span className="tooltiptext sm">{errors.lastname.message}</span>}
            </div>

            <div className="tooltipform">
              <Input label="password" type="password" register={register} required={{required: true, minLength: 8}} />
              {errors.password && <span className="tooltiptext sm">{errors.password.message}</span>}
            </div>

            <button type="submit" className="mx-auto btn btn-warning">Inscription</button>
          </div>
        </div>

        <button className="App-link mx-auto my-4" onClick={() => props.setConnect(true)}>Déjà inscrit ? Connectez-vous</button>
      </div>
    </animated.form>
  )
}
