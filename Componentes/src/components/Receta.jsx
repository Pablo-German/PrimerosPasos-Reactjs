
import PropTypes from 'prop-types';

function Receta({ name,pic,  ingredients, steps}) {
  return (
    <article>
      <h2>{name}</h2>
    </article>
  );
}

// Validación de PropTypes para la propiedad 'name'
Receta.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Receta;
