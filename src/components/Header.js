const React = require('react');
import {
    NavLink
} from 'react-router-dom';



const Header = () => (
        <div className="navigation">
            <NavLink exact to="/">Home</NavLink> |
            <NavLink to="/about">About</NavLink>
            <NavLink to="/random">Random</NavLink>|
            <NavLink to="/continent">Continents</NavLink>
        </div>
)

export default Header;
