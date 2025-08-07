import DisplayDef from "./DisplayDef";
import Grid from "./Grid";
import Title from "./Title";
import '../style/App.css'

function App() {

  return (
    <div>
      <Title />
      <div className="app_container"> 
        <Grid/>
        <DisplayDef/>   
      </div>
    </div>
  );
}

export default App;
