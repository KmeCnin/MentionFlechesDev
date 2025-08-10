import '../style/InfoMessage.css';
import arrow_direction from '../utils/tools.js';

function InfoMessage({ defs }) {

  if (!defs || defs.length === 0) {
    return <div className="info-message-empty">Aucune définition sélectionnée</div>;
  }

  return (
    defs.map((word, index) =>
      <div key={index} className="info-message">
        {arrow_direction(word.direction, word.def_pos)}
        {' :  '}
        {word.definition}
      </div>
    )
  )
}

export default InfoMessage;
