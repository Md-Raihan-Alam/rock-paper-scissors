import './App.css';
import Header from './header';
import Game from './gamebody';
import Rule from './rule'
import RuleBtn from './ruleBtn';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Game></Game>
      <Rule></Rule>
      <RuleBtn></RuleBtn>
    </div>
  );
}

export default App;
