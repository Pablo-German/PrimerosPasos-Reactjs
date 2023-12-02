import Ingredientes from "./Ingredientes.jsx";
import Intrucciones from "./Intrucciones.jsx";

// eslint-disable-next-line react/prop-types
export default function Receta ({name,pic,ingredients,steps})  {
  return (
    <article>
      <h2>{name}</h2>
      <div>
      <img src={pic} alt={name} width={200}/>
      <Ingredientes title="Ingredientes" ingre={ingredients}></Ingredientes>
      <Intrucciones title ="Intrucciones" steps={steps}></Intrucciones>
      </div>
     
      
    </article>
  );
}

