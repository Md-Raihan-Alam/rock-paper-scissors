import logoText from './img/logo-bonus.svg';
function Header(){
    return (
        <div className="header">
        <div className="header_box">
          <img src={logoText} class="logo" alt="LogoText"/>
          <div className="scoreBox">
            <div className="scoreHeader">
              score
            </div>
            <div className="totalScore">
              12
            </div>
          </div>
        </div>
      </div>
    );
}
export default Header;