


document.getElementById("change-quote-color-btn").addEventListener("click", function() {
    fetchQuote();
    changeBackgroundColor();
});

function fetchQuote() {
    var quotes = [
        "The truth is like a lion; you don't have to defend it. Let it loose; it will defend itself.",
        "Go to heaven for the climate and hell for the company.", 
        "There is nothing either good or bad, but thinking makes it so.",
        "I close my eyes, Only for a moment and the moment's gone. All my dreams, Pass before my eyes with curiosity. Dust in the wind, All they are is dust in the wind.",
        "You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life.", 
        "We are all alone, born alone, die alone, and in spite of True Romance magazines we shall all someday look back on our lives and see that, in spite of our company, we were alone the whole way.",
        "It takes something more than intelligence to act intelligently.",
        "I usually solve problems by letting them devour me.",
        "And those who were seen dancing were thought to be insane by those who could not hear the music.",
        "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.",
        "If you know the enemy and know yourself, you need not fear the result of a hundred battles. If you know yourself but not the enemy, for every victory gained you will also suffer a defeat. If you know neither the enemy nor yourself, you will succumb in every battle."    
    ];
    var quotes_author = [
        "Saint Augustine","Benjamin Franklin Wade", "William Shakespear", "Kerry Livgren, Kansas", "Albert Camus", 
        "Hunter S. Thompson", "Fyodor Dostoyevsky", "Kafka","Friedrich Nietzsche", 
        "Marcus Aurelius", "Sun Tzu"
    ];

    var random_quote = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote_text").innerHTML = '"' + quotes[random_quote] + '"';
    document.getElementById("quote_author").innerHTML = quotes_author[random_quote];
}

function changeBackgroundColor() {
    var colors = ["#EE6D78", "#778DA9", "#f9dc5c", "#ea9ab2"];
    var random_color = Math.floor(Math.random() * colors.length);
    document.getElementById("quotes").style.backgroundColor = colors[random_color];
}


fetchQuote();
changeBackgroundColor();

function convert() {
    var input = document.getElementById("converter_input").value;
    var unit = document.getElementById("converter_unit").value;
    if (unit == "lbtokg") {
        var output = input * 0.45359;
        document.getElementById("converter_result").innerHTML = output + " KG";
    } else {
        var output = input * 2.20462;
        document.getElementById("converter_result").innerHTML = output + " LB";
    }
}

// Calculator

document.addEventListener("DOMContentLoaded", function() {
    const calculatorInput = document.getElementById("calc-value");

    calculatorInput.addEventListener("input", calc);

    function calc() {
        const input = calculatorInput.value.trim();
        const numbers = input.split(",").map(num => parseFloat(num.trim())).filter(num => !isNaN(num));

        if (numbers.length === 0) {
            clearValues();
            return;
        }

        const max = Math.max(...numbers);
        const min = Math.min(...numbers);
        const sum = numbers.reduce((acc, curr) => acc + curr, 0);
        const average = sum / numbers.length;
        const reverseOrder = numbers.slice().reverse().join(", ");

        document.getElementById("max").textContent = max;
        document.getElementById("min").textContent = min;
        document.getElementById("sum").textContent = sum;
        document.getElementById("average").textContent = average.toFixed(2);
        document.getElementById("reverse").textContent = reverseOrder;
    }

    function clearValues() {
        document.getElementById("max").textContent = "0";
        document.getElementById("min").textContent = "0";
        document.getElementById("sum").textContent = "0";
        document.getElementById("average").textContent = "0";
        document.getElementById("reverse").textContent = "";
    }
});


// magic

function cleartext() {
    document.getElementById("magic-input").value = "";
}

function capitalizetext() {
    var magicinput = document.getElementById("magic-input").value;
    if (document.getElementById("capitalize-button").value == "NO") {
        document.getElementById("magic-input").value = magicinput.toUpperCase();
        document.getElementById("capitalize-button").value = "YES";
    } else {
        document.getElementById("magic-input").value = magicinput.toLowerCase();
        document.getElementById("capitalize-button").value = "NO";
    }
}

function sortLines() {
    var magicinput = document.getElementById("magic-input").value;
    var magicArray = magicinput.split("\n");
    var newmagicinput = "";
    magicArray.sort();
    for (var i = 0; i < magicArray.length; i++) {
        if (i == magicArray.length - 1) {
            newmagicinput += magicArray[i];
        } else {
            newmagicinput += magicArray[i] + "\n";
        }
    }
    document.getElementById("magic-input").value = newmagicinput;
}

function reverseLines() {
    var magicinput = document.getElementById("magic-input").value;
    var magicArray = magicinput.split("\n");
    var newmagicinput = "";
    magicArray.reverse();
    for (var i = 0; i < magicArray.length; i++) {
        if (i == magicArray.length - 1) {
            newmagicinput += magicArray[i];
        } else {
            newmagicinput += magicArray[i] + "\n";
        }
    }
    document.getElementById("magic-input").value = newmagicinput;
}

function stripBlank() {
    var magicinput = document.getElementById("magic-input").value;
    var magicArray = magicinput.split("\n");
    var newmagicinput = "";
    var newmagicarray = []
    magicArray.forEach((magicline) => {
        if (magicline === "") {
            return
        }
        newmagicinput += magicline.trim() + "\n";
    })
    document.getElementById("magic-input").value = newmagicinput;
}

function addLineNo() {
    var magicinput = document.getElementById("magic-input").value;
    var magicArray = magicinput.split("\n");
    var newmagicinput = "";
    for (var i = 0; i < magicArray.length; i++) {
        if (i == magicArray.length - 1) {
            newmagicinput += (i + 1) + ") " + magicArray[i];
        } else {
            newmagicinput += (i + 1) + ") " + magicArray[i] + "\n";
        }
    }
    document.getElementById("magic-input").value = newmagicinput;
}

function shuffleLines() {
    var magicinput = document.getElementById("magic-input").value;
    var magicArray = magicinput.split("\n");
    var newmagicinput = "";
    magicArray.sort(function (a, b) {
        return 0.5 - Math.random()
    });
    for (var i = 0; i < magicArray.length; i++) {
        if (i == magicArray.length - 1) {
            newmagicinput += magicArray[i];
        } else {
            newmagicinput += magicArray[i] + "\n";
        }
    }
    document.getElementById("magic-input").value = newmagicinput;
}

const calculateArray = [];
