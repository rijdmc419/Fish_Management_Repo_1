
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
	
	// dbFishtype.on('value', snap => { 
	// 	Fishtype.innerText = JSON.stringify(snap.val(), null, 3);
	// });
	

	//  //dbRefObject.on('value', snap => {
	// 	//preObject.innerText = JSON.stringify(snap.val(), null, 3);
	// //}); console.log(snap.val()));

	// dbFishtype.on('value', snap=> Fishtype.innerText = snap.val());

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


	const boatCheck = document.getElementById('boatCheck');
	const fishboxCheck = document.getElementById('fishboxCheck');
	const waterCheck = document.getElementById('waterCheck');
	const iceCheck = document.getElementById('iceCheck');
	const knivesCheck = document.getElementById('knivesCheck');
	const truckCheck = document.getElementById('truckCheck');
	const clothesCheck = document.getElementById('clothesCheck');
	const glovesCheck = document.getElementById('glovesCheck');
	const packagingCheck = document.getElementById('packagingCheck');
	const fishinggearCheck = document.getElementById('gearCheck');
	var Boat = "0";
	var Fishbox = "0";
	var Water = "0";
	var Ice = "0";
	var Knives = "0";
	var Truck = "0";
	var Clothes = "0";
	var Gloves = "0";
	var Packaging = "0";
	var Gear = "0";



	// create a child node of the above path and write the following data to it
	const form = ref.child('form');

	// form.push().set({
	// 		userid: "111"

	// });

	if (boatCheck.checked == true){
		Boat = "true";
		// form.set({
		// 	boat: 'true'
		// });
	}
	else {
		Boat = "false";
		// form.set({
		// 	boat: 'false'
		// });
	}
	if (fishboxCheck.checked == true){
		Fishbox = 'true';
	}
	else {
		Fishbox = 'false';
	}
	if (waterCheck.checked == true){
			Water = 'true';
	}
	else {
		Water = 'false';
	}
	if (iceCheck.checked == true){
		Ice = 'true';
	}
	else {
		Ice = 'false';
	}
	if (knivesCheck.checked == true){
		Knives = 'true';
	}
	else {
		Knives = 'false';
	}
	if (truckCheck.checked == true){
		Truck = 'true';
	}
	else {
		Truck = 'false';
	}
	if (clothesCheck.checked == true){
		Clothes = 'true';
	}
	else {
		Clothes = 'false';
	}
	if (glovesCheck.checked == true){
		Gloves = "true";
	}
	else {
		Gloves = "false";
	}
	if (packagingCheck.checked == true){
		Packaging = 'true';
	}
	else {
		Packaging = 'false';
	}
	if (gearCheck.checked == true){
		Gear = 'true';
	}
	else {
		Gear = 'false';
	}
	

	form.push().set({
		//user id
	    boat: Boat,
	    fishbox: Fishbox,
	    water: Water,
	    ice: Ice,
	    knives: Knives,
	    truck: Truck,
	    clothes: Clothes,
	    gloves: Gloves,
	    packaging: Packaging,
	    fishinggear: Gear
	    
	  // alanisawesome: {
	  // 	//user id
	  //   boat: 'June 23, 1912',
	  //   fishbox: 'Alan Turing',
	  // },
	  // gracehop: {
	  //   date_of_birth: 'December 9, 1906',
	  //   full_name: 'Grace Hopper',
	  // },
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