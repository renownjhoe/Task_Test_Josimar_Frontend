// src/components/Notifications.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
import { addNotification } from '../actions/notificationActions';

Pusher.logToConsole = true;

const Notifications = () => {
  const dispatch = useDispatch();
  const notifications = useSelector(state => state.notifications.notifications);

  useEffect(() => {
    const echo = new Echo({
      broadcaster: 'pusher',
      key: process.env.REACT_APP_PUSHER_APP_KEY,
      cluster: process.env.REACT_APP_PUSHER_APP_CLUSTER,
      forceTLS: true,
    });

    echo.channel('brts')
      .listen('.brt.created', (data) => {
        dispatch(addNotification(`New BRT Created: ${data.brt_code}`));
      })
      .listen('.brt.updated', (data) => {
        dispatch(addNotification(`BRT Updated: ${data.brt_code}`));
      })
      .listen('.brt.deleted', (data) => {
        dispatch(addNotification(`BRT Deleted: ${data.brt_code}`));
      });

    return () => {
      echo.disconnect();
    };
  }, [dispatch]);

  return (
    <div className="fixed bottom-0 right-0 m-4 p-4 bg-white shadow-lg rounded max-w-xs">
      <h3 className="text-lg font-bold mb-2">Notifications</h3>
      <ul>
        {notifications.map((note, index) => (
          <li key={index} className="mb-1 text-gray-800">{note}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
