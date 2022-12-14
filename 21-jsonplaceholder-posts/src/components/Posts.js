import { useState, useEffect } from 'react'
import Post from './Post'
import App from '../App'

function Posts({ header }) {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState('') // пустая строка это false, так что возвращаем 2ю часть кода JSX
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((posts) => {
        // console.log(posts)
        setPosts(posts)
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false))
  }, [])

  // Переносим Loading из заголовка в вместо отображение
  // if (isLoading === true) {
  //   return <h1>Loading...</h1>
  // }

  if (error) {
    return <h1>Error: {error}</h1>
  }

  return (
    <>
      <h1>{header}</h1>
      <hr />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        posts.map((post, i) => {
          return <Post {...post} key={post.id} />
        })
      )}
    </>
  )
}

export default Posts
