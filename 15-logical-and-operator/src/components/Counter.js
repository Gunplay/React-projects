import App from '../App'

function Counter({ count }) {
  // console.log('Count rendered')
  return (
    <h1
      style={{ backgroundColor: 'black', borderRadius: '20px', margin: '50px' }}
    >
      Total clicks: {count}
    </h1>
  )
}

export default Counter
