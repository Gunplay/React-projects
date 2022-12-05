import App from "../App"

function Counter({count}) {
    console.log('Count rendered')
    return <h1>Total clicks: {count}</h1>
}

export default Counter