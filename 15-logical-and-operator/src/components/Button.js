

function Button({ onClick, signPlus, signMinus, signDevide }) {
  //   console.log(sign)
  console.log('Button rendered')
  {
    if (signPlus) {
      return <button onClick={onClick}>{signPlus}</button>
    } else if (signMinus) {
      return <button onClick={onClick}>{signMinus}</button>
    } else if (signDevide) {
      return <button onClick={onClick}>{signDevide}</button>
    }
  }
}

export default Button
