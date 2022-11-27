  // Трансформация кода для браузера  ype="text/babel"
      // code must be after library
      //                                            type props children
      //   const helloWorldHeading = <h1>Hello form React</h1> // не является часть JSX - index.html:21 Uncaught SyntaxError: Unexpected token '<' (at index.html:21:33)
      // требуется транспиллер Babel для трансформации кода в JS!!!!!!!!!!!!!!!!!!!!!
      // const helloWorldHeading = /*#__PURE__*/ React.createElement(
      //   'h1',
      //   null,
      //   'Hello form React'
      // ) //- JS
      //   console.log(helloWorldHeading) // object
     
// Func component
      const App = () => {
        // console.log('Called');
//             1) первое состояние useState         внешняя функция
        const [buttonText, setButtonText] = React.useState('Click me') // function with side effect
        console.log(buttonText)
        const [classesList, setClassesList] = React.useState('')

        const onButtonClick = ()=> {
//            2) 2е состояние setState
            setButtonText(`Hello from React, ${Math.random()}`);
            setClassesList('green-btn');
           
        };
// вызов функции идёт однократно console.log('Called'); Что бы изменилось значение buttonText - надо вызвать функцию ещё раз
        return (
            <div className="app">

              <button className = {classesList} onClick={onButtonClick}>
                {buttonText}
                </button>
            </div>
          )
      }


      const container = document.getElementById('app') // for js use to '' - помещаем в контейнер <div id="app"></div>
      const root = ReactDOM.createRoot(container) // (точка монитирования -- корневой элемент) монтируем компонент в HMTL страницу спомощью  ReactDOM
      root.render(<App />) // and component rendering + JSX + пользователький компонет с большой буквы (div and button - встроенный компонент)