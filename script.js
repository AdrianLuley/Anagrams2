console.log(words);

var ouput = document.getElementById("output");
var input = document.getElementById("input");

function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}

document.getElementById("findButton").onclick = function () {
    var typedText = input.value;
    input.value = "";

    var newValue = alphabetize(typedText);
    const anagrams = [];
    for (var i = 0; i < words.length; i++){
        
        var currentWord = words[i];
        var newWord = alphabetize(currentWord);
        if ( newValue == newWord){
            anagrams.push(currentWord);

        }

    } 
    output.textContent = anagrams.join(" ");
}