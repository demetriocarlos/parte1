
// eslint-disable-next-line react/prop-types
export const Content = ({parts}) => {
    return (
      <div>
           {parts.map((x,index) => (
              <div key={index}>
                  <p>{x.name}</p>
                  <p>{x.exercises}</p>
              </div>
           ))}
      </div>
    )
  }
  