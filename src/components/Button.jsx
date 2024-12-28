import "./Button.css"

const Button = ({ clickHandling }) => {
  const buttons = [
    ["C", "(", ")", "Del"],
    ["7", "8", "9", "+"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "*"],
    [".", "0", "00", "/"],
    ["="]
  ];

  return (
    <div className="button-container">
      {buttons.map((group, i) => (
        <div className="btn-group" key={i}>
          {group.map((btn, j) => (
            <button
              className={btn === "=" ? "btn-full" : "btn"}
              onClick={(e) => clickHandling(e.target.innerText)}
              key={j}
            >
              {btn}
            </button>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Button