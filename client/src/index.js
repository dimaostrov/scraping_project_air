import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'react-table/react-table.css'
import './index.css';
import 'react-datasheet/lib/react-datasheet.css';
import App from './components/App';
import Login from './components/Login';
// import Register from './components/Register';

const RoutedApp = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={App}/>
        <Route path='/login' component={Login}/>
      </div>
    </Router>
  )
}

//<Route exact path='/register' component={Register}/>



ReactDOM.render(<RoutedApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
