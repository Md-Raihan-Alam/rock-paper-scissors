import pentagon from './img/bg-pentagon.svg';
import lizard from './img/icon-lizard.svg';
import paper from './img/icon-paper.svg';
import rock from './img/icon-rock.svg';
import scissor from './img/icon-scissors.svg';
import spock from './img/icon-spock.svg';
function Game()
{
    function playerChoice()
    {
      
    }
    return (
      <div className="vis">
        <div className="gameOption" id="gameOption">
        <div className="gameBox">
        <img src={pentagon} className="pentagon" id="pentagon" alt="pentagon"/>
          <div className="lizardBox">
            <img src={lizard} className="lizard" id="lizard" alt="lizard"/>
          </div>
          <div className="paperBox">
            <img src={paper} className="paper" id="paper" alt="paper"/>
          </div>
          <div className="rockBox">
            <img src={rock} className="rock" id="rock" alt="rock"/>
          </div>
          <div className="scissorBox">
            <img src={scissor} className="scissor" id="scissor" alt="scissor"/>  
         </div>
          <div className="spockBox">
            <img src={spock} className="spock" id="spock" alt="spock"/>
          </div>
        </div>
      </div>
      </div>
    )
}
export default Game;