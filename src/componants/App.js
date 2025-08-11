import Grid from "./Grid";
import Title from "./Title";
import '../style/App.css'
import { useState } from "react";
import InfoMessage from "./InfoMessage";
import Validation from "./Validation";


function App() {

  const [defs, setDefs] = useState([]);
  const [inputs, setInputs] = useState([]);
  const [grid_validation, setGridValidation] = useState([]);
  
  return (
    <div className="app_container">
      <div>
        <div className="grid_wrapper">
          <Grid setDefs={setDefs} inputs={inputs} setInputs={setInputs} grid_validation={grid_validation} setGridValidation={setGridValidation} />
        </div>
      </div>

      <div className="info_container">
        <div className="info_wrapper">  
          <Title />
            <h4 className="title_def">Los definitiones :</h4>
            <InfoMessage defs={defs} />
        </div>
        <div className="info_bottom">
          <Validation grid_validation={grid_validation} inputs={inputs} className={'bottom_button'} />
        </div>
      </div>
    </div>
  );
}

export default App;
