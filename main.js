document.querySelector("#button").addEventListener("click" , () => {
    var userinput = document.getElementById("date").value;
    var date = new Date(userinput);
    if(userinput==null || userinput=='') {
      document.querySelector(".result").innerHTML = "Choose a date please!";  
      return false; 
    } else {
    
    //calculate month difference from current date in time
    var month = Date.now() - date.getTime();
    
    //convert the calculated difference in date format
    var age = new Date(month); 
    
    //extract year from date    
    var year = age.getUTCFullYear();
    
    //now calculate the age of the user
    var age = Math.abs(year - 1970);
    
    //display the calculated age
    return document.querySelector(".result").innerHTML =  
             "Your Age is: " + age + " years. ";
    }
})

