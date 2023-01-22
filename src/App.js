import './App.css';
import Header from './header';
import Game from './gamebody';
import gameRuleBonus from './img/image-rules-bonus.svg';
import close from './img/icon-close.svg'
function App() {
const openRules=()=>{
  document.querySelector('.ruleDiv').style.display="flex";
}
const closeRules=()=>{
  document.querySelector('.ruleDiv').style.display="none";
}
  return (
    <div className="App">
      <Header></Header>
      <Game className="vis"></Game>
      <div className="ruleDiv">
        <div className="imgRule">
          <div className="ruleHeader">
            <div className="headerText">rules</div>
            <img src={close} onClick={closeRules} className="closeSign otherClose" alt="close"/>
          </div>
          <img src={gameRuleBonus} className="gameRules" alt="gameRules"/>
          <div className="ruleClose mobileClose">
            <img src={close} onClick={closeRules} className="closeSign" alt="close"/>
          </div>
        </div>
      </div>
      <div className="btnDiv">
        <div className="btnContainer">
          <button onClick={openRules} className="btn">rules</button>
        </div>
      </div>
    </div>
  );
}

export default App;
