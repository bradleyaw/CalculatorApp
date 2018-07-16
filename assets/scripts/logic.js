$("#calculate").click(function (event) {
    event.preventDefault();

    var num1 = Number($("input[value='num1']").val())
    var num2 = Number($("input[value='num2']").val())
    var results = $("#results");
    
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Make sure both inputs are numbers");
        results.text("Make sure both inputs are numbers")
    }
    else {
        results.empty();
        calculate(num1, num2);
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