const React = require('react');
import {
    NavLink
} from 'react-router-dom';
import Button from './Button';
import Home from './Home';

function Continent (props) {
    let countries = props.countries.map((country, index) => {
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
    });//Lägga in som en länk här? Så en skickas till Asia??
    return (
        <div className="continent">
            <Button click={props.showInfo}>Asia</Button>
            <Button click={props.showInfo}>America</Button>
            <Button click={props.showInfo}>Africa</Button>
            <Button click={props.showInfo}>Europe</Button>
            <Button click={props.showInfo}>Oceania</Button>
            {countries}
            <Home />
        </div>
    )
}

export default Continent;
