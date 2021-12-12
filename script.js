function compute()
{
    //Get initial amount (in string)
    var principal = document.getElementById("principal").value;
    //Convert it to number in order to perform required & optional tests
    var principal_number = parseInt(principal);
    /*Check if the amount is not number i.e. the user did not enter a value or did not enter a number 
      and check if the amount is zero or negative.
      If validation fails, alert the user, put cursor on amount input field and return to exit this function
    */
    if (isNaN(principal_number) || principal_number<=0) {
        alert("Enter a positive number")
        document.getElementById("principal").focus();
        return false;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    //perform the interest calculation according to instructions
    var interest = parseInt(principal)*parseInt(years)*parseInt(rate)/100
    //get the year where we receive the interest
    var year = new Date().getFullYear() + parseInt(years)
    
    //display the required text at the page by putting it in the appropriate span element
    document.getElementById("result").innerHTML="If you deposit \<b\>"+principal+"\</b\>,\<br\>at an interest rate of \<b\>"+rate+"%\</b\>.\<br\>You will receive an amount of \<b\>"+interest+"\</b\>,\<br\>in the year \<b\>"+year+"\</b\>\<br\>"
}

function updateRate() {

    //get the rate from the input and put it in the appropriate span element since the input does not display it
    var rateVal = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateVal;
}
        