import CardSkill from "./Card-Skill";
import Rick from "../images/rickandmortyapi.png"
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
      proyect = "https://app-task-seven.vercel.app/"
      title="Spx Nutrition" 
      technologies="Bootstrap"
      image={Spx}
      >
      </CardSkill>
      <CardSkill 
      proyect = "https://app-task-seven.vercel.app/"
      title="Nautica Torres" 
      technologies="Bootstrap"
      image={Nauticatorres}
      >
      </CardSkill>
      <CardSkill
      proyect = "https://app-task-seven.vercel.app/"
      title="RickandMorty" 
      technologies="React"
      image={Rick}
      >
      </CardSkill>
    </div>
  );
}

export default Skills;
