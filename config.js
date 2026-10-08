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
  // Cuenta principal del médico
  doctorEmail: "dr.carloschavez@outlook.com",
  // Acceso completo: diagnostica, firma, edita, elimina y administra clientes
  personal: [
    "roca.primaria.01@gmail.com",
    "solislozano89@gmail.com"
  ],
  // Enfermería: solo captura y completa datos (sin diagnóstico, firma, eliminar ni clientes)
  enfermeria: [
    "paolarocha809@gmail.com"
  ],
  dominioClientes: "clientes.sesomex.app"
};
