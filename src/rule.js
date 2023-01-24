import './App.css'
import close from './img/icon-close.svg'
import gameRuleBonus from './img/image-rules-bonus.svg';
function Rule()
{
    const closeRules=()=>{
        document.querySelector('.ruleDiv').style.display="none";
      }
    return (
        <div>
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
    </div>
    )
}
export default Rule