import React, {Component} from 'react';

/**
 * Styles for application
 */
import '../../node_modules/normalize.css/normalize.css';
import 'assets/css/style.scss';

export default class AddingUser extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div>
      <div className="h3">Adding user</div>

      <form>
        <div className="form-group">
          <label for="name">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Name"/>
        </div>
          <div className="form-group">
          <label for="email">Email address</label>
          <input type="text" className="form-control" id="email" placeholder="Email"/>
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone number</label>
          <input type="text" className="form-control" id="phone" placeholder="Phone"/>
        </div>
        <div className="form-group">
          <label htmlFor="work">Place of work</label>
          <input type="text" className="form-control" id="work" placeholder="Work place"/>
        </div>
          <div className="form-group">
          <button type="button" className="btn btn-info">Add user</button>
        </div>
      </form>
      </div>
    );
  }
}

