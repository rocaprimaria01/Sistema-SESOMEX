/*
  SESOMEX · Configuración de Firebase para registro.html y portal_medico.html
  Proyecto: Sistema-SESOMEX (sistema-sesomex)
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
  // Cuenta principal del médico (se usa si el campo de correo se deja vacío)
  doctorEmail: "dr.carloschavez@outlook.com",
  // Personal con acceso completo al portal (deben existir también en Authentication y en firestore.rules)
  personal: [
    "roca.primaria.01@gmail.com",
    "paolarocha809@gmail.com",
    "solislozano89@gmail.com"
  ],
  dominioClientes: "clientes.sesomex.app"
};
