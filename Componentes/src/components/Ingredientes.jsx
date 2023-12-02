import PropTypes from 'prop-types';
// eslint-disable-next-line react/prop-types
function Ingredientes({title,ingredients}) {
    
    return ( 
        <div className='ingredientes'>
        <h2>{title}</h2>
        <ul>
        {ingredients.map((ing,idx)=>(
            <li key={idx}>{ing.name} - {ing.amount} {ing.measurement}</li>
        ))}
        </ul>
        
    </div>
     );
}
Ingredientes.propTypes = {
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        measurement: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
  
export default Ingredientes;