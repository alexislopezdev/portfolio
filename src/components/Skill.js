import CardSkill from "./Card-Skill";
import CardsCss from "../images/Cardscss.png"
import Task from "../images/App task capture.png"
import Spx from "../images/Spx.png"
import Nauticatorres from "../images/nauticatorres.png"

function Skills() {
  return (
    <div className="Skill-container">
      <CardSkill 
      proyect = "https://app-task-seven.vercel.app/"
      title="App Task" 
      technologies="React"
      image={Task}
      >
      </CardSkill>
      <CardSkill 
      proyect = "http://spxnutritionmax.com.ar/"
      title="Spx Nutrition" 
      technologies="Bootstrap"
      image={Spx}
      >
      </CardSkill>
      <CardSkill 
      proyect = "http://nauticatorres.com.ar/"
      title="Nautica Torres" 
      technologies="Bootstrap"
      image={Nauticatorres}
      >
      </CardSkill>
      <CardSkill
      proyect = "https://cardscss.vercel.app/"
      title="Cards Css" 
      technologies="Html Css"
      image={CardsCss}
      >
      </CardSkill>
    </div>
  );
}

export default Skills;
