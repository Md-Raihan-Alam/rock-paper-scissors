import './App.css'
function RuleBtn()
{
    const openRules=()=>{
        document.querySelector('.ruleDiv').style.display="flex";
      }
    return (
        <div className="btnDiv">
            <div className="btnContainer">
              <button onClick={openRules} className="btn">rules</button>
            </div>
        </div>
    )
}
export default RuleBtn