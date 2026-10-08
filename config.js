/*
  SESOMEX · Configuración de Firebase para registro.html y portal_medico.html
  Proyecto: Sistema-SESOMEX (sistema-sesomex)
  Estos valores no son secretos: la seguridad la dan las reglas de Firestore y Storage.
*/
window.SESOMEX_CONFIG = {
  firebase: {
    apiKey: "AIzaSyDBrNhhJmAfIxwDoGWFjFNq1-Sqyj9Xvgg",
    authDomain: "sistema-sesomex.firebaseapp.com",
    projectId: "sistema-sesomex",
    storageBucket: "sistema-sesomex.firebasestorage.app",
    messagingSenderId: "320592007878",
    appId: "1:320592007878:web:99c9ab7b13dad25aa7bdc7"
  },
  // Correo de la cuenta del médico en Authentication (contraseña: @350826+)
  doctorEmail: "doctor@sesomex.com",
  // Dominio interno para las cuentas de clientes (no necesita existir)
  dominioClientes: "clientes.sesomex.app"
};
