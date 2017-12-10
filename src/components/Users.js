import React, {Component} from 'react';
import { connect } from 'react-redux'
import $ from 'jquery'
import {drawTable, removeUser} from 'actions/'
import User from './User'

const mapStateToProps = (state) => {
  return {users: state.Users}
};

@connect(mapStateToProps, {drawTable, removeUser})
export default class Users extends Component {
  constructor(props) {
    super(props)
  }
 
  componentWillMount() {
    let self = this;
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/users',
      success: function(users){
        self.props.drawTable(users)
      }
    })
  }
  
  render() {
    const {
      users
    } = this.props;

    let headingTable = users.length ? headingTable = Object.keys(users[0]) : null;

    return (
      <div>
        <div className="h2">Users</div>
        {
          users.length ?
          <table className="table table-hover">
            <thead>
                <tr>
                  {
                    headingTable.map((text, key) =>
                      <th key={key}>{text}</th>
                    )
                  }
                  <th />
                </tr>
            </thead>
            <tbody>
            {
              users.map(( user, key) =>
                <User key={key} obj={user} />
              )
            }
            </tbody>
          </table>
          : <div className="panel panel-default">
                <div className="panel-body">
                No users found.
                </div>
            </div>
        }


      </div>
    );
  }
}