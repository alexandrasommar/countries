const React = require('react');
import Button from './Button';
import Continent from './Continent';

function Asia (props) {
    console.log(props)

        return (

            <div className="continent">
                <Button click={props.showInfo}>Asia</Button>
            </div>
        )
    }


export default Asia;
