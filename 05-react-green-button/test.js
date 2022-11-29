const AppTwo = ({initialButtonText, initialClassesList}) => {
    console.log(initialButtonText);
    // const [buttonText, setButtonText] = React.useState(props.initialButtonText);
    const [buttonText, setButtonText] = React.useState(initialButtonText);
   const [classesList, setClassesList] = React.useState(initialClassesList);

    const clickButton = () => {
        setButtonText('Hello from React Learn')
        setClassesList('black-btn')
    }

    return (
        <div className="appTwo">
            <button classesList={classesList} onClick={clickButton}>
                {buttonText}
                </button>
        </div>
    )
}

const container = document.getElementById('appTwo')
const root = ReactDOM.createRoot(container)
root.render(<AppTwo initialButtonText = "Hi" initialClassesList=""/>)