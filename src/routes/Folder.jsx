import React, {useContext} from 'react'
import CivilForm from '../components/form-folder/CivilForm'
import InfosForm from '../components/form-folder/InfosForm'
import AdressForm from '../components/form-folder/AdressForm'
import DocsStudentForm from '../components/form-folder/DocsStudentForm'
import DocsTeacherForm from '../components/form-folder/DocsTeacherForm'
import EntrepriseForm from '../components/form-folder/EntrepriseForm'
import AutoForm from '../components/form-folder/AutoForm'
import Context from '../context/Context'

export default function Folder(props) {

  const context = useContext(Context)

  function FolderStudent() {
    return (
      <React.Fragment>
        <DocsStudentForm />
      </React.Fragment>
    )
  }

  function FolderTeacher() {
    return (
      <React.Fragment>
        <DocsTeacherForm />
        <EntrepriseForm />
        <AutoForm />
        
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <h4 className="mb-5">Mes informations</h4>
        <CivilForm />
        <InfosForm />
        <AdressForm />
        
        {context.userType === 'student' ? <FolderStudent {...props} /> : <FolderTeacher {...props} />}
    </React.Fragment>
  )
}