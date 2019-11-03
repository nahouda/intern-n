import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import firstpage from './my-components/firstpage';
import secondpage from './my-components/secondpage';

import './App.css';

class App extends Component {
  render() {
      return (
          <div>
             <Route exact path="/" component={firstpage} />
             <Route exact path="/secondpage/:id" component={secondpage} />
                
              
          </div>
      );
  }
}

export default App;