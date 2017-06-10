const React = require('react');

class Random extends React.Component {
    constructor () {
        super();
        this.state = {
            random: []
        }
    }

    getRandomNumber (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    componentDidMount () {
        fetch('https://restcountries.eu/rest/v2/name/united')
        .then(response => response.json())
        .then(data => {
            this.setState({ random: data })
        });
    }
    render () {

        let facts = this.state.random.map(( item, index) => {
            return <ul key={index}>
                        <li>{item.name} has a poinpulation of {item.population}</li>
                        <li>Their nativename is {item.nativeName}</li>
                        <li>And their top level domain is {item.topLevelDomain.map( (level, index) =>{
                            return <span key={index}>{level}</span>
                            })}?
                        </li>
                    </ul>
        })

        return (
            <div>
                <h2>Did you know?</h2>
                {facts}
            </div>
        )
    }
}

export default Random;
