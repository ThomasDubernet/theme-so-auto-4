import React, { useEffect, useState } from 'react';

function Infos(props) {

  const [content, setContent] = useState([])
  
  useEffect( () => {
    async function fetchContent(slug) {
      let response = await fetch(`${window.location.origin}/wp-json/wp/v2/pages?slug=${slug}`)
      let data = await response.json()
      setContent(data[0].content.rendered)
    }
    fetchContent(props.match.params.slug)
  }, [props])

  console.log(content)

  return (
    <div dangerouslySetInnerHTML={{__html: content}}></div>
  );
}


export default Infos;