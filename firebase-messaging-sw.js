// Importar scripts de Firebase dentro del Service Worker
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Configuración de tu proyecto en Firebase
firebase.initializeApp({
  apiKey: "AIzaSyCbsHxOR1w4gDjQCAV0cdej3CEp83-WQs0",
  authDomain: "agendajya-94e6c.firebaseapp.com",
  databaseURL: "https://agendajya-94e6c-default-rtdb.firebaseio.com",
  projectId: "agendajya-94e6c",
  storageBucket: "agendajya-94e6c.firebasestorage.app",
  messagingSenderId: "195399447529",
  appId: "1:195399447529:web:b708fb0ff0da63ac481178",
  measurementId: "G-7B1H0QLFRG"
});

const messaging = firebase.messaging();

// Notificaciones push en segundo plano o app cerrada
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Notificación en segundo plano:', payload);

  const notificationTitle = payload.notification?.title || 'Jesús & Ali - Finanzas';
  const notificationOptions = {
    body: payload.notification?.body || 'Tienes una nueva actualización financiera.',
    icon: 'https://cdn-icons-png.flaticon.com/512/2953/2953363.png',
    badge: 'https://cdn-icons-png.flaticon.com/512/2953/2953363.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
