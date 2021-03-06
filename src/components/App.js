import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder, deleteReminder, clearReminders } from '../actions';
import moment from 'moment';
import 'moment-timezone';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      dueDate: ''
    };
    this.routeChange = this.routeChange.bind(this)
  }

  routeChange = () => {
    this.props.history.push(`/SMSForm`)
  }

  addReminder() {
    console.log('this.state.dueDate', this.state.dueDate)
    this.props.addReminder(this.state.text, this.state.dueDate);
  }

  deleteReminder(id) {
    this.props.deleteReminder(id);
  }

  renderReminders() {
    const { reminders } = this.props;
    return (
      <ul className="list-group col-sm-4">
        {
          reminders.map(reminder => {
            return (
              <li key={reminder.id} className="list-group-item">
                <div className="list-item">
                  <div>{reminder.text}</div>
                  <div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
                </div>
                <div
                  className="list-item delete-button"
                  onClick={() => this.deleteReminder(reminder.id)}
                >
                  &#x2715;
                </div>
                <div className="notificationButton">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.routeChange}
                  >
                    Send Text Reminder
                  </button>
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }

  render() {
    return (
      <div className="App">
        <div className="title">
          Appointment Info
        </div>
        <div className="reminder-form">
          <div className="form-group">
            <h4>Reason for Vet visit</h4>
            <input
              className="form-control"
              placeholder="Rabies vax due"
              onChange={event => this.setState({ text: event.target.value })}
            />
            <h4>Enter Date</h4>
            <input
              className="form-control"
              type="datetime-local"
              onChange={event => this.setState({ dueDate: event.target.value })}
            />
          </div>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.addReminder()}
          >
            Add Appointment
          </button>
        </div>
        {this.renderReminders()}
        <div
          className="btn btn-danger"
          onClick={() => this.props.clearReminders()}
        >
          Remove Appointments
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    reminders: state
  }
}

export default connect(mapStateToProps, { addReminder, deleteReminder, clearReminders })(App);
