import Ingredientes from "./Ingredientes.jsx";
import Intrucciones from "./Intrucciones.jsx";

// eslint-disable-next-line react/prop-types
export default function Receta ({name,pic,ingredients,steps})  {
  return (
    <article>
      <h2 className="Nombre">{name}</h2>
      <section>
      <img src={pic} alt={name} />
      <Ingredientes title="Ingredientes" ingredients={ingredients}></Ingredientes>
      <Intrucciones title ="Intrucciones" steps={steps}></Intrucciones>
      </section>
     
      
    </article>
  );
}

