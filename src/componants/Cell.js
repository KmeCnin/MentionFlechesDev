import '../style/Cell.css';

function Cell({index, inputs, setInputs, className}) {

    const updateInput = (index, value) => {
        inputs[index] = value
        setInputs(inputs)
    }

    return (
        <input key={index} index={index} className={className} maxLength={1} onChange={(e) => updateInput(index, e.target.value)} >
        </input>
    );
}
export default Cell;

