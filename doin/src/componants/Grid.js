import '../style/Grid.css';
import words from '../datas/words';
import Cell from './Cell';
import Definition from './Definitions';
import { useCallback } from 'react';

const size_lar = 26; 
const size_lon = 29; 


function getLetter(x, y) {
  
  for(let l=0;l<words.length;l++){
    const entry = words[l]
    for(let i=0;i<entry.word.length;i++){
      const letter = entry.word[i]
      if (entry.direction==='vertical') {
        if(x===entry.x+i && y===entry.y){
          return letter
        }
      }
      if(entry.direction==='horizontal'){
        if(x===entry.x && y===entry.y+i){
          return letter
        }
      }
    }
  }
}

function getDefinitions(x, y) {

  let defs = []
  for(let l=0;l<words.length;l++){
    if (words[l].def_pos==='ortho' && words[l].direction==='vertical') {
      if(x+1===words[l].x && y===words[l].y){
        defs.push(words[l])
      }
    }
    else if (words[l].def_pos==='diagonale' && words[l].direction==='vertical') {
      if(x===words[l].x && y+1===words[l].y){
        defs.push(words[l])
      }
    }
    else if (words[l].def_pos==='diagonale' && words[l].direction==='horizontal') {
      if(x+1===words[l].x && y===words[l].y){
        defs.push(words[l])
      }
    }
    else if (words[l].def_pos==='ortho' && words[l].direction==='horizontal') {
      if(x===words[l].x && y+1===words[l].y){
        defs.push(words[l])
      }
    }
  }
  return defs
}


//###############################################################################################//

function Grid({ setDefs, inputs, setInputs, grid_validation, setGridValidation }) {

  const grid = []; 
  const grid_cells = []; 

  const separateurs = useCallback(() => {
      const spaces = []; 
      for(let l=0;l<words.length;l++){
        const entry = words[l]
        if(entry.separateur){
          spaces.push(entry)
        }
      }
      return spaces
  },[])(); 

 
  for (let x = 1; x<= size_lon; x++){
    for (let y = 1; y<= size_lar; y++)
    { 
      let index = (x - 1) * size_lar + (y - 1);
      let letter = getLetter(x,y)
      if(letter!==undefined){
        grid_cells.push(letter)
        grid_validation[index] = letter 
      }
      else{
        grid_cells.push(getDefinitions(x,y))
      }
    }
  }
  setGridValidation(grid_validation)

  for (let i=0; i<grid_cells.length; i++){
    if(typeof grid_cells[i] === "string"){
      let check = false; 
      for(let s=0;s<separateurs.length; s++){
        if(separateurs[s].direction === 'horizontal' && (((separateurs[s].x - 1) * size_lar + (separateurs[s].y - 1 + separateurs[s].separateur)) === i)){
          grid.push(
            <Cell index={i} inputs={inputs} setInputs={setInputs} className={'cell_item_separateur_horizontal'} />
          )
          check = true; 
        }
        else if (separateurs[s].direction === 'vertical' && (((separateurs[s].x - 1 + separateurs[s].separateur) * size_lar + (separateurs[s].y - 1)) === i)){
          grid.push(
            <Cell index={i} inputs={inputs} setInputs={setInputs} className={'cell_item_separateur_vertical'} />
          )
          check = true; 
        }
      }
      if(!check){
        grid.push(
          <Cell index={i} inputs={inputs} setInputs={setInputs} className={'cell_item'} />
        )
      }
    }
    else {
      grid.push(
        <Definition
          definition={grid_cells[i]}
          setDefs={setDefs}
          index={i}
        />      
      ) 
    }
  }

  return (
    <div className='grid_container'>
      {grid}     
    </div>

  );
}

export default Grid;