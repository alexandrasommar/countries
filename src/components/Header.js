const React = require('react');
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import About from './About';

const Header = () => (
    <Router>
        <div>
            <Link to="/about">About</Link>
            <Link to="/">Home</Link>


            <Route path="/about" component={About} />
            <Route path="/"  />
        </div>

    </Router>
)

export default Header;
