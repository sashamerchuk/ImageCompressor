
<script>
  var config = {
    apiKey: "AIzaSyAPMJTQOXDH-TbDGkGaS_Xobha55mv7OME",
    authDomain: "interstellarteam-9ca62.firebaseapp.com",
    databaseURL: "https://interstellarteam-9ca62.firebaseio.com",
    projectId: "interstellarteam-9ca62",
    storageBucket: "interstellarteam-9ca62.appspot.com",
    messagingSenderId: "884752613411"
  };
  firebase.initializeApp(config);
</script>

var database = firebase.database();
var dbRefUsers = database.ref('users/');

var fbprovider = new firebase.auth.FacebookAuthProvider();
