
export default function verifyUsers() {

  let users = {}

  const requestOptions = {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    },
    redirect: 'follow'
  }

  fetch(`${window.location.origin}/wp-json/so-auto/v1/students`, requestOptions)
    .then(response => response.json() )
    .then(result => 
      users.students = result
    )
    .catch(error => console.log('error', error));

  fetch(`${window.location.origin}/wp-json/so-auto/v1/teachers`, requestOptions)
    .then(response => response.json() )
    .then(result => 
      users.teachers = result
    )
    .catch(error => console.log('error', error));

  return users
}
