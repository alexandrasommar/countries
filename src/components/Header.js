const React = require('react');
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import About from './About';
import Random from './Random';
import Continent from './Continent';
import Home from './Home';

const Header = (props) => (
    <Router>
        <div className="navigation">
            <p><Link to="/">Home</Link> |</p>
            <p><Link to="/about">About</Link> |</p>
            <p><Link to="/random">Random</Link> |</p>
            <p><Link to="/continent">Continents</Link></p>

            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/random" component={Random} />
            <Route path="/continent" render={() => <Continent showInfo={props.showInfo} countries={props.countries} />}/>

        </div>

    </Router>
)

export default Header;
