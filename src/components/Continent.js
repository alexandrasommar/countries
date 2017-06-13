const React = require('react');
import Button from './Button';
import Home from './Home';

function Continent (props) {
    return (
        <div className="continent">
            <Button click={props.showInfo}>Asia</Button>
            <Button click={props.showInfo}>America</Button>
            <Button click={props.showInfo}>Africa</Button>
            <Button click={props.showInfo}>Europe</Button>
            <Button click={props.showInfo}>Oceania</Button>
            {props.countries}
            <Home />
        </div>
    )
}

export default Continent;
