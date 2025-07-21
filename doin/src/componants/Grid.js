import { tick } from '../datas/tick'
import '../style/Grid.css'

function Grid () {

    return (
        <div className='grid-container'>
            {tick.map(({ id, name }) => (
                <div className='grid_item'
                key={id}>
                    {name}
                </div>
            ))}
        </div>
      )
}

export default Grid; 
