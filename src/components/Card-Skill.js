function CardSkill(props) {
  return (
    <div className="ContainerCard-Skills">
      <h2 className="Title-Skill"><a href={props.proyect}>{props.title}</a></h2>
      <h5>{props.technologies}</h5>
      <img
        className="Crud-img"
        alt="#"
        src={props.image}
      />
    </div>
  );
}

export default CardSkill;
