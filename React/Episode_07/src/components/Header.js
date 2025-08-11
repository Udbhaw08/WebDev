import { LOGO_URL } from '../utils/constants';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  //   let btnName = 'Login';

  const [btnNameReact, setBtnNameReact] = useState('Login');
  console.log('header render');


  //if no dependency array useEffect is called on every component render
  //if dependency array is empty []=> useEffect is called on intial render(just once)
 //if dependency is array is [btnNameReact]=> everyime btnNameReact is updated

  useEffect(()=>{
    console.log('useEffect is rendered')
  }, [btnNameReact])

  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="App Logo" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li> <Link to="/">Home</Link></li>
          <li> <Link to="/about">About</Link></li>

          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li><Link to="/cart">Cart</Link></li>
          <button
            className="loginBtn"
            onClick={() => {
              //   btnName = 'Logout';
              btnNameReact === 'Login'
                ? setBtnNameReact('Logout')
                : setBtnNameReact('Login');
              console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
