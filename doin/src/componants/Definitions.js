import '../style/Definition.css';

   /*   {props.direction ? '>' : +'V'}*/

function Definitions(props) {

  return (
    <div key= {props.x.toString() + '-' + props.y.toString()} className='cell_definition'>
      {'def'}
    </div>
  );
}

export default Definitions;
