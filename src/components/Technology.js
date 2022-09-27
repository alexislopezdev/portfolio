import skillImg from "../images/codigo.png";

function Technology() {
  return (
    <div className="Container-technology">
      <div className="Row">
        <h2> Technology</h2>
        <h3 className="technology-subtitle">
          Software Skills
        </h3>
        <img className="skillImg" src={skillImg} alt="#"></img>
        <ul className="list">
          <li>HTML.</li>
          <li>CSS. </li>
          <li>Bootstrap.</li>
          <li>Javascript.</li>
          <li>React.Js.</li>
          <li>Next.js</li>
          <li>Redux.</li>
          <li>Figma.</li>
          <li>Github y git.</li>
          <li>Markdown.</li>
        </ul>
      </div>
    </div>
  );
}

export default Technology;
