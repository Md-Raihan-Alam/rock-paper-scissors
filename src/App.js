import './App.css';
import Header from './header';
import pentagon from './img/bg-pentagon.svg';
import lizard from './img/icon-lizard.svg';
import paper from './img/icon-paper.svg';
import rock from './img/icon-rock.svg';
import scissor from './img/icon-scissors.svg';
import spock from './img/icon-spock.svg';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="gameOption">
          <img src={pentagon} className="pentagon" alt="pentagon"/>
          <img src={lizard} className="lizard" alt="lizard"/>
          <img src={paper} className="paper" alt="paper"/>
          <img src={rock} className="rock" alt="rock"/>
          <div className="scissorBox">
          <img src={scissor} className="scissor" alt="scissor"/>  
          </div>
          <img src={spock} className="spock" alt="spock"/>
      </div>
    </div>
  );
}

export default App;
