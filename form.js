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
  

  

  function signup() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    
    

    alert("Signed up");
    
  }
  function redirect(){
    window.location = "index.html";
  }

  function signin() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e=>alert(e.message));
    
    document.getElementById("displayEmail").innerHTML = email.value + " has logged in click on sign out to log out";
    //location.replace("login.html");

    alert("Signed in "+email.value);
  }

  function signout(){
      auth.signOut();
      alert("Signed out");
      location.replace("index.html");
  }


  
  auth.onAuthStateChanged(function(user){
    if(user!=null){
      alert("Active user " + email.value)
    }
    else{
      alert("No active user");
    }
      
      
  })