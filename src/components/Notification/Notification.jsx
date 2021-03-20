import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';

import { NotificationEl } from './Notification.css';

const notificationRoot = document.querySelector('#notification-root');

class Notification extends Component {

  state = {
    isNotificationShow: false,
  }

  componentDidMount() {
    const { deleteErrorText } = this.props;    

    this.setState({
      isNotificationShow: true,
    })
    setTimeout(() => {
      deleteErrorText();
      this.setState({
        isNotificationShow: false,
      });
    }, 5000);
  }

  render() {
    const { isNotificationShow } = this.state;
    const { errorText } = this.props;

    return createPortal(
      <NotificationEl>{isNotificationShow && errorText}</NotificationEl>,

      notificationRoot
    )
  }
}

Notification.propTypes = {
  errorText: PropTypes.string,
  deleteErrorText: PropTypes.func,
}

export default Notification;