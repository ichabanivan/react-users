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
        <div className="h2">Users</div>
        <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Work place</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Ivan</td>
                            <td>ivan@mail.ru</td>
                            <td>+38-050-111-11-11</td>
                            <td>Vodokanal</td>
                            <td className="text-center show-on-hover"><b>x</b></td>
                        </tr>
                        <tr>
                            <td>Nicolay</td>
                            <td>nicolay@mail.ru</td>
                            <td>+38-050-222-22-22</td>
                            <td>Gorgaz</td>
                            <td className="text-center show-on-hover"><b>x</b></td>
                        </tr>
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