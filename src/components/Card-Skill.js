import View from "../images/view.png";
import Description from "../images/edit-info.png";
import { useState } from "react";
function CardSkill(props) {
  const [description,setdescription] = useState(false);

  function Preview() {
    return window.location.href = "https://app-task-seven.vercel.app/"
  }
  
  function modal(){
    setdescription(true)
  }
  function modalClose(){
    setdescription(false)
  }
  return (
    <>
      {description ? (
        <div className="ContainerCard-Skills">
          <h2 className="Title-Skill">
            <a href={props.proyect}>{props.title}</a>
          </h2>
          <h5>{props.technologies}</h5>
          <div className="description">
            <h4>
              A fullstack project simulating an e-commerce inspired by Boston
              Hype. Developed using Next.js and a capable based architecture
              where users can search and purchase products using MercadoPago as
              payment processor.
            </h4>
            <button onClick={modalClose} className="Button-previews">
              <img className="image-previews" src={Description} alt="#"></img>
              <span>Description</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="ContainerCard-Skills">
          <h2 className="Title-Skill">
            <a href={props.proyect}>{props.title}</a>
          </h2>
          <h5>{props.technologies}</h5>
          <div className="Skill-description">
            <img className="Crud-img" alt="#" src={props.image} />
            <div>
              <button onClick={Preview} className="Button-previews">
                <img className="image-previews" src={View} alt="#"></img>
                <span>Preview</span>
              </button>
              <button onClick={modal} className="Button-previews">
                <img className="image-previews" src={Description} alt="#"></img>
                <span>Description</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CardSkill;
