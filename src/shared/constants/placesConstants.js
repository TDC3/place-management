import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export const placeColumns = [{
  title: 'Place Name',
  dataIndex: 'placeName',
  sorter: (a, b) => a.placeName.length - b.placeName.length,
  render: (text, record) => <Link to={`/places/edit/${record.key}`}>{record.placeName}</Link>,
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
  sorter: (a, b) => a.status.length - b.status.length,
}, {
  title: 'Created Date',
  dataIndex: 'createdAt',
  sorter: (a, b) => a.createdAt - b.createdAt,
  render: (text) => text && moment(text).format('L'),
}, {
  title: 'Created By',
  dataIndex: 'createdBy',
  sorter: (a, b) => a.createdBy - b.createdBy,
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
}, {
  title: 'Source',
  dataIndex: 'source',
  sorter: (a, b) => a.source - b.source,
  filters: [{
    text: 'Google',
    value: 'Google',
  }, {
    text: 'OneMap',
    value: 'OneMap',
  }],
  onFilter: (value, record) => record.source.indexOf(value) === 0,
}];
