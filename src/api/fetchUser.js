
export default function fetchUser(user_type, user_id) {
  let user = {}

  if(Object.keys(user).length === 0) {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
  
    fetch(`${window.location.origin}/wp-json/so-auto/v1/${user_type}s/${user_id}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        user = result[0]
      })
      .catch(error => console.log('error', error));
  }

  return user
}
