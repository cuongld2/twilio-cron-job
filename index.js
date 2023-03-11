import fetch from 'node-fetch';
import cron from 'node-cron';

function sendNotification(){

    fetch('http://localhost:3001/api/notification',
    {method: 'POST',});
  }

  cron.schedule('0 20 * * *', () => {
    sendNotification();
  });
