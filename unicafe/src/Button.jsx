

// eslint-disable-next-line react/prop-types
export const Button = ({onClick,text}) =>{
    return (
      <div>
        <button onClick={onClick}> {text} </button>
      </div>
    )
}