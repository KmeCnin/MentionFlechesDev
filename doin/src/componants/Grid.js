import '../style/Grid.css';
import words from '../datas/words';
import Cell from './Cell';
import Definition from './Definition';

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

function Grid() {

  const grid = []; 
  const grid_with_words = []; 

  for (let x = 1; x<= size_lon; x++){
    for (let y = 1; y<= size_lar; y++)
    { 
      grid_with_words.push(getLetter(x,y))
    }
  }


  console.log(grid_with_words)

  for (let x = 1; x<= size_lon; x++){
    for (let y = 1; y<= size_lar; y++)
    {
      const index = (x - 1) * size_lar + (y - 1); // meilleure façon de calculer index


      if(x === grid_with_words[index].x && y === grid_with_words[index].y){
        grid.push(
          <Cell x={x} y={y} className={'cell_item'} letter={grid_with_words[index]}/>
        )
      }
      else{
        grid.push(
          <Cell x={x} y={y} className={'cell_empty'} />
        )
      }
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
