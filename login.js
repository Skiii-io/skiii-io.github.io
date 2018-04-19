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
	const txtPassword = document.getElementById("txtPassword");
	const btnLogin = document.getElementById("btnLogin");
	const btnSignUp = document.getElementById("btnSignUp");
	const btnLogout = document.getElementById("btnLogout");
	const btnGuest = document.getElementById("btnGuest");
	const btnReset = document.getElementById("btnReset");

	// Add login event
	btnLogin.addEventListener('click', e => {
		// Get email and pass
		const email = txtEmail.value;
		const pass = txtPassword.value;
		const auth = firebase.auth();
		// Sign in
		const promise = auth.signInWithEmailAndPassword(email,pass);
	promise.catch(e => {
		alert(e.message);
	});
	})

	// Add singup event
	btnSignUp.addEventListener('click', e => {
		// Get email and pass
		const email = txtEmail.value;
		const pass = txtPassword.value;
		const auth = firebase.auth();
		// Sign in
		const promise = auth.createUserWithEmailAndPassword(email,pass);
	promise.catch(e => {
		alert(e.message);
	});
	})

	btnLogout.addEventListener('click', e => {
		firebase.auth().signOut();
	})

	btnGuest.addEventListener("click",e => {
		const auth = firebase.auth()
		const promise = auth.signInAnonymously();
		promise.catch(e => console.log(e));
	})

	// Add a realtime listener
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if (firebaseUser) {
			console.log(firebaseUser);
			btnLogout.style.display = "";
			btnLogin.style.display = "none";
			btnSignUp.style.display = "none";
			btnGuest.style.display = "none";
			btnReset.style.display = "none";
			txtEmail.style.display = "none";
			txtPassword.style.display = "none";
			txtEmail.value = "";
			txtPassword.value = "";
			window.location.replace("/homepage.html")
		} else {
			console.log("Not logged in");
			btnLogout.style.display = "none";
			btnLogin.style.display = "";
			btnSignUp.style.display = "";
			btnGuest.style.display = "";
			btnReset.style.display = "";
			txtEmail.style.display = "";
			txtPassword.style.display = "";
		}
	})

})()
