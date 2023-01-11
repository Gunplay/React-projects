import Menu from "./Menu"
const About = () => {
  return (
    <>
    <h1>About</h1>
    {/* нельзя использовать тег <a></a>, так как нежелательно отправлять запрос на сервер */}
    {/* <a href="/">Go to home</a> */}
    {/* <Link to="/">Go to home</Link>
    <br></br>
    <Link to="/contacts">Go to Contacts</Link> */}
    </>
  )
}

export default About