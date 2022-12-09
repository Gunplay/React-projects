function Reset({ count, resetCount, buttonStyle }) {
  {
    /* if count <= 0 = false */
  }
  {
    /* if count === 0 - result will be true(0),!! do from simple vaule in Boolean  or count > 0*/
  }
  return (
    count > 0 && (
      <div>
        <button onClick={resetCount} style={buttonStyle}>
          Reset
        </button>
      </div>
    )
  )
}

export default Reset
