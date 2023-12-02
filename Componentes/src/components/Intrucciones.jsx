import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
function Intrucciones ({title, steps}) {
    return ( 
        <div className='Intrucciones'>
        <h3>{title}</h3>
        {steps.map((x,idx) => (
        <p key={idx}>{x}</p>
            
        ))}
    </div>
     );
}
Intrucciones.propTypes = {
    title: PropTypes.string.isRequired,
    steps: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

export default Intrucciones;