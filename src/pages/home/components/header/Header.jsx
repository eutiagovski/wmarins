import './header.scss';

const Header = () => {
  return (
    <div className="header" id='home'>
        <div className="header-container">
            <span><div className="purple">marins</div>wallace</span>
            <span>{new Date().getFullYear()}</span>
        </div>
    </div>
  )
}

export default Header
