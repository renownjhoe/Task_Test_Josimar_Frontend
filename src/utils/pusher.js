// src/utils/pusher.js
import Pusher from 'pusher-js';

const pusher = new Pusher('your-pusher-key', {
  cluster: 'your-cluster',
});

export default pusher;