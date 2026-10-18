// استدعاء مكتبات فايربيس للعمل في الخلفية
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

// تهيئة فايربيس داخل ملف الخدمة الخلفية
firebase.initializeApp({
  apiKey: "AIzaSyCTPQTbz6h9oVMo1N4Y_3r_RAi1RCXSEhM",
  authDomain: "el-rabea.firebaseapp.com",
  projectId: "el-rabea",
  storageBucket: "el-rabea.firebasestorage.app",
  messagingSenderId: "527658441562",
  appId: "1:527658441562:web:ef9d9bd5461d87eeb63163",
  measurementId: "G-2592BQ0ZS7"
});

const messaging = firebase.messaging();

// استقبال الإشعار عندما يكون التطبيق مغلقاً في الخلفية
messaging.onBackgroundMessage((payload) => {
  console.log('تم استلام إشعار في الخلفية:', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/favicon.ico'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
