import React, {Component} from 'react';
import $ from 'jquery'
import { connect } from 'react-redux'
import {drawTable} from 'actions/'
/**
 * Styles for application
 */
import '../../node_modules/normalize.css/normalize.css';
import 'assets/css/style.scss';

const mapStateToProps = (state) => {
  return {users: state.Users}
};

@connect(mapStateToProps, {drawTable})
export default class Users extends Component {
  constructor(props) {
    super(props)
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

  mapRecursion = (obj) => {
    console.log(obj)
    return obj instanceof Object
    ? Object.keys(obj).map((prop) =>
      this.mapRecursion(obj[prop])
    )
    : `${obj} `
  }
  
  render() {
    const {
      users
    } = this.props;

    let headingTable = Object.keys(users[0]);
    return (
      <div>
        <div className="h2">Users</div>
        <table className="table table-hover">
                    <thead>
                        <tr>
                          {headingTable.map( (text) =>
                            <th>{text}</th>
                          )}
                        </tr>
                    </thead>
                    <tbody>
                    {
                      users.map( user =>
                        <tr key={user.id}>
                          {
                            Object.keys(user).map( (key) => ( <td>{this.mapRecursion(user[key])}</td>))
                          }
                        </tr>
                      )
                    }
                    </tbody>
            </table>

        <div class="panel panel-default">
                <div class="panel-body">
                No users found.
                </div>
            </div>
      </div>
    );
  }
}