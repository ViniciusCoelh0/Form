function validateForm() {
    var fName = document.getElementById("first").value;
    var SName = document.getElementById("second").value;
    var mail = document.getElementById("mail").value;
    var querys = document.querySelector('input[name="drone"]:checked');
    var checkBox = document.querySelector('input[name="confirm"]:checked')

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var namePattern = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;


    // Check the name and last name
    if (fName === "" || SName === "") {
        alert("Please, enter a valid first name and last name.\nExemple: Jonh Smith");
        return false;
    }

    if(!namePattern.test(fName)){
        alert("Please, enter a valid first name and last name.\nExemple: Jonh Smith");
        return false;
    }

    // Test email validation
    if(!(emailPattern.test(mail))){
        alert("Please, enter a valid email address.");
        return false;
    }

    // Check the query selector
    if(querys === null){
        alert("Please, select a query type.");
        return false;
    }

    // Confirm checkBox
    if(checkBox === null){
        alert("Please, select the chackbox.");
        return false;
    }

    return true;

}


