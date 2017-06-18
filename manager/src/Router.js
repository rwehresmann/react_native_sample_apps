import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
import { employeeClear } from './actions';

class RouterComponent extends Component {
  onEditBack() {
    this.props.employeeClear();
    Actions.pop();
  }

  render() {
    return (
      <Router sceneStyle={{ paddingTop: 65 }}>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please Login" />
        </Scene>

        <Scene key="main">
          <Scene
            onRight={() => Actions.employeeCreate()}
            rightTitle="Add"
            key="employeeList"
            component={EmployeeList}
            title="Employees"
            initial
          />
          <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
          <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee" onBack={this.onEditBack.bind(this)} />
        </Scene>
      </Router>
    );
  }
}

export default connect(null, { employeeClear })(RouterComponent);