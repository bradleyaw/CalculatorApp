$("#calculate").click(function (event) {
    event.preventDefault();

    var num1 = $("input[name='num1']").val()
    var num2 = $("input[name='num2']").val()

    var results = $("#results");
    if  (num1.length == 0 || num2.length == 0) {
        console.log("Make sure both inputs are numbers");
        results.text("Make sure both inputs are numbers")
    }
    else if (isNaN(Number(num1)) || isNaN(Number(num2))) {
        console.log("Make sure both inputs are numbers");
        results.text("Make sure both inputs are numbers")
    }
    else {
        results.empty();
        calculate(Number(num1), Number(num2));
    }

    function calculate(num1, num2) {
        var operator = $("select").val()
        switch (operator) {
            case "plus":
                results.html(num1 + num2);
                break;
            case "minus":
                results.html(num1 - num2);
                break;
            default:
                results = "There appears to be a problem";
        }
    }
});