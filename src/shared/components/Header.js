import React, { Component } from 'react';
import { Layout, Form, Icon, Input, Row, Col, Menu } from 'antd';

const FormItem = Form.Item;
const Header = Layout.Header;

class AppHeader extends Component {
  render() {
    const inputSuffix = <Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />;

    return (
      <Header className="header">
        <Row>
          <Col className="search-box" span={6}>
            <Form layout="inline" onSubmit={this.handleSubmit}>
              <FormItem>
                <Input suffix={inputSuffix} placeholder="Search User" />
              </FormItem>
            </Form>
          </Col>
          <Col span={18}>
            <div className="profile-status is-right">
              <Menu mode="horizontal" selectable={false}>
                <Menu.Item><Icon type="question-circle-o" />Help</Menu.Item>
                <Menu.Item><span className="anticon circle online" />User Name</Menu.Item>
              </Menu>
            </div>
          </Col>
        </Row>
      </Header>
    );
  }
}

export default AppHeader;