import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const [posts, setPosts] = useState([])
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    useEffect(() => {
       axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
       .then((response) => {
           console.log(response)
           setPosts(response.data)
       })
       .catch((error) => {
           console.log(error)
       })
    }, [idFromButtonClick])
  return (
    <div>
        <input type="text" value = {id} onChange = {(e) => setId(e.target.value)} /> <br />
        <button type="button" onClick={handleClick} >Fetch post</button>
        {posts.title}
      {/* <ul>
          {
             posts.map((post) => <li key={post.id}>{post.title}</li>)
          }
      </ul> */}
    </div>
  )
}

export default DataFetching
