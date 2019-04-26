const payment=function(){
    var amount=parseInt(document.getElementById("amount").value);
    var payment =parseInt(document.getElementById("payment").value);
    var result = amount-payment;
    document.getElementById("result").value=result;
}