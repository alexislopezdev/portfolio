import BlogImage from "../images/blogging.png";

function Blog(props) {
  return (
    <div className="Container-info">
      <h3 className="Title-info">{props.title}</h3>
      <div className="Row-info">
        <div className="Card-blog">
          <img className="Blog-image" src={BlogImage} alt="#"></img>
        </div>
      </div>
    </div>
  );
}

export default Blog;
