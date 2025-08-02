import '../style/Definition.css';

function Definition(props) {

  return (
    <div key= {props.x.toString() + '-' + props.y.toString()} className='cell_definition'>
      {props.direction ? '>' : +'V'}
    </div>
  );
}

export default Definition;
