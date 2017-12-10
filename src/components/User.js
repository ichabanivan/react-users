import React, {Component} from 'react';
import { connect } from 'react-redux'

import {removeUser} from 'actions/'
const mapStateToProps = (state) => {
  return {users: state.Users}
};

@connect(mapStateToProps, {removeUser})
export default class User extends Component {
  constructor(props) {
    super(props);
  }

  mapRecursion = (obj) => {
    return obj instanceof Object
    ? Object.keys(obj).map((prop) =>
      this.mapRecursion(obj[prop])
    )
    : `${obj} `
  };

  removeUser = () => {
    this.props.removeUser(this.props.obj)
  };

  
  render() {
    let user = this.props.obj;

    return (
        <tr key={user.id} id={user.id}>
          {
            Object.keys(user).map( (key) => ( <td key={(key + user[key])}>{this.mapRecursion(user[key])}</td>))
          }
          <td className={'text-center show-on-hover'}  onClick={this.removeUser}><b>x</b></td>
        </tr>
    );
  }
}
