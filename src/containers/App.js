import React, { Component } from 'react';
/**
 * Styles for application
 */
import '../../node_modules/normalize.css/normalize.css';
import 'assets/css/style.scss';

import Users from 'components/Users'
import AddingUser from 'components/AddingUser'
import Currency from 'components/Currency'

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <div id="wrapper">
          <div className="container">
            <Users />
            <AddingUser />
            <Currency />
          </div>
        </div>
      </div>
    );
	}
}