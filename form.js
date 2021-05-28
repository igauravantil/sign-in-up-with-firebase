// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDQMOUcFke7M3SfbT22RGkUtj7VHg22J7U",
    authDomain: "task-45546.firebaseapp.com",
    projectId: "task-45546",
    storageBucket: "task-45546.appspot.com",
    messagingSenderId: "102610638236",
    appId: "1:102610638236:web:30200d8e79666e0cb46459"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  function redirect() {
      
  }



  function signup() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    

    alert("Signed up");
    window.location = 'form.html';
  }

  function signin() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e=>alert(e.message));

    //alert("Signed in"+email.value);
  }

  function signout(){
      auth.signOut();
      alert("Signed out");
  }

  auth.onAuthStateChanged(function(user){
      if(user){
        var email = user.email;
        alert("active user" + email.value);
      }
      else{
          alert("no active user");

      }
  })