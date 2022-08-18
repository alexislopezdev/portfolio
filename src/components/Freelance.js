import { useState } from "react";

function Freelance(props) {
  const [buttonFree, buttonFreeSet] = useState(true);

  function clickButton() {
    buttonFreeSet(buttonFree === false);
  }

  function volver() {
    buttonFreeSet(!buttonFree);
  }

  if (buttonFree) {
    return (
      <div className="Container-info">
        <h3 className="Title-info">{props.title}</h3>
        <div className="Row-info">
          <button className="Button-freelance2" onClick={clickButton}>
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="Container-info2">
      <h3 className="Title-info">{props.title}</h3>
      <div className="Row-info">
        <h2>Servicios</h2>
        <p className="Service-text">
          Landing Page<br/> E-commerce<br/> Wordpress<br/> Empresarial<br/> Personalizado<br/>
        </p>
        <button onClick={volver} className="Button-freelance">
          volver
        </button>
      </div>
    </div>
  );
}

export default Freelance;
