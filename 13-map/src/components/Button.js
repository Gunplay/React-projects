function Button({onClick, sign}) {
    console.log('Button rendered')
    return <button onClick={onClick}>{sign}</button>
}

export default Button