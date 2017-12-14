import React, { Component } from 'react';
import { Breadcrumb, Table, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { usersColumns } from '../shared/constants/usersConstants';
import { USER_TYPES } from '../shared/constants/constants';

class Users extends Component {

  render() {
    const { fetchUsers: { loading, allUsers }, match: { params } } = this.props;
    if (loading) {
      return <div className="loader-indicator" />;
    }

    const dataSource = allUsers.map(user => ({ ...user, key: user.id }));
    const userType = USER_TYPES.find(type => type.value == params.type);

    return (
      <div id="users">
        <Breadcrumb>
          <Breadcrumb.Item>Users</Breadcrumb.Item>
          <Breadcrumb.Item>OneMappers</Breadcrumb.Item>
          <Breadcrumb.Item>
            {userType && userType.label}
          </Breadcrumb.Item>
        </Breadcrumb>

        <div className="container">
          <h4>
            Manage Users
            <div className="is-right">
              <Button.Group size="small">
                <Button>
                  <Link to={`/users/one-mappers/${userType.value}/new`}>
                    <Icon type="plus" />New User
                  </Link>
                </Button>
                <Button>
                  Report<Icon type="down" />
                </Button>
              </Button.Group>
            </div>
          </h4>

          <Table
            columns={usersColumns(userType.value)}
            dataSource={dataSource}
            expandedRowRender={record => <p className="no-margin">{record.description}</p>}
          />
        </div>
      </div>
    )
  }
}

const FETCH_USERS = gql`
  query FetchUsers {
    allUsers {
      id
      createdAt
      createdBy {
        id
        username
      }
      firstName
      lastName
      email
      password
      displayName
      gender
      birthdate
      city
      country
      mobile
      username
      photoURL
      registrationDate
      lastSeen
      onlineStatus
      group
    }
  }
`

const UsersScreen = graphql(FETCH_USERS, {
  name: 'fetchUsers',
  options: {
    fetchPolicy: 'network-only',
  },
})(Users);

export default UsersScreen;
