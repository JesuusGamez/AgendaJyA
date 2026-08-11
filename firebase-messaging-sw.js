importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyCbsHxOR1w4gDjQCAV0cdej3CEp83-WQs0",
  authDomain: "agendajya-94e6c.firebaseapp.com",
  databaseURL: "https://agendajya-94e6c-default-rtdb.firebaseio.com",
  projectId: "agendajya-94e6c",
  storageBucket: "agendajya-94e6c.firebasestorage.app",
  messagingSenderId: "195399447529",
  appId: "1:195399447529:web:b708fb0ff0da63ac481178"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
