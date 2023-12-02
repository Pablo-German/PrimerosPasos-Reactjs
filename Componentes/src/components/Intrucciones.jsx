

export default function Intrucciones (title, steps ) {
  return (
    <div>
        <h3>{title}</h3>
        {steps.map((x,idx) => (
            <p key={idx}>{x}</p>
        ))}
    </div>
  )
}
