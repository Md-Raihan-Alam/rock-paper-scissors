import logoText from './img/logo-bonus.svg';
import { useSelector } from 'react-redux';
function Header(){
  const score=useSelector(state=>state)
    return (
        <div className="header">
        <div className="header_box">
          <img src={logoText} class="logo" alt="LogoText"/>
          <div className="scoreBox">
            <div className="scoreHeader">
              score
            </div>
            <div className="totalScore">
              {score}
            </div>
          </div>
        </div>
      </div>
    );
}
export default Header;