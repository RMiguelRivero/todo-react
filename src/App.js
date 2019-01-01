import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppHeader from './components/app-header/app-header';
import AboutPage from './pages/about.page';
import TodoAppPage from './pages/todo-app.page';
import NotFoundPage from './pages/not-found';
import './App.css';


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <AppHeader/>
                    <main>
                        <Switch>
                            <Route path="/" exact component={TodoAppPage} />
                            <Route path="/about" exact component={AboutPage} />
                            <Route component={NotFoundPage} />
                        </Switch>
                    </main>
                </div>
            </Router>
        );
    }
}

export default App;
