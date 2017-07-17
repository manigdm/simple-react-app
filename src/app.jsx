import React, { Component } from 'react';
// Import routing components
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Main from './common/main.component.jsx'
import Home from './common/home.component.jsx'
import About from './common/about.component.jsx'
import Car from './car/car.component.jsx'
import CarDetail from './car/car-detail.component.jsx'

class App extends Component {
    render() {
        return (
            <Router>
                <Main>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/cars" component={Car}/>
                        <Route path="/car/:id" component={CarDetail}/> 
                        <Route path="/about" component={About}/>
                    </Switch>
                </Main>
            </Router>
        );
    }
}

export default App
