import React, {Component} from 'react';

/**
 * Styles for application
 */
import '../../node_modules/normalize.css/normalize.css';
import 'assets/css/style.scss';

export default class Users extends Component {
  constructor(props) {
    super(props)
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
                        <select className="form-control">
                            <option>USD</option>
                            <option>EUR</option>
                            <option>RUB</option>
                        </select>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="from_currency">To:</label>
                        <select className="form-control">
                            <option>USD</option>
                            <option>EUR</option>
                            <option>RUB</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Enter value" />
            </div>
            <div className="form-group">
                <button type="button" className="btn btn-info">Calculate</button>
            </div>
            <div className="form-group">
                <div className="help-block">Result:</div>
                <div className="help-block"></div>
            </div>
        </form>
      </div>
    );
  }
}