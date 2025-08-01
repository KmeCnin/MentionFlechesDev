import '../style/Grid.css';
import cells from '../datas/cells';
const size_lar = 26; 
const size_lon = 29; 


function Grid() {

  const grid = []; 

  for (let x = 1; x<= size_lon; x++){
    for (let y = 1; y<= size_lar; y++)
    {
          grid.push(
            <div key= {x.toString() + '-' + y.toString()} className='grid_empty'>
            </div>
      )}};


for (let x = 1; x <= size_lon; x++) {
  for (let y = 1; y <= size_lar; y++) {

    const cell_ho = cells.find(cell => cell.x === x && cell.y === y && cell.alignement === 'horizontal');
    const cell_ve = cells.find(cell => cell.x === x && cell.y === y && cell.alignement === 'vertical');

    let cell_def = null;

    if (cell_ve) {
      cell_def = {
        x: cell_ve.x -1,
        y: cell_ve.y,
        alignement: 'vertical',
        word: cell_ve.word
      };
    }
    else if (cell_ho) {
      cell_def = {
        x: cell_ho.x,
        y: cell_ho.y -1,
        alignement: 'horizontal',
        word: cell_ho.word
      };
    } 

    console.log(cell_def)


    const index = (x - 1) * size_lar + (y - 1); // meilleure façon de calculer index

    // Ensuite, placer les lettres du mot horizontal
    if (cell_ho) {
      for (let c = 0; c < cell_ho.word.length; c++) {
        const pos = index + c;
        grid[pos] = (
          <div key={pos} className="grid_item">
            {cell_ho.word[c]}
          </div>
        );
      }
    }

    // Puis les lettres du mot vertical
    if (cell_ve) {
      for (let c = 0; c < cell_ve.word.length; c++) {
        const pos = index + c * size_lar;
        grid[pos] = (
          <div key={pos} className="grid_item">
            {cell_ve.word[c]}
          </div>
        );
      }
    }

  }
}


      

  
    



  return (
    <div className='grid_container'>
      {grid}

  
      
    </div>
  
  );
}

export default Grid;
