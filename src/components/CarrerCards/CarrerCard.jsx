/* eslint-disable react/prop-types */
export const CarrerCard = ({title,descripcion,fechaInicio,fechaFinal}) => {
  return (
    <div className="CarrerCard">
        <div className="text-carrerCard">
            <h4>{title}</h4>
            <p>{descripcion}</p>
        </div>
        <div className="date-card">
            <span>{fechaInicio}</span>
            <span>{fechaFinal}</span>
        </div>
    </div>
  )
}
