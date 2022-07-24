import CardSkill from "./Card-Skill";
import Rick from "../images/rickandmortyapi.png"

function Skills() {
  return (
    <div className="Skill-container">
      <CardSkill 
      title="RickandMorty" 
      technologies="React"
      image={Rick}
      >
      </CardSkill>
      <CardSkill 
      title="Crud" 
      technologies="React"
      image="https://www.civitatis.com/blog/wp-content/uploads/2021/03/alquezar-huesca-pueblo-montana.jpg"
      >
      </CardSkill>
      <CardSkill 
      title="SupeHeroes" 
      technologies="React"
      image="https://www.eliberico.com/wp-content/uploads/2021/09/pueblos-en-reino-unido-750x375.jpg"
      >
      </CardSkill>
      <CardSkill 
      title="ApiApp" 
      technologies="React"
      image="https://ep01.epimg.net/elviajero/imagenes/2019/12/17/album/1576574428_885222_1576575809_noticia_normal_recorte1.jpg"
      >
      </CardSkill>
    </div>
  );
}

export default Skills;
