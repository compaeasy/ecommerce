import LogoSvg from '../../image/logo.svg';
import Burger from '../../image/icon-menu.svg';
import IconCart from '../../image/icon-cart.svg';
import Avatar from '../../image/image-avatar.png';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__left">
          <img src={Burger} id="menu-btn" alt="menu" className="header__burger" />{' '}
          <img src={LogoSvg} alt="logo" className="header__logo" />
          <ul className="header__menu">
            <li className="header__item">Collections</li>
            <li className="header__item">Men</li>
            <li className="header__item">Women</li>
            <li className="header__item">About</li>
            <li className="header__item">Contact</li>
          </ul>
          <div className="header__right">
            <button>
              <img src={IconCart} alt="cart" className="header__cart" />
            </button>
          </div>
          <img src={Avatar} alt="avatar" className="header__avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
