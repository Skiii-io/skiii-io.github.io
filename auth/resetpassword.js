(function() {

  // Initialize Firebase

  const config = {
    apiKey: "AIzaSyBwdfOlTwAEdJJs3SdIdVJAGFePCmdVbYY",
    authDomain: "skiii-io-b262d.firebaseapp.com",
    databaseURL: "https://skiii-io-b262d.firebaseio.com",
    projectId: "skiii-io-b262d",
    storageBucket: "skiii-io-b262d.appspot.com",
    messagingSenderId: "158918507072"
  };
  firebase.initializeApp(config);

  // Get elements
  const txtEmail = document.getElementById("txtEmail");
  const btnReset = document.getElementById("btnReset");

  // Add login event
	btnReset.addEventListener('click', e => {
    const email = txtEmail.value;
    const auth = firebase.auth();
    const promise = auth.sendPasswordResetEmail(email)
    promise.catch(e => alert(e.message));
  })

  // Add a realtime listener
	firebase.auth().onAuthStateChanged(function(firebaseUser) {
		console.log(firebaseUser)
		if (firebaseUser) {
			if (firebaseUser.displayName != null) {
				window.location.replace("/homepage.html")
			}
		} else {
			window.location.replace("/")
		}
	})
})()
