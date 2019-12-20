
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
	var firebase = require('firebase');
	var firebaseui = require('firebaseui');
	var ui = new firebaseui.auth.AuthUI(firebase.auth());

	// ui.start('#firebaseui-auth-container', {
	//   	signInOptions: [
	//     firebase.auth.EmailAuthProvider.PROVIDER_ID
	//   	],
 //  // Other config options...
	// });

	var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: '<url-to-redirect-to-on-success>',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  // Terms of service url.
  tosUrl: '<your-tos-url>',
  // Privacy policy url.
  privacyPolicyUrl: '<your-privacy-policy-url>'
};

ui.start('#firebaseui-auth-container', uiConfig);

	
	 const txtEmail = document.getElementById("txtEmail");
	const txtPassword = document.getElementById("txtPassword");
	// const btnLogin = document.getElementById("btnLogin");
	// const btnSignUp = document.getElementById("btnSignUp");
	// const btnLogout = document.getElementById("btnLogout");
	
	//add log in events
	// btnLogin.onEvent("click", e =>
	// {
	// 	alert(txtEmail);
	// 	const email = txtEmail.value;
	// 	const pass = txtPassword;
	// 	const auth = firebase.auth();
	// 	alert(email);

	// 	// //sign in
	// 	 const promise = auth.signInWithEmailAndPassword(email, pass);
	// 	 promise.catch(e => console.log(e.message));
	// });

	//add sign up events
	// btnSignUp.addEventListener('click', e=>
	// {
	// 	const email = txtEmail.value;
	// 	const pass = txtPassword;
	// 	const auth = firebase.auth();

	// 	alert("email");

	// 	//create log in
	// 	//I need to assign user id here -> ask rij for more info
	// 	const promise = auth.createUserWithEmailAndPassword(email, pass);
	// 	promise.catch(e => console.log(e.message));
	// });

	// // add a rreal time listner
	// firebase.auth().onAuthStateChanged(firebaseUser => {
	// 	if(firebaseUser)
	// 	{
	// 		console.log(firebaseUser);
	// 		btnLogout.classList.remove('hide');
	// 	}
	// 	else
	// 	{
	// 		console.log('not logged in');
	// 		btnLogout.classList.add('hide');

	// 	}

	// });

	// btnLogout.addEventListener('click', e =>
	// {
	// 	firebase.auth().signOut();
	// });


});
// function buttonloggin(){

// };
// btnLogin.addEventListener('click', e =>
// 	{
// 		const email = txtEmail.value;
// 		const pass = txtPassword;
// 		const auth = firebase.auth();

// 		//sign in
// 		const promise = auth.signInWithEmailAndPassword(email, pass);
// 		promise.catch(e => console.log(e.message));
// 		alert(email);
// 	});

function myFunction() {
	//document.getElementById("txtEmail").innerHTML = "Hello World";
	// const txtEmail = document.getElementById("txtEmail");
	// const pass = txtPassword;
	 const auth = firebase.auth();

	alert(txtEmail.value);
	//create log in
	//I need to assign user id here -> ask rij for more info
	const promise = auth.createUserWithEmailAndPassword(txtEmail.value, txtPassword.value);
	promise.catch(e => console.log(e.message));

}