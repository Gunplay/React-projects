import { useState } from 'react'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleFormSubmit(event) {
    event.preventDefault()
    // console.log(event.target.username.value)
    // console.log(event.target.password.value)

    const userData = {
      username: event.target.username.value,
      password: event.target.password.value,
    }
    alert(JSON.stringify(userData))
    console.log(userData)
  }

  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Usename:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="username"
          ></input>
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          ></input>
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default Login
