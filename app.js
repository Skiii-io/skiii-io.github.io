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
	var user;

  btnLogout.addEventListener('click', e => {
		firebase.auth().signOut();
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
