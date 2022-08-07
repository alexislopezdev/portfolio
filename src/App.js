import "./App.css";
import Acerca from "./components/Card-Acerca";
import Cards from "./components/Cards";
import Info from "./components/Info";
import Skills from "./components/Skill";
import Technology from "./components/Technology";
import Freelance from "./components/Freelance";
import Blog from "./components/Blog";
import Activities from "./components/Activities";

function App() {
  return (
    <div className="Container-main">
      <div className="App">
        <Cards name="Alexis Miguel Lopez Garay"></Cards>
        <Acerca></Acerca>
        <Skills></Skills>
      </div>
      <div className="App2">
        <Info title="Información "></Info>
        <Technology></Technology>
        <Activities title="Actividad"></Activities>
        <Blog title="Blog"></Blog>
        <Freelance title="Freelance"></Freelance>
      </div>
    </div>
  );
}

export default App;
