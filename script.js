function compute()
{
    var principal = document.getElementById("principal").value;
    var principal_number = parseInt(principal);
    if (isNaN(principal_number) || principal_number<=0) {
        alert("Enter a positive number")
        document.getElementById("principal").focus();
        return false;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var interest = parseInt(principal)*parseInt(years)*parseInt(rate)/100
    var year = new Date().getFullYear() + parseInt(years)
    
    document.getElementById("result").innerHTML="If you deposit \<b\>"+principal+"\</b\>,\<br\>at an interest rate of \<b\>"+rate+"%\</b\>.\<br\>You will receive an amount of \<b\>"+interest+"\</b\>,\<br\>in the year \<b\>"+year+"\</b\>\<br\>"
}

function updateRate() {
    var rateVal = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateVal;
}
        