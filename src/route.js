import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import App from './App';
import Home from './Home';

export default function Routes(props){
    const routes = [
        {
            path: '/app',
            component: App
        }, {
            path: '/home',
            component: Home
        }
    ]

    return (
        <Router>
            <Switch>
                {routes.map((route, index) => {
                    return <Route exact key={index}
                        path={route.path} component={route.component} />
                })}
                <Route component={Home} />
            </Switch>

        </Router>
    )

}

