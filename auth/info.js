(function () {
  const config = {
    apiKey: "AIzaSyBwdfOlTwAEdJJs3SdIdVJAGFePCmdVbYY",
    authDomain: "skiii-io-b262d.firebaseapp.com",
    databaseURL: "https://skiii-io-b262d.firebaseio.com",
    projectId: "skiii-io-b262d",
    storageBucket: "skiii-io-b262d.appspot.com",
    messagingSenderId: "158918507072"
  };
  firebase.initializeApp(config);

  const txtUserEmail = document.getElementById("txtUserEmail");
  const txtEmail = document.getElementById("txtEmail");
  const txtPassword = document.getElementById("txtPassword")
  const guestMessage = document.getElementById("guestMessage");
  const btnLogout = document.getElementById("btnLogout");
  const btnReset = document.getElementById("btnReset");
  const signUpForm = document.getElementById("signUpForm");
  const btnSignUp = document.getElementById("btnSignUp")
  var emailAddress;
  var username;

  firebase.auth().onAuthStateChanged(firebaseUser => {
		if (firebaseUser) {
      emailAddress = firebaseUser.email;
			if (firebaseUser.isAnonymous){
        guestMessage.innerText = "You are logged in as a Guest.\n Please create a full account to access all the features of Skiii.io";
        btnReset.style.display = "none";
      } else {
        txtUserEmail.innerText = ("Email Address: " + emailAddress);
        signUpForm.style.display = "none";
      }
		} else {
      window.location.replace("../")
		}
  })

  btnSignUp.addEventListener("click", e => {
    var credential = firebase.auth.EmailAuthProvider.credential(txtEmail.value,txtPassword.value);
    firebase.auth().currentUser.linkWithCredential(credential).then(function(user) {
      console.log("Anonymous account successfully upgraded", user);
      location.reload();
    }, function(error) {
      console.log("Error upgrading anonymous account", error);
    });
    }
  )

  btnReset.addEventListener('click', e => {
    const auth = firebase.auth();
    const promise = auth.sendPasswordResetEmail(emailAddress)
    promise.catch(e => console.log(e));
  })

  btnLogout.addEventListener('click', e => {
		firebase.auth().signOut();
	})
})()
