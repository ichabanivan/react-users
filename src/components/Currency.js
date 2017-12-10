import React, {Component} from 'react';
import $ from 'jquery'
import {count} from 'actions/'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    currency: state.Count
  }
};

@connect(mapStateToProps, {count})
export default class Currency extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    from: 'USD',
    to: 'USD',
    value: 1
  };
  
  changeFrom(e) {
    this.setState({
      from: e.target.value
    });
  }

  changeTo(e) {
    this.setState({
      to: e.target.value
    });
  }

  onInput(e) {
    this.setState({
      value: e.target.value
    });
  }

  onCalc() {
    let self = this;
    $.ajax({
      url: `https://api.fixer.io/latest?base=${this.state.from}`,
      success: function(currency){
        self.props.count(currency, self.state)
      }
    })
  }

  render() {
    return (
      <div>
        <div className="h2">Currency calculator</div>

        <form>
            <div className="row">
                <div className="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="from_currency">From:</label>
                        <select className="form-control" onChange={::this.changeFrom}>
                            <option>USD</option>
                            <option>EUR</option>
                            <option>RUB</option>
                        </select>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="from_currency">To:</label>
                        <select className="form-control" onChange={::this.changeTo}>
                            <option>USD</option>
                            <option>EUR</option>
                            <option>RUB</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <input type="number" className="form-control" placeholder="Enter value" onChange={::this.onInput} value={this.state.value}/>
            </div>
            <div className="form-group">
                <button type="button" className="btn btn-info" onClick={::this.onCalc}><i className="fa fa-calculator" aria-hidden="true" /> Calculate</button>
            </div>
            <div className="form-group">
                <div className="help-block">Result:</div>
                <div className="help-block"><i className="fa fa-money currency__sign" aria-hidden="true" />{this.props.currency.count}</div>
            </div>
        </form>
      </div>
    );
  }
}