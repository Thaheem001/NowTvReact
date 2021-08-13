import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Opt1 from './Opt1';
import Opt2 from './Opt2';
import Opt3 from './Opt3';
import Opt4 from './Opt4';


const RightBoxMain = () => {
    return (
        <div className="RightBox">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Home" component={Home} />
                <Route exact path="/opt1" component={Opt1} />
                <Route exact path="/opt2" component={Opt2} />
                <Route exact path="/opt3" component={Opt3} />
                <Route exact path="/opt4" component={Opt4} />
            </Switch>
        </div>
    );
};
export default RightBoxMain;