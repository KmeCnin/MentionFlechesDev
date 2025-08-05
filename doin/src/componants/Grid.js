import '../style/Grid.css';
import words from '../datas/words';
import Cell from './Cell';
import Definition from './Definitions';

const size_lar = 26; 
const size_lon = 29; 

function getLetter(x, y) {

  for(let l=0;l<words.length;l++){
    for(let i=0;i<words[l].word.length;i++){
      if(words[l].direction==='horizontal'){
        if(x===words[l].x && y===words[l].y+i){
          return words[l].word[i]
        }
      }
      else{
        if(x===words[l].x+i && y===words[l].y){
          return words[l].word[i]
        }
      }
    }
  }
}

function getDefinitions(x, y) {

  let defs = []

  // 1, 8 
  for(let l=0;l<words.length;l++){
    if(words[l].direction==='horizontal'){
      if(x===words[l].x && y+1===words[l].y){
        defs.push(words[l].definition)
      }
    }
    if(words[l].direction==='vertical'){
      if(x+1===words[l].x && y===words[l].y){
        defs.push(words[l].definition)
      }
    }
  }
  return defs
}

function Grid() {

  const grid = []; 
  const grid_cells = []; 
 
  for (let x = 1; x<= size_lon; x++){
    for (let y = 1; y<= size_lar; y++)
    { 
      let letter = getLetter(x,y)
      if(letter!==undefined){
        grid_cells.push(letter)
      }
      else{
        grid_cells.push(getDefinitions(x,y))
      }
    }
  }

  for (let i=0; i<grid_cells.length; i++){
    if(typeof grid_cells[i] === "string"){
      grid.push(
          <Cell x={i} y={i} className={'cell_item'} letter={grid_cells[i]}/>
        )
      }
      else if (typeof grid_cells[i] === "object") {
        grid.push(
          <Definition x={i} y={i} />
        ) 
      }
      else{
        grid.push(
          <Cell x={i} y={i} className={'cell_empty'} />
        )
      }
    }
    


  /*for (let x = 1; x <= size_lon; x++) {
    for (let y = 1; y <= size_lar; y++) {

      if(def_ho)
      {
        <Definition x={def_ho.x} y={def_ho.y} direction = {def_ho.direction}/>
      }
      else if(def_ve){
        <Definition x={def_ve.x} y={def_ve.y} direction = {def_ve.direction}/>
      }

    }
}*/

  return (
    <div className='grid_container'>
      {grid}


      
    </div>

  );
}

export default Grid;
