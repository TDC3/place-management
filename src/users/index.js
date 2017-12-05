import React, { Component } from 'react';
import { Breadcrumb, Table, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';

const columns = [{
  title: 'Place Name',
  dataIndex: 'place_name',
  sorter: (a, b) => a.place_name.length - b.place_name.length,
}, {
  title: 'Status',
  dataIndex: 'status',
  filters: [{
    text: 'Verified',
    value: 'Verified',
  }, {
    text: 'Review',
    value: 'Review',
  }],
  filterMultiple: false,
  onFilter: (value, record) => record.status.indexOf(value) === 0,
  sorter: (a, b) => a.status.length - b.address.length,
}, {
  title: 'Last Login',
  dataIndex: 'last_login',
  sorter: (a, b) => a.last_login - b.last_login,
}, {
  title: 'User Name',
  dataIndex: 'user_name',
  sorter: (a, b) => a.user_name - b.user_name,
}, {
  title: 'City',
  dataIndex: 'city',
  filters: [{
    text: 'Bangkok',
    value: 'Bangkok',
  }, {
    text: 'Qaragandy',
    value: 'Qaragandy',
  }, {
    text: 'Tokyo',
    value: 'Tokyo',
  }],
  onFilter: (value, record) => record.city.indexOf(value) === 0,
  sorter: (a, b) => a.city - b.city,
}, {
  title: 'Country',
  dataIndex: 'country',
  sorter: (a, b) => a.country - b.country,
  filters: [{
    text: 'Japan',
    value: 'Japan',
  }, {
    text: 'Qazakhstan',
    value: 'Qazakhstan',
  }, {
    text: 'Thailand',
    value: 'Thailand',
  }],
  onFilter: (value, record) => record.country.indexOf(value) === 0,
}, , {
  title: 'Role',
  dataIndex: 'role',
  sorter: (a, b) => a.role - b.role,
  filters: [{
    text: 'Regulars',
    value: 'Regulars',
  }, {
    text: 'Partners',
    value: 'Partners',
  }, {
    text: 'Bloggers',
    value: 'Bloggers',
  }],
  onFilter: (value, record) => record.role.indexOf(value) === 0,
}];

const data = [{
  key: '1',
  place_name: 'Sidney Oper House',
  status: 'Verified',
  last_login: moment().format(),
  user_name: '@donutfino',
  city: 'Bangkok',
  country: 'Thailand',
}, {
  key: '2',
  place_name: 'Astana Arena',
  status: 'Review',
  last_login: moment().format(),
  user_name: '@gkassym',
  city: 'Qaragandy',
  country: 'Qazakhstan',
}, {
  key: '3',
  place_name: 'Tokya Tower',
  status: 'Verified',
  last_login: moment().format(),
  user_name: '@kassym',
  city: 'Astana',
  country: 'Qazakhstan',
}, {
  key: '4',
  place_name: 'Qaragandy Opera',
  status: 'Verified',
  last_login: moment().format(),
  user_name: '@gafur',
  city: 'Tokyo',
  country: 'Japan',
}];

class Users extends Component {

  handleChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
  }

  render() {
    return (
      <div id="users">
        <Breadcrumb>
          <Breadcrumb.Item>Users</Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/users/one-mappers">OneMappers</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Regulars</Breadcrumb.Item>
        </Breadcrumb>

        <div className="container">
          <h4>
            Manage Users
          <div className="is-right">
              <Button.Group size="small">
                <Button>
                  <Link to="/users/one-mappers/new"><Icon type="plus" />New User</Link>
                </Button>
                <Button>
                  Report<Icon type="down" />
                </Button>
              </Button.Group>
            </div>
          </h4>

          <Table
            columns={columns}
            dataSource={data}
            onChange={this.handleChange}
          />
        </div>
      </div>
    )
  }
}

export default Users;