import '../style/Title.css';
import logo from '../img/mention-logo_icon-blue.png'

function Title() {

  return (
    <div className="container">
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

