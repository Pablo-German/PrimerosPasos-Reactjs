import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
function Intrucciones ({title, steps}) {
    return ( 
        <section>
        <h3>{title}</h3>
        {steps.map((x,idx) => (
        <p key={idx}>{x}</p>
            
        ))}
    </section>
     );
}
Intrucciones.propTypes = {
    title: PropTypes.string.isRequired,
    steps: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

export default Intrucciones;