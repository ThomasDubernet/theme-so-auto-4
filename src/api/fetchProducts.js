
export default function fetchProducts(token) {

  let products = {}

    const requestOptions = {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      redirect: 'follow'
    }
  
    fetch(`${window.location.origin}/wp-json/wc/v3/products?category=37&order=asc&filter[orderby]=meta_value_num&orderby=price`, requestOptions)
      .then(response => response.json() )
      .then(result => {
        products.codeProducts = result
      })
      .catch(error => console.log('error', error));
      
    fetch(`${window.location.origin}/wp-json/wc/v3/products?category=38&order=asc&filter[orderby]=meta_value_num&orderby=price`, requestOptions)
      .then(response => response.json() )
      .then(result => {
        products.driveProducts = result
      })
      .catch(error => console.log('error', error));

  return products
}
