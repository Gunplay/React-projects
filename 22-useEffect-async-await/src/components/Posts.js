import { useState, useEffect } from 'react'
import Post from './Post'
import App from '../App'

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

function Posts({ header }) {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState('') // пустая строка это false, так что возвращаем 2ю часть кода JSX
  const [isLoading, setIsLoading] = useState(true)
  // func returned - undefined or return func!!!!! (async function fetchData())
  useEffect(() => {
    // 207. Использование IIFE - Immediately Invoked Function Expression - ; (func) ();
    // async function fetchData() {
    const fetchData = async () => {
      // async return promise и нельзя делать её асинхронной, потому тчо вернёт undefined, так как мы возвращаем другую функцию
      // будет выполнен unmount
      try {
        const res = await fetch(API_URL)
        const posts = await res.json()
        setPosts(posts)
      } catch (error) {
        setError(error.message)
      }
      setIsLoading(false) // вызываем только после того как комуникация с сервером завершится, и был индикатор пока данные не загружены!
    }
    fetchData()
  }, [])

  // useEffect(() => {
  //   fetch(API_URL)
  //     .then((response) => response.json())
  //     .then((posts) => {
  //       // console.log(posts)
  //       setPosts(posts)
  //     })
  //     .catch((error) => setError(error.message))
  //     .finally(() => setIsLoading(false))
  // }, [])

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
