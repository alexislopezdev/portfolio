import git from "../images/github-icon.svg";
import linkedln from "../images/linkedin-icon.svg";
import email from "../images/gmail-icon.svg";
import cv from "../images/cv.png"
import cvpdf from "../images/Alexis (CV Developer) (2).png"

function Info(props) {
  return (
    <div className="Container-info">
      <h3 className="Title-info">{props.title}</h3>
      <div className="Row-info">
        <a href="https://github.com/alexislopezdev" target="blank">
          <img className="Image-git" src={git} alt="/"></img>
        </a>
        <a href="https://www.linkedin.com/in/alexis-miguel-lopez-garay-59b9241b8/" target="blank">
          <img className="Image-git" src={linkedln} alt="/"></img>
        </a>
        <a href="mailto:alexis.lopez201863@yahoo.com? Subject=Aquí%20el%20asunto%20del%20mail" target="blank">
          <img className="Image-git" src={email} alt="/"></img>
        </a>
        <a href={cvpdf} download>
          <img className="Image-git" src={cv} alt="/"></img>
        </a>
      </div>
    </div>
  );
}

export default Info;
