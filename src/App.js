import './App.css';
import blue from "./images/blue.png"
import green from "./images/green.png"
import red from "./images/red.png"
import yellow from "./images/yellow.png"
import Content from "./Components/Content"
import MouseFollower from "./Components/MouseFollower"

function App() {
  return (
    <div className="h-[100vh] flex justify-center items-center  bg-[#123457]">
      <img className = "fixed move1 lg:top-[80vh] lg:left-[10vw] top-[90vh] left-[20vw]" src = {blue} alt = ""/>
      <img className = "fixed move2 lg:top-[80vh] lg:left-[20vw] top-[90vh] left-[50vw]" src={yellow} alt = "" />
      <img className = "fixed move3 lg:bottom-[80vh] lg:right-[20vw] bottom-[90vh] right-[20vw]" src = {red} alt = "" />
      <img className = "fixed move4 lg:bottom-[80vh] lg:right-[10vw] bottom-[90vh] right-[50vw]" src = {green} alt = "" />
      <Content className="" />
      <MouseFollower />
    </div>
  );
}

export default App;
