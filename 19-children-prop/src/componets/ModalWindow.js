function ModalWindow(props) {
  const style = {
    backgroundColor: 'grey',
    color: 'white',
    width: '300px',
    height: '200px',
    margin: '20px auto',
  }
  return <div style={style}>{props.children}</div>
}

export default ModalWindow
