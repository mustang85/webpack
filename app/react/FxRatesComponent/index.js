import React, { Component } from 'react';
import getFxRates from 'sectionTheeSolution';

require('./styles');

class FxRatesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixerResponse: []
    };
  }

  componentDidMount() {
    getFxRates(this.props.baseCurrency, fixerResponse => {
      this.setState({
        fixerResponse
      });
    });
  }

  render() {
    let dailyRates = [];
    const { fixerResponse: { rates, date } } = this.state;

    const { baseCurrency } = this.props;

    console.log(date);

    for(const currency in rates) {
      const rate = rates[currency];
      dailyRates.push(<li className="list-group-item" key={currency}> { currency } - <i className="fa fa-usd fa-2x">{ rate }</i></li>);
    }

    return (
      <div id="fx">
        <h2>Base { baseCurrency } Data <i className="fa fa-calendar fa-lg">{ date }</i></h2>
        <ul className="list-group">
          { dailyRates }
        </ul>
      </div>
    );
  }
}

export default FxRatesComponent;
