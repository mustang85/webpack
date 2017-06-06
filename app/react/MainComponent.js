import React, { Component } from 'react';
import UsersComponent from './UsersComponent';
import FxRatesComponent from './FxRatesComponent';

class MainComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div>
          <h1>
            <i className="fa fa-user fa-lg"></i>
            Users
          </h1>
          <UsersComponent />
        </div>
        <div>
          <h1>Daily Fx Rates</h1>
          <FxRatesComponent baseCurrency='USD' />
        </div>
      </div>
    );
  }
}


export default MainComponent;
