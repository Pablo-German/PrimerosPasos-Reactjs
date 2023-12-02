
function Ingredientes(title,ingre) {
    return ( 
        <section>
        <h2>{title}</h2>
        <ul>
        {ingre.map((ing,idx)=>(
            <li key={idx}>{ing}</li>
        ))}
        </ul>
        
    </section>
     );
}

export default Ingredientes;