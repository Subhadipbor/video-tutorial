
	function phonevalid() {
	var phone =document.getElementById('t2').value;
	
	//cheeking The Mobile No is 10 Digit or Not
	if (phone.length==10){
		console.log("10 digited");
		//cheeking The Mobile No is starting with 6,7,8,9
		if(phone.substr(0,1)=='6'||
			phone.substr(0,1)=='7'||
			phone.substr(0,1)=='8'||
			phone.substr(0,1)=='9'){

			document.getElementById('errorPhone').innerHTML="";
		//disabled subm it button for Invalid Mobile Non.
		document.getElementById('b1').disabled = false;
		document.getElementById('t2').className='form-control';
		}
		else{
			

		document.getElementById('errorPhone').innerHTML='Invalid Mobile no.';
      document.getElementById('t2').className='form-control is-invalid';
		}
	}
		else{
			console.log("Invalid Mobile no");
			document.getElementById('errorPhone').innerHTML=' Mobile no. contain must be 10 digit';
			document.getElementById('b1').disabled = true;
			 document.getElementById('t2').className='form-control is-invalid';
	}
		}	
     function code(){
      var select = document.getElementById('select').value; // or in jQuery use: select = this;
if (select == "") {
    alert("Please select a selection");
  console.log("valid");
  document.getElementById('b1').disabled = false;
  document.getElementById('select').innerHTML="";

}
else{
	console.log("Choice a code");
	document.getElementById('b1').disabled = false;
  document.getElementById('select').innerHTML="Please choose a country code";
}

}


	function emailvalid(){
		var email=document.getElementById('t3').value;
		var regex= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if(regex.test(email)){
			console.log("Valid");
			document.getElementById('errorEmail').innerHTML="";
			document.getElementById('b1').disabled = false;
			  document.getElementById('t3').className='form-control';
		}
		else{
			console.log("Inalid");
			document.getElementById('errorEmail').innerHTML="Invalid Email";
			document.getElementById('b1').disabled = true;
       document.getElementById('t3').className='form-control is-invalid';
		}
	}
     function passMatch(){
      var p1=document.getElementById('p1').value;
      var p2=document.getElementById('p2').value;
      if(p1==p2){
      	console.log("Password Match");
      	document.getElementById('errorPass2').innerHTML='';
      	document.getElementById('b1').disabled=false;
        document.getElementById('p2').className='form-control';
      }else{
      console.log("Password  Not Match");
      	document.getElementById('errorPass2').innerHTML="Password doesn't match";
      	document.getElementById('b1').disabled=true;
      	document.getElementById('p2').className='form-control is-invalid';
     }


}
function passPolicy(){
	var p1=document.getElementById('p1').value;
	var regex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
      if(regex.test(p1)){
      	console.log('Password is ok');
      	document.getElementById('errorPass1').innerHTML='';
      	document.getElementById('b1').disabled=false;
      document.getElementById('p1').className='form-control';
      }
      else{
      	console.log('Password is Not ok');
      	document.getElementById('errorPass1').innerHTML="<small> Password Must Contains <ul><li>One Uppercase</li><li>One Lowercase</li> <li>One Digit</li><li>One Specail Chars.</li> <li>Minimum 8 Chars long</li> </ul></small>";
      	document.getElementById('b1').disabled=true;
      	document.getElementById('p1').className='form-control is-invalid';

      }
}
function toggelPass(){
	var p1=document.getElementById('p1');
	var p2=document.getElementById('p2');
	var ch1=document.getElementById('ch1');
	if(ch1.checked)
		p1.type=p2.type='text';
	else
	p1.type=p2.type='password';
}