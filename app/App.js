const React = require('react');
const ReactDOM = require('react-dom');
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
} from 'react-router-dom';

import Continent from '../components/continent/Continent';
import Button from '../components/button/Button';
import Header from '../components/header/Header';
import Home from '../components/home/Home';
import About from '../components/about/About';
import Random from '../components/random/Random';
import Scroll from '../components/toTop/ScrollToTop';

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
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/about' component={About} />
                        <Route path='/random' render={() => <Random randomData={this.state.random} random={this.random()} />} />
                        <Route path='/continent' render={() => <Continent showInfo={this.showInfo.bind(this)} countries={this.state.continent} />} />
                        <Route render={() => {
                            return <div className='App'>Not Found</div>
                        }} />
                    </Switch>
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