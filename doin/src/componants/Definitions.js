import '../style/Definition.css';

function Definitions(props) {

  const handleClick = () => {
    console.log('Cellule cliquée en position');
  };

  return (
    <div key= {props.x.toString() + '-' + props.y.toString()} className={'cell_definition'} onClick={handleClick}>
      {props.length <= 5
      ? (props.direction === 'horizontal' ? '>' : 'v')
      : '>v'}
    </div>
  );
}

export default Definitions;
