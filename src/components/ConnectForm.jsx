import React from 'react'
import {animated} from 'react-spring'
import { useForm } from 'react-hook-form'
import Cookies from 'js-cookie'

import logoSoAuto from '../img/logo.svg'

export default function ConnectForm(props) {
  
  const { register, handleSubmit} = useForm()

  function labelisation(label) {
    if(label === "username"){
      label = 'identifiant'
    } else if (label === "password") {
      label = 'mot_de_passe'
    }
    return label.charAt(0).toUpperCase() + label.replaceAll('_', ' ').slice(1)
  }

  const Input = ({type, label, register, required }) => (
    <div className="form-group">
      <label>{labelisation(label)}</label>
      <input className="form-control" type={type} name={label} ref={register({ required })} />
    </div>
  )

  const onSubmitConnect = (data) => {
    var passwordHash = require('password-hash');
    if(data.username && data.password) {
      props.users.students.forEach( student => {
        if (student.student_username === data.username) {
          if(passwordHash.verify(data.password, student.student_password)) {
            Cookies.set("so_auto_user_type", "student", {expires: 1})
            Cookies.set("so_auto_user_id", student.student_id, {expires: 1})
            props.setUser(student)
            props.history.push(`/student/folder`)
          }
        }
      })
      props.users.teachers.forEach( teacher => {
        if (teacher.teacher_username === data.username) {
          if(passwordHash.verify(data.password, teacher.teacher_password)) {
            Cookies.set("so_auto_user_type", "teacher", {expires: 1})
            Cookies.set("so_auto_user_id", teacher.teacher_id, {expires: 1})
            props.setUser(teacher)
            props.history.push(`/teacher/folder`)
          }
        }
      })
    }
  }

  return (
    <animated.form style={props.effect} onSubmit={handleSubmit(onSubmitConnect)} noValidate>
      <div className="m-6 d-flex flex-column">
        <div className="mx-auto my-4">
          <img src={logoSoAuto} alt="" />
        </div>

        <div className="tooltipform">
          <Input label="username" type="text" register={register} />
        </div>

        <div className="tooltipform">
          <Input label="password" type="password" register={register} />
        </div>

        <button type="submit" className="btn btn-warning">Connexion</button>
        <button className="App-link mx-auto my-4" onClick={() => props.setConnect(false)}>Pas encore inscrit ? Enregistrez-vous</button>
      </div>
    </animated.form>
  )
}
