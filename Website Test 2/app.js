//  <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.4.0/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/7.4.0/firebase-analytics.js"></script>


  // Your web app's Firebase configuration



(function()
{
	  const firebaseConfig = {
    apiKey: "AIzaSyBCCd1qrmXMeYSo7__h6yYb0jQoUKzNOIU",
    authDomain: "database-practice-ce4a5.firebaseapp.com",
    databaseURL: "https://database-practice-ce4a5.firebaseio.com",
    projectId: "database-practice-ce4a5",
    storageBucket: "database-practice-ce4a5.appspot.com",
    messagingSenderId: "82256684482",
    appId: "1:82256684482:web:dee0d56871a13f1602a25b",
    measurementId: "G-5W2FY8STNZ"
 	 };
  	// Initialize Firebase
  	firebase.initializeApp(firebaseConfig);
  	firebase.analytics();
	
	const txtEmail = document.getElementById("txtEmail");
	const txtPassword = document.getElementById("txtPassword");
	const btnLogin = document.getElementById("btnLogin");
	const btnSignUp = document.getElementById("btnSignUp");
	const btnLogout = document.getElementById("btnLogout");

	//add log in events
	btnLogin.addEventListener('click', e =>
	{
		const email = txtEmail.value;
		const pass = txtPassword;
		const auth = firebase.auth();

		//sign in
		const promise = auth.signInWithEmailAndPassword(email, pass);
		promise.catch(e => console.log(e.message));
		alert(email);
	});

	//add sign up events
	btnSignUp.addEventListener('click', e=>
	{
		const email = txtEmail.value;
		const pass = txtPassword;
		const auth = firebase.auth();

		alert(email);

		//create log in
		//I need to assign user id here -> ask rij for more info
		const promise = auth.createUserWithEmailAndPassword(email, pass);
		promise.catch(e => console.log(e.message));
	});

	// add a rreal time listner
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if(firebaseUser)
		{
			console.log(firebaseUser);
			btnLogout.classList.remove('hide');
		};
		else
		{
			console.log('not logged in');
			btnLogout.classList.add('hide');

		}

	});

	btnLogout.addEventListener('click', e =>
	{
		firebase.auth().signOut();
	});


}());


