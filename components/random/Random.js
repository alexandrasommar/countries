const React = require('react');
import Home from '../home/Home';
require('./random.css');

function Random (props) {
    let facts = props.randomData.map(( item, index) => {
        return <ul key={index}>
                    <li>{item.name} has a population of {item.population}</li>
                    <li>Their nativename is {item.nativeName}</li>
                    <li>And their top level domain is {item.topLevelDomain.map( (level, index) =>{
                        return <span key={index}>{level}</span>
                        })}?
                    </li>
                </ul>
    })

    return (
        <div className='random'>
            <h2>Did you know?</h2>
            {facts}
            <Home />
        </div>
    )
}


export default Random;
