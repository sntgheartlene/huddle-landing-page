import './header.scss';
import logo from '../assets/svg/logo.svg';

const Header = () => {
    return (
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
    );
}

export default Header;