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

  const btnLogout = document.getElementById("btnLogout");

  btnLogout.addEventListener('click', e => {
		firebase.auth().signOut();
	})

  // Add a realtime listener
	firebase.auth().onAuthStateChanged(firebaseUser => {
    if (!firebaseUser) {
      window.location.replace("/");
    }
  });

})()
