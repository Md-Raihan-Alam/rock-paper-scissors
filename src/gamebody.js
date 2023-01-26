import pentagon from './img/bg-pentagon.svg';
import lizard from './img/icon-lizard.svg';
import paper from './img/icon-paper.svg';
import rock from './img/icon-rock.svg';
import scissor from './img/icon-scissors.svg';
import spock from './img/icon-spock.svg';
import React, { useEffect } from 'react'
import {win,loss} from "./actions/action"
import { useDispatch } from 'react-redux';
function Game()
{
  const [move,setMove]=React.useState("");
  const [compMove,setCompMove]=React.useState("");
  const [winner,setResult]=React.useState("");
  const dispatch=useDispatch();
    const computerChoice=()=>
    {
      let max = Math.floor(0);
      let min = Math.ceil(4);
      let index=Math.floor(Math.random() * (max - min + 1)) + min;
      let choices=['lizard','paper','rock','scissor','spock'];
      setCompMove((prevState)=>{
        return prevState=choices[index];
        
      })
      document.querySelector('.gameOption').style.display="none";
      document.querySelector('.resultMode').classList.remove('resultModeHide')
    }
    const playerChoice=(id)=>
    {
      let playerMove;
      if(id.hasAttribute('id'))
        playerMove=id.id;
      else
        playerMove=id.firstChild.id; 
      setMove((prevState)=>{
        return prevState=playerMove;
      })
      computerChoice();
    }
    const PlayerMoveDiv=()=>{
      useEffect(()=>{
        gameDecider(move,compMove);
      })
      if(move==='lizard')
      {
        return (
          <div className="ChoiceDiv">
          <div className={winner==="you win"?"playerChoiceHolder winner playerChoiceLizard":"playerChoiceHolder playerChoiceLizard"}>
            <img src={lizard} alt="player move"/>
          </div>
          <div className="choiceLetter">You picked</div>
          </div>
        )
      }
      if(move==='paper')
      {
        return (
          <div className="ChoiceDiv">
          <div className={winner==="you win"?"playerChoiceHolder winner playerChoicePaper":"playerChoiceHolder playerChoicePaper"}>
            <img src={paper} alt="player move"/>
          </div>
          <div className="choiceLetter">You picked</div>
          </div>
        )
      }
      if(move==='rock')
      {
        return (
          <div className="ChoiceDiv">
          <div className={winner==="you win"?"playerChoiceHolder winner playerChoiceRock":"playerChoiceHolder playerChoiceRock"}>
            <img src={rock} alt="player move"/>
          </div>
          <div className="choiceLetter">You picked</div>
          </div>
        )
      }
      if(move==='scissor')
      {
        return(
          <div className="ChoiceDiv">
          <div className={winner==="you win"?"playerChoiceHolder winner playerChoiceScissor":"playerChoiceHolder playerChoiceScissor"}>
            <img src={scissor} alt="player move"/>
          </div>
          <div className="choiceLetter">You picked</div>
          </div>
        )
      }
      if(move==='spock')
      {
        return (
          <div className="ChoiceDiv">
          <div className={winner==="you win"?"playerChoiceHolder winner playerChoiceSpock":"playerChoiceHolder playerChoiceSpock"}>
            <img src={spock} alt="player move"/>
          </div>
          <div className="choiceLetter">You picked</div>
          </div>
        )
      }
    }
    const ComputerMoveDiv=()=>{
      if(compMove==='lizard')
      {
        return (
          <div className="ChoiceDiv">
            <div className={winner==="you lose"?"computerChoiceHolder winner playerChoiceLizard":"computerChoiceHolder playerChoiceLizard"}>
            <img src={lizard} className="computerBox" alt="Computer move"/>
          </div>
          <div className="choiceLetter">the house picked</div>
          </div>
        )
      }
      if(compMove==='paper')
      {
        return (
          <div className="ChoiceDiv">
            <div className={winner==="you lose"?"computerChoiceHolder winner playerChoicePaper":"computerChoiceHolder playerChoicePaper"}>
              <img src={paper} className="computerBox" alt="Computer move"/>
            </div>
            <div className="choiceLetter">the house picked</div>
          </div>
        )
      }
      if(compMove==='rock')
      {
        return (
          <div className="ChoiceDiv">
            <div className={winner==="you lose"?"computerChoiceHolder winner playerChoiceRock":"computerChoiceHolder playerChoiceRock"}>
            <img src={rock} className="computerBox" alt="Computer move"/>
          </div>
          <div className="choiceLetter">the house picked</div>
          </div>
        )
      }
      if(compMove==='scissor')
      {
        return(
          <div className="ChoiceDiv">
            <div className={winner==="you lose"?"computerChoiceHolder winner playerChoiceScissor":"computerChoiceHolder playerChoiceScissor"}>
              <img src={scissor} className="computerBox" alt="Computer move"/>
            </div>
            <div className="choiceLetter">the house picked</div>
          </div>
        )
      }
      if(compMove==='spock')
      {
        return (
          <div className="ChoiceDiv">
              <div className={winner==="you lose"?"computerChoiceHolder winner playerChoiceSpock":"computerChoiceHolder playerChoiceSpock"}>
                <img src={spock} className="computerBox" alt="Computer move"/>
              </div>
              <div className="choiceLetter">the house picked</div>
          </div>
        )
      }
    }
    const gameDecider=(playerMove,botMove)=>{
      if(playerMove==="scissor" && botMove==="paper")
      {
        setResult((prevState)=>prevState="you win");
      }else if(playerMove==="paper" && botMove==="scissor")
      {
        setResult((prevState)=>prevState="you lose");
      }else if(playerMove==="scissor" && botMove==="lizard")
      {
        setResult((prevState)=>prevState="you win");
      }else if(playerMove==="lizard" && botMove==="scissor")
      {
        setResult((prevState)=>prevState="you lose");
      }else if(playerMove==="scissor" && botMove==="rock")
      {
        setResult((prevState)=>prevState="you lose");
      }else if(playerMove==="rock" && botMove==="scissor")
      {
        setResult((prevState)=>prevState="you win");
      }else if(playerMove==="scissor" && botMove==="spock")
      {
        setResult((prevState)=>prevState="you lose");
      }else if(playerMove==="spock" && botMove==="scissor")
      {
        setResult((prevState)=>prevState="you win");
      }else if(playerMove==="paper" && botMove==="rock")
      {
        setResult((prevState)=>prevState="you win");
      }else if(playerMove==="rock" && botMove==="paper")
      {
        setResult((prevState)=>prevState="you lose");
      }else if(playerMove==="paper" && botMove==="lizard")
      {
        setResult((prevState)=>prevState="you lose");
      }else if(playerMove==="lizard" && botMove==="paper")
      {
        setResult((prevState)=>prevState="you win");
      }else if(playerMove==="paper" && botMove==="spock")
      {
        setResult((prevState)=>prevState="you win");
      }else if(playerMove==="spock" && botMove==="paper")
      {
        setResult((prevState)=>prevState="you lose");
      }else if(playerMove==="rock" && botMove==="lizard")
      {
        setResult((prevState)=>prevState="you win");
      }else if(playerMove==="lizard" && botMove==="rock")
      {
        setResult((prevState)=>prevState="you lose");
      }else if(playerMove==="rock" && botMove==="spock")
      {
        setResult((prevState)=>prevState="you lose");
      }else if(playerMove==="spock" && botMove==="rock")
      {
        setResult((prevState)=>prevState="you win");
      }else if(playerMove==="lizard" && botMove==="spock")
      {
        setResult((prevState)=>prevState="you win");
      }else if(playerMove==="spock" && botMove==="lizard")
      {
        setResult((prevState)=>prevState="you lose");
      }else{
        setResult((prevState)=>prevState="draw");
      }
      console.log(winner);
      if(winner==="you win")
      {
        dispatch(win());
      }
      if(winner==="you lose")
      {
        dispatch(loss());
      }
    }
    const resetAll=()=>{
      setMove((prevState)=>{
        return prevState="";
      });
      setCompMove((prevState)=>{
        return prevState="";
      });
      setResult((prevState)=>{
        return prevState="";
      });
      document.querySelector(".gameOption").style.display="flex";
      document.querySelector(".resultMode").classList.add('resultModeHide');
    }
    return (
      <div className="vis">
        <div className="gameOption" id="gameOption">
        <div className="gameBox">
        <img src={pentagon} className="pentagon" id="pentagon" alt="pentagon"/>
          <div className="lizardBox" onClick={(e)=>playerChoice(e.target)}>
            <img src={lizard} className="lizard" id="lizard" alt="lizard"/>
          </div>
          <div className="paperBox" onClick={(e)=>playerChoice(e.target)}>
            <img src={paper} className="paper" id="paper" alt="paper"/>
          </div>
          <div className="rockBox" onClick={(e)=>playerChoice(e.target)}>
            <img src={rock} className="rock" id="rock" alt="rock"/>
          </div>
          <div className="scissorBox" onClick={(e)=>playerChoice(e.target)}>
            <img src={scissor} className="scissor" id="scissor" alt="scissor"/>  
         </div>
          <div className="spockBox" onClick={(e)=>playerChoice(e.target)}>
            <img src={spock} className="spock" id="spock" alt="spock"/>
          </div>
        </div>
      </div>
      <div className="resultMode resultModeHide">
        <div className="showResult">
          {PlayerMoveDiv()}
          <div className="declareResult mediaStatusTab">
          <div className="resultAnnounce">{winner}</div>
          <button className="btnReset" onClick={resetAll}>play again</button>
        </div>
          {ComputerMoveDiv()}
        </div>
        <div className="declareResult mediaStatusMob">
          <div className="resultAnnounce">{winner}</div>
          <button className="btnReset" onClick={resetAll}>play again</button>
        </div>
      </div>
      </div>
    )
}
export default Game;