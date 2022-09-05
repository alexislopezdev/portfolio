import "../styles.css/Cards.css";
import logo from "../images/algoritmo.jpg";
import avatar from "../images/alexis-photo-delete-background.png";
import swal from 'sweetalert';

function Cards(props) {

  const alerta = () =>{
      swal("Exito","Gracias por contactarme!!","success" )
    
  }
  return (
    <div className="ContainerCard">
      <img className="logo" src={logo} alt="logo" />
      <img className="avatar" src={avatar} alt="avatar" />
      <h1>{props.name}</h1>
      <h3>Desarrollador Web / Front- end | React | Redux | NextJs | Js.</h3>
      <h4>Buenos Aires, Provincia de Buenos Aires, <strong>Argentina.</strong> </h4>
      <a className="info-contact" href="https://www.linkedin.com/in/alexis-miguel-lopez-garay-59b9241b8/overlay/contact-info/">Informacion de contactro</a>
      <button type="button" className="Button-Card" onClick={alerta}>Contactame</button>
    </div>
  );
}
export default Cards;
