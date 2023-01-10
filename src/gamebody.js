import pentagon from './img/bg-pentagon.svg';
import lizard from './img/icon-lizard.svg';
import paper from './img/icon-paper.svg';
import rock from './img/icon-rock.svg';
import scissor from './img/icon-scissors.svg';
import spock from './img/icon-spock.svg';
function Game()
{
    return (
        <div className="gameOption">
        <div className="gameBox">
        <img src={pentagon} className="pentagon" alt="pentagon"/>
          <div className="lizardBox">
            <img src={lizard} className="lizard" alt="lizard"/>
          </div>
          <div className="paperBox">
            <img src={paper} className="paper" alt="paper"/>
          </div>
          <div className="rockBox">
            <img src={rock} className="rock" alt="rock"/>
          </div>
          <div className="scissorBox">
            <img src={scissor} className="scissor" alt="scissor"/>  
         </div>
          <div className="spockBox">
            <img src={spock} className="spock" alt="spock"/>
          </div>
        </div>
      </div>
    )
}
export default Game;