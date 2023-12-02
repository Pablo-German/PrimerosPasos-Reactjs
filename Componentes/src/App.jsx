
import data from './data/data.js'
import Receta  from './components/Receta.jsx'

function App() {

  return (
    <>
      <header>
        <h1>Recetas</h1>
      </header>
      <main>
        {data.map(recipe =>(
          <Receta {...recipe} key={recipe.id}  ></Receta>
        ))}
      </main>


    </>
  )
}

export default App
