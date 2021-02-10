import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, BrowserRouter  } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

import Home from './components/Home/Home';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar'
import Africa from './components/Regions/Africa';
import Americas from './components/Regions/Americas'
import Asia from './components/Regions/Asia';
import Europe from './components/Regions/Europe';
import Oceania from './components/Regions/Oceania';


export class App extends Component {
    
    render() {
        return (
            <div>
              
                <Provider store={createStore(reducer)}>
                    <BrowserRouter>
                    <Router>
                        <SideBar/>
                        <Header/>
                        <Switch>
                            <Route path="/" exact={true} component={Home} />
                            <Route path="/africa" component={Africa} />
                            <Route path="/americas" component={Americas} />
                            <Route path="/asia" component={Asia} />
                            <Route path="/europe" component={Europe} />
                            <Route path="/oceania" component={Oceania} />
                            
                            
                        </Switch>
                    </Router>
                </BrowserRouter>
                
                </Provider>
                
                
           </div>
                       
        )
    }
}

export default App;
