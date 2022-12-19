import styles from './Info.module.css'
console.log(styles)

function Info() {
  return (
    <div className={styles.info}>
      <h1>Hello from in the component</h1>
      <h2>Headin in the component</h2>
      <button className={styles.myButton}>
        Click me please int the component
      </button>
      <div>
        <p className={styles.textMyReactApp}>My React App</p>
      </div>
    </div>
  )
}

export default Info
