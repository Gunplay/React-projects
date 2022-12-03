function PetInfo(props) {

    const {animal, age} = props
    console.log(props);
    
    return <h1>My {animal} is {age} yers old</h1>
}

export default PetInfo