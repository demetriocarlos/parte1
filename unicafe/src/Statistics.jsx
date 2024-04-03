




// eslint-disable-next-line react/prop-types
export const Statistics = ({text,value}) => {
  return (
    <div> 
      <table>
        <tbody>
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
        </tbody>
        </table>
    </div>
  )
}

