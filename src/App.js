const React = require('react');
const ReactDOM = require('react-dom');
import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom';

import Continent from './components/Continent';
import Button from './components/Button';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Random from './components/Random';
import Scroll from './components/ScrollToTop';

require('./index.css');

// state
// life cycle event
// UI

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            continent: [],
            random: []
        }
    }

    random () {
        fetch('https://restcountries.eu/rest/v2/name/united')
        .then(response => response.json())
        .then(data => {
            this.setState({ random: data })
        });
    }

    showInfo (event) {
        let country = event.target.value.toLowerCase();
        country === 'america' ? country = 'americas' : country = country;

        fetch('https://restcountries.eu/rest/v2/region/' + country)
        .then(response => response.json())
        .then(data => {
            this.setState({ continent: data })
        });
    }

    scroll(event) {
        console.log(event)
    }

    render() {

        let countries = this.state.continent.map((country, index) => {
            return <div key={index} className='country'>
                        <div>
                            <h2>{country.name}</h2>
                            <p>Native name: {country.nativeName}</p>
                            <p>Capital: {country.capital}</p>
                            <p>Population: {country.population}</p>
                            <h3>Language</h3> {country.languages.map((language, index) => {
                                return <p key={index}>{language.name}</p>
                            })}
                            <h3>Currency</h3> {country.currencies.map((currency, index) => {
                                return <p key={index}>{currency.name}</p>
                            })}
                        </div>
                        <div>
                            <img src={country.flag} />
                        </div>

                    </div>
        });
        return (
            <Router>
                <div className='App'>
                    <Header />
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/random' render={() => <Random randomData={this.state.random} random={this.random()} />} />
                    <Route path='/continent' render={() => <Continent showInfo={this.showInfo.bind(this)} countries={countries} />} />
                    <Scroll />
                </div>
            </Router>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
