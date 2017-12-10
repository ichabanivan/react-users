import React, {Component} from 'react';
import $ from 'jquery'
import { connect } from 'react-redux'
import {drawTable, removeUser} from 'actions/'
import User from './User'
/**
 * Styles for application
 */
import '../../node_modules/normalize.css/normalize.css';
import 'assets/css/style.scss';

const mapStateToProps = (state) => {
  return {users: state.Users}
};

@connect(mapStateToProps, {drawTable, removeUser})
export default class Users extends Component {
  constructor(props) {
    super(props)

    // this.removeUser = ::this.removeUser
  }
 
  componentWillMount() {
    let self = this;
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/users",
      success: function(users){
        self.props.drawTable(users)
      }
    })
  }

  // mapRecursion = (obj) => {
  //   return obj instanceof Object
  //   ? Object.keys(obj).map((prop) =>
  //     this.mapRecursion(obj[prop])
  //   )
  //   : `${obj} `
  // }
  //
  // removeUser(a) {
  //   console.log(a)
  // }
  
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
                          {headingTable.map( (text, key) =>
                          <th key={key}>{text}</th>
                          )}
                          <th />
                        </tr>
                    </thead>
                    <tbody>
                    {
                      users.map( ( user, key) =>
                      <User key={key} obj={user} />
                      )
                    }
                    </tbody>
            </table>
          : <div class="panel panel-default">
                <div class="panel-body">
                No users found.
                </div>
            </div>
        }


      </div>
    );
  }
}