import '../style/Validation.css';

function displaybutton(grid_validation, inputs) {
    const count_inputs = inputs.filter(e => e !== undefined && e !== "" && e !== " " ).length;
    const count_grid_validation = grid_validation.filter(e => e !== undefined).length;
    return count_inputs === count_grid_validation
}

function verification(grid_validation, inputs) {

    if(grid_validation === inputs){
        return true
    }
    else{
        return false
    }
}

function Validation({grid_validation, inputs}) {

    function UpdateAlert () {
        if(verification(grid_validation, inputs))
        {
            return "Bravo tu es certifié Chipie Mention ! 🎉🥳✋🤚"
        }
        else{
            return "Sorry c'est raté ! ❌😢"
        }
    }

  return (
    <>
        {
            (
                displaybutton(grid_validation, inputs)
                &&
                <button onClick={() => alert(UpdateAlert())} className='bottom_button'>
                    ❓Vérifie la grille brother ! 🧐
                </button>
            )
        }
    </>
  );
}

export default Validation;