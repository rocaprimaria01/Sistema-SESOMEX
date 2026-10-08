/*
  SESOMEX · Configuración de Firebase para registro.html y portal_medico.html
  Proyecto: Sistema-SESOMEX (sistema-sesomex)

  SOLO FALTAN 2 DATOS: apiKey y appId.
  Dónde obtenerlos: Firebase > Configuración del proyecto > General > Tus apps >
  ícono </> (Web) > registra la app "SESOMEX Web" > copia apiKey y appId del bloque firebaseConfig.
  Si tu firebaseConfig muestra un storageBucket distinto (por ejemplo ...appspot.com), usa el de Firebase.

  Estos valores no son secretos: la seguridad la dan las reglas de Firestore y Storage.
*/
window.SESOMEX_CONFIG = {
  firebase: {
    apiKey: "TU_API_KEY",
    authDomain: "sistema-sesomex.firebaseapp.com",
    projectId: "sistema-sesomex",
    storageBucket: "sistema-sesomex.firebasestorage.app",
    messagingSenderId: "320592007878",
    appId: "TU_APP_ID"
  },
  // Correo de la cuenta del médico en Authentication (contraseña: @350826+)
  doctorEmail: "doctor@sesomex.com",
  // Dominio interno para las cuentas de clientes (no necesita existir)
  dominioClientes: "clientes.sesomex.app"
};
