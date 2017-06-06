import React, { Component } from 'react';
import api from 'Api/users';

require('./styles');

class UsersComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    this.setState({ users: api.getUsers() });
  }

  render() {
    const { users } = this.state;

    return (
      <div id="users">
        {
          users.map(({ age, name, id  }) => {
            return <p key={id}><span className="badge">{name}</span> - {age}</p>;
          })
        }
      </div>
    );

  }
}

export default UsersComponent;
