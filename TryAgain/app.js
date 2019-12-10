
(function () {
	
	//Initialize Firebase
	const config = {
	apiKey: "AIzaSyBCCd1qrmXMeYSo7__h6yYb0jQoUKzNOIU",
    authDomain: "database-practice-ce4a5.firebaseapp.com",
    databaseURL: "https://database-practice-ce4a5.firebaseio.com",
    projectId: "database-practice-ce4a5",
    storageBucket: "database-practice-ce4a5.appspot.com",
    messagingSenderId: "82256684482",
    appId: "1:82256684482:web:dee0d56871a13f1602a25b",
    measurementId: "G-5W2FY8STNZ"
};

 firebase.initializeApp(config);
 firebase.analytics();

	//Get elements
	//const preObject = document.getElementById('object');
	const Fishtype = document.getElementById('fishtype');
	//const dbRefCategory = document.getElementById('category');
	//const dbRefWeight = document.getElementById('weight');

	//Create references
	const CategoryRef = firebase.database().ref("Category");
	const dbFishtype = firebase.database().ref().child('Category/Fish/FishType');

	//later do not "set" in code, have it already made in database and allow it to be filled manually, so if reload it doesn't override data 
	CategoryRef.set ({
	   Fish: {
	      FishType: "Jeff"
	   }
	});

	CategoryRef.push();
	
	dbFishtype.on('value', snap => { 
		Fishtype.innerText = JSON.stringify(snap.val(), null, 3);
	});
	

	 //dbRefObject.on('value', snap => {
		//preObject.innerText = JSON.stringify(snap.val(), null, 3);
	//}); console.log(snap.val()));

	dbFishtype.on('value', snap=> Fishtype.innerText = snap.val());

}());


function saveUn() {
    var Fishtype = document.getElementById('fishtype').value;
    const dbRefFish = firebase.database().ref().child('Category/Fish');

	dbRefFish.set ({
		"FishType" : Fishtype

	});
    alert(Fishtype);
    return false;
}


function NewSanitationForm() {
			//date function

	// Get a database reference
	const database = firebase.database();

	// creating a starting path in our database
	const ref = database.ref('SanitationForm');

	// create a child node of the above path and write the following data to it
	const usersRef = ref.child('users');
	usersRef.push().set({
	  alanisawesome: {
	    date_of_birth: 'June 23, 1912',
	    full_name: 'Alan Turing',
	  },
	  gracehop: {
	    date_of_birth: 'December 9, 1906',
	    full_name: 'Grace Hopper',
	  },
	});
	alert("Key");




	// const formListRef = 0;
	// var newSanitationRef;
	// newSanitationRef = firebase.database().ref().child("SanitationForm");
	// newSanitationRef.push();
	// newSanitationRef.update({
	// 	Boat: null,
	// 	FishBox: null,
	// 	Water: null,
	// 	Ice: null
	// });
	// //newSanitationRef = firebase.database().ref().child("SanitationForm");

	// return firebase.database().ref().update(SanitationForm);
}