// src/components/NotificationPopup.js
import React, { useEffect, useState } from 'react';
import pusher from '../utils/pusher';

const NotificationPopup = () => {
  const [notification, setNotification] = useState('');

  useEffect(() => {
    const channel = pusher.subscribe('notifications');
    channel.bind('new-notification', (data) => {
      setNotification(data.message);
    });

    return () => {
      pusher.unsubscribe('notifications');
    };
  }, []);

  return notification ? <div className="notification">{notification}</div> : null;
};

export default NotificationPopup;