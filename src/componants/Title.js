import '../style/Title.css';
import logo from '../img/mention-logo_icon-blue.png'

function Title({defs}) {

  return defs.length === 0 && (
    <div className="title-container">
      <img
        src={logo}
        alt="Left"
        className='img_logo'
      />
      <h3 className="title">Mention Fléchés</h3>
      <img
        src={logo}
        alt="Right"
        className='img_logo'
      />
    </div>
  );
}

export default Title;

