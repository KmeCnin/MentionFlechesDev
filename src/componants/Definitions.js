import '../style/InfoMessage.css';
import '../style/Cell.css';
import arrow_direction from '../utils/tools.js';

function Definitions({definition, setDefs, index}) {

  const onlyDefClick = (event) => {

    const cell_definition = event.target

    if (cell_definition.classList.contains('selected')) {
      setDefs([])
      cell_definition.classList.remove('selected')

      return
    }
    
    document.querySelector('.cell_definition.selected')?.classList.remove('selected') // récupère toutes, renvoie une NodeList

    if(definition.length !== 0)
    {
      setDefs(definition)
      cell_definition.classList.add('selected')
    }
  
  }

  return (
    <div key={index} className={definition.length !==0 ? "cell_definition" : "cell_empty"} onClick={definition.length !==0 ? onlyDefClick : undefined} >
    {
      definition.map((word) => {
        return arrow_direction(word.direction, word.def_pos)
      })
    }
    </div>
  )
}

export default Definitions;
