import Intrucciones from "./Intrucciones.jsx";


export default function Receta ({name,pic,ingredients,steps})  {
  return (
    <article>
      <h2>{name}</h2>
      <img src={pic} alt={name} width={200}/>
      <Intrucciones title ="Intrucciones" steps={steps}></Intrucciones>
      
    </article>
  );
}

