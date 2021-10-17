function compute()
	{let years = document.getElementById("year").value;
     cc = years.slice(0,2)
     yy = years.slice(2,4)
	var months = document.getElementById("month").value;
     mm = years.slice(0,2)
	var dates = document.getElementById("date").value;
     dd = years.slice(0,2)
    var genders = document.getElementById("gender").value;

    console.log(cc);
    console.log(yy);
    console.log(mm);
    console.log(dd);
    }

    compute();

function day(){
    let dow = ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7
 // dob is the day of the week you were born
 document.write("You were born on the" dow "of the week" )
}

day()

