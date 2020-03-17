// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDYEF6Y68JG9yNmY0tvu5zMAD4g1D1XAWw",
    authDomain: "controlventas-463ae.firebaseapp.com",
    databaseURL: "https://controlventas-463ae.firebaseio.com",
    projectId: "controlventas-463ae",
    storageBucket: "controlventas-463ae.appspot.com",
    messagingSenderId: "1067694652090",
    appId: "1:1067694652090:web:fb38843305a5bc232ca083"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function getID(id){
      return document.getElementById(id).value;
  }

  function arrayJSON(seccion){
        var data = {
            seccion : seccion
        };
        return data;
  }

function insertSeccion(){
    var seccion = getID("addSeccion");
    if(seccion != undefined){
        var arrayData = arrayJSON(seccion);
        var inSeccion = firebase.database();
        inSeccion.set(arrayData);
        console.log("Datos almacenados");
    } else {
        alert("Campos vacios");
    }
}    