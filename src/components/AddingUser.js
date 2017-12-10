import React, {Component} from 'react';
import { connect } from 'react-redux'
import {addUser} from 'actions/'

@connect(null, {addUser})
export default class AddingUser extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    id: Date.now(),
    name: 'Leanne Grahama',
    email: 'Sincere@april.biza',
    phone: '1-770-736-8031 x564421',
    company: 'Romaguera-Cronaw',
    buttonDisabled: false
  };

  changeName = (e) => {
    this.setState({
      name: e.target.value
    })
  };

  changeEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  };

  changePhone = (e) => {
    this.setState({
      phone: e.target.value
    })
  };

  changeWork = (e) => {
    this.setState({
      company: e.target.value
    })
  };

  createUser = () => {
    this.props.addUser(this.state);
    this.setState({
      id: Date.now(),
      name: '',
      email: '',
      phone: '',
      company: ''
    })
  };

  render() {
    return (
    <div>
      <div className="h3">Adding user</div>

      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Name" onChange={this.changeName} value={this.state.name}/>
        </div>
          <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="text" className="form-control" id="email" placeholder="Email" onChange={this.changeEmail} value={this.state.email}/>
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone number</label>
          <input type="text" className="form-control" id="phone" placeholder="Phone" onChange={this.changePhone} value={this.state.phone}/>
        </div>
        <div className="form-group">
          <label htmlFor="work">Place of work</label>
          <input type="text" className="form-control" id="work" placeholder="Work place" onChange={this.changeWork} value={this.state.company}/>
        </div>
          <div className="form-group">
          <button type="button" className="btn btn-info" onClick={this.createUser} disabled={ !(this.state.name && this.state.email && this.state.phone && this.state.company)}><i className="fa fa-user-plus" aria-hidden="true" /> Add user</button>
        </div>
      </form>
      </div>
    );
  }
}

