function simpleInterest(){
    
    var amount = document.getElementById("amount");
    var rate = document.getElementById("interestrate");
    var time = document.getElementById("years");

    if(amount.value == ""){
        window.alert("Please enter an amount")
        amount.focus();
        return false;
    }
    if(amount.value < 1){
        window.alert("Please enter a positive number");
        amount.focus();
        return false;
    }
    
    var total = (rate.value /100 * Number(time.value)) * amount.value;
    document.getElementsByClassName("div1")[0].hidden = false;
    document.getElementsByClassName("highlight1")[0].innerHTML = amount.value;
    document.getElementsByClassName("highlight2")[0].innerHTML = rate.value;
    document.getElementsByClassName("highlight3")[0].innerHTML = total;
    document.getElementsByClassName("highlight4")[0].innerHTML = new Date().getFullYear() + Number(time.value);
    
}