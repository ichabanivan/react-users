/**
 * Styles for application
 */
import '../../node_modules/normalize.css/normalize.css';
import 'assets/css/style.scss';

import React, { Component } from 'react';

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
            <div className="h2">Users</div>
            <Users />
            <AddingUser />
            <Currency />
          </div>
        </div>
      </div>
    );
	}
}