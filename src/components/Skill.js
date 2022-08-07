import CardSkill from "./Card-Skill";
import Rick from "../images/rickandmortyapi.png"
import Task from "../images/App task capture.png"

function Skills() {
  return (
    <div className="Skill-container">
      <CardSkill
      proyect = "https://app-task-seven.vercel.app/"
      title="RickandMorty" 
      technologies="React"
      image={Rick}
      >
      </CardSkill>
      <CardSkill 
      proyect = "https://app-task-seven.vercel.app/"
      title="Crud" 
      technologies="React"
      image="https://www.civitatis.com/blog/wp-content/uploads/2021/03/alquezar-huesca-pueblo-montana.jpg"
      >
      </CardSkill>
      <CardSkill 
      proyect = "https://app-task-seven.vercel.app/"
      title="SupeHeroes" 
      technologies="React"
      image="https://www.eliberico.com/wp-content/uploads/2021/09/pueblos-en-reino-unido-750x375.jpg"
      >
      </CardSkill>
      <CardSkill 
      proyect = "https://app-task-seven.vercel.app/"
      title="App Task" 
      technologies="React"
      image={Task}
      >
      </CardSkill>
    </div>
  );
}

export default Skills;
