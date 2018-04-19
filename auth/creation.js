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
  const btnComplete = document.getElementById("btnComplete");
  const btnSkin0 = document.getElementById("btnSkin0");
  const btnSkin1 = document.getElementById("btnSkin1");
  const btnSkin2 = document.getElementById("btnSkin2");
  const btnSkin3 = document.getElementById("btnSkin3");
  const txtUsername = document.getElementById("txtUsername");
	var selectedSkin = 0;
  var user;

	// Add singup event
	btnSkin0.addEventListener('click', e => {
    selectedSkin = 0;
    console.log(selectedSkin);
    btnSkin0.style.display = "border-color: #ff7496";
	});

  btnSkin1.addEventListener('click', e => {
    selectedSkin = 1;
    console.log(selectedSkin);
	});

  btnSkin2.addEventListener('click', e => {
    selectedSkin = 2;
    console.log(selectedSkin);
	});

  btnSkin3.addEventListener('click', e => {
    selectedSkin = 3;
    console.log(selectedSkin);
	});

  btnComplete.addEventListener('click', e => {
    console.log(txtUsername.value);
    if (txtUsername.value != ""){
      user.updateProfile({
        displayName: txtUsername.value,
        photoURL: ("https://skiii-io.github.io/images/skiers/skier-" + (selectedSkin++) + ".png")
      });
			window.location.replace("/homepage.html");
    } else {
      alert("Please pick a username");
    }
  });

	// Add a realtime listener
	firebase.auth().onAuthStateChanged(firebaseUser => {
    user = firebaseUser;
    console.log(firebaseUser);
		if (firebaseUser && firebaseUser.displayName != null) {
			window.location.replace("/homepage.html")
		} else if (!firebaseUser) {
			window.location.replace("/");
		}
	})

})()
