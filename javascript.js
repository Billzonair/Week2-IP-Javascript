function compute(){
     let years = document.getElementById("year").value;
     cc = years.slice(0,2)
     yy = years.slice(2,4)
	var months = document.getElementById("month").value;
     mm = years.slice(0,2)
	var dates = document.getElementById("date").value;
     dd = years.slice(0,2)
    var genders = document.getElementById("gender").value;

    //console.log(cc);
    //console.log(yy);
    //console.log(mm);
    //console.log(dd);
    
    let dowa = parseInt( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7
    var dow = dowa.toFixed(0);
 // dow is the day of the week you were born
 //document.write(dow);

 if (dow==0 && genders==Male) {document.write("You were born on" + dow + "your Akan name is Kwasi");

}
     
 else if (dow==1 && genders==Male) {document.write("You were born on" + dow + "your Akan name is Kwadwo");
      
 }
 else if (dow==2 && genders==Male) {document.write("You were born on" + dow + "your Akan name is Kwabena"); 

}
 else if (dow==3 && genders==Male) {document.write("You were born on" + dow + "your Akan name is Kwaku");   

}
else if (dow==4 && genders==Male) {document.write("You were born on" + dow + "your Akan name is Yaw");   

}
else if (dow==5 && genders==Male) {document.write("You were born on" + dow + "your Akan name is Kofi");   

}
else if (dow==6 && genders==Male) {document.write("You were born on" + dow + "your Akan name is Kwame");   

}
else if (dow==0 && genders==Female) {document.write("You were born on" + dow + "your Akan name is Akusoa");   

}
else if (dow==1 && genders==Female) {document.write("You were born on" + dow + "your Akan name is Adwoa");   

}
else if (dow==2 && genders==Female) {document.write("You were born on" + dow + "your Akan name is Abenaa");   

}
else if (dow==3 && genders==Female) {document.write("You were born on" + dow + "your Akan name is Akua");   

}
else if (dow==4 && genders==Female) {document.write("You were born on" + dow + "your Akan name is Yaa");   

}
else if (dow==5 && genders==Female) {document.write("You were born on" + dow + "your Akan name is Afua");   

}
else if (dow==0 && genders==Female) {document.write("You were born on" + dow + "your Akan name is Ama");   

}
else (false);


}

compute()