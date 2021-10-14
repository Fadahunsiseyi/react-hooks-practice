import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetchingOne() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [posts, setPost] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicoe.com/posts/1')
        .then((response) => {
            setLoading(false)
            setPost(response.data)
            setError('')
            console.log(response.data)
        })
        .catch((error) => {
                setLoading(false)
                setPost({})
                setError('Something went wrong')
            })
       
    },[])
  return (
    <div>
      {loading ? 'Loading' : posts.title}
      {error ? 'Something went wrong' : null} 
    </div>
  )
}

export default DataFetchingOne
