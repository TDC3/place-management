import React, { Component } from 'react';
import { Breadcrumb, Button, Icon, Divider, Table } from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';

import CampaignForm from './components/CampaignForm';

import { ruleColumns, ruleData, eventColumns, eventData } from '../shared/constants/campaignConstants';

class EditCampaign extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log(values);
  }

  render() {
    const initialValues = {
      create_date: moment().format('MMMM Do YYYY, hh:mm'),
      create_by: 'gkassym',
      registration_date: moment().format('MMMM Do YYYY, hh:mm'),
      place_name: 'Sidney Oper House',
      created_date: moment().format(),
      created_by: '@donutfino',
      city: 'Bangkok',
      country: 'Thailand',
      description: '500 checked in, 40 Hearted, 69 visited, 73 stories',
    }
    return (
      <div id="edit-campaign">
        <Breadcrumb>
          <Breadcrumb.Item><Link to="/campaigns">Campaigns</Link></Breadcrumb.Item>
          <Breadcrumb.Item>Edit Campaign</Breadcrumb.Item>
        </Breadcrumb>

        <div className="container">
          <h3>Edit Campaign</h3>

          <CampaignForm
            initialValues={initialValues}
            onSubmit={this.handleSubmit}
          />

          <Divider />

          <h4>Events Calendar</h4>

          <Table
            columns={eventColumns}
            dataSource={eventData}
          />

          <Divider />

          <h4>Rules</h4>

          <Table
            columns={ruleColumns}
            dataSource={ruleData}
          />
        </div>
      </div>
    );
  }
}

export default EditCampaign;
