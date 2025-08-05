import '../style/Cell.css';

function Cell(props) {
    
    return (
        <div key= {props.x.toString() + '-' + props.y.toString()} className={props.className}>
            {props.letter}
        </div>
    );
}

export default Cell;
