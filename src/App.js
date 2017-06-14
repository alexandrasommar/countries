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
            random: [],
            loading: true
        }
    }

    componentDidMount() {
        this.setState({loading: false});
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
        // console.log(event)
    }

    render() {
        const loading = this.state.loading;
        if(loading) {
            return <div className='App'>
                        <i className='fa fa-spinner fa-pulse fa-3x fa-fw'></i>
                        <span className='sr-only'>Loading...</span>
                    </div>;
        }
        return (
            <Router>
                <div className='App'>
                    <Header />
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/random' render={() => <Random randomData={this.state.random} random={this.random()} />} />
                    <Route path='/continent' render={() => <Continent showInfo={this.showInfo.bind(this)} countries={this.state.continent} />} />
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
