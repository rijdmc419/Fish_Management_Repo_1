var Pass = 123;//Daily password that can be set
var TeacherNames = ["Bartlo", "E", "Rabchuk","Rabduck","Gartlo"];//Registered users(must be exact and has to be set up);
var CorrectName = false;

//OnClick function that is run by the ENTER button
document.querySelector('.enter').addEventListener('click', function(){
	var Password = document.querySelector('.password').value;//Recieves input in the password text box
	var Name = document.querySelector('.userName').value;//Recieves input in the name text box

	//Checks if the username matches any registered teacher names
	for(var count = 0;count < TeacherNames.length || Name == TeacherNames[count];count++){
		if(Name == TeacherNames[count]){
			CorrectName = true;
		}
	}

	//Just a bunch of if statements to see if the username or password are right and if not, give an alert
	if(CorrectName == true){
		if(Password == Pass){
			//Runs onto the next page if everything is correct
            alert("Logged In!");
			window.location = 'stafflogin.html';

		}
		else if(Password == ""){
			alert("Input the password");
		}
		else{
			alert("Incorrect password");
		}
	}
	else if(Name == ""){
		alert("Input your name");
	} 
	else{
		alert("Not a registered name");
	}
});
