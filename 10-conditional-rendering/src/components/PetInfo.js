function PetInfo(props) {

    const {animal, age, hasPet, haveFeed} = props
    console.log(props);
    
    // const text = hasPet ? `My ${animal} is ${age} yers old` : 'I don\'t have an animal'

//     return hasPet ? 
//     <h1>My {animal} is {age} years old</h1>
// : 
//     <h2>I don't have an animal</h2> 

    return haveFeed ?
        <h1>My {animal} is Feed</h1>
        : 
        <h2>Don't feed</h2> 
}

export default PetInfo