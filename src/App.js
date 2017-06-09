const React = require('react');
const ReactDOM = require('react-dom');
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

const PropTypes = require('prop-types');
import Continent from './components/Continent';

import Button from './components/Button';
import Header from './components/Header';
require('./index.css');

// state
// life cycle event
// UI

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            continent: []
        }
    }


    showInfo (event) {
        let country = event.target.value.toLowerCase();
        country === 'america' ? country = 'americas' : country = country;

        fetch('https://restcountries.eu/rest/v2/region/' + country)
        .then(response => response.json())
        .then(data => {
            this.setState({ continent: data })
        });

    } //TO DO: se till att knappen döljs när den har klickats!

    render() {

        let countries = this.state.continent.map((country, index) => {
            return <div key={index} className="country">
                        <div>
                            <h2>{country.name}</h2>
                            <p>Native name: {country.nativeName}</p>
                            <p>Capital: {country.capital}</p>
                            <p>Population: {country.population}</p>
                            <h3>Language</h3> {country.languages.map((language, index) => {
                                return <p key={index}>{language.name}</p>
                            })}
                            <i className="fa fa-money fa-4x" aria-hidden="true"></i><h3>Currency</h3> {country.currencies.map((currency, index) => {
                                return <p key={index}>{currency.name}</p>
                            })}
                        </div>
                        <div>
                            <img src={country.flag} />
                        </div>

                    </div>
        });
        return (

            <div className="App">
                <i className="fa fa-globe" aria-hidden="true"></i>
                <h1>The World</h1>
                <Header />
                <Continent showInfo={this.showInfo.bind(this)} />
                {countries}
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
