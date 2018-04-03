console.log(words);

var ouput = document.getElementById("output");
var input = document.getElementById("input");
var outputTwo = document.getElementById("outputTwo");

function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}

document.getElementById("findButton").onclick = function () {
    var typedText = input.value;
    input.value = "";

    var newValue = alphabetize(typedText);
    const anagrams = [];
    for (var i = 0; i < words.length; i++) {
        var currentWord = words[i];
        var newWord = alphabetize(currentWord);
        if (newValue == newWord) {
            anagrams.push(currentWord);
        }
    }
        output.textContent = anagrams.join(" ");
}

// create a function that compairs the output of anagrams, and then store them into an array, the compair to have only
// 5 or more words //
const dictionaryOne = {};
const dictionaryTwo = {};
for(var x = 0; x < words.length; x++) {
    var currentWord = words[x];
    var sortedWord = alphabetize(currentWord);
    if(sortedWord in dictionaryOne){
        dictionaryOne[sortedWord].push(currentWord);

    }else {
        dictionaryOne[sortedWord] = [currentWord]
    }
    
}
for(var j in dictionaryOne) {
    if(dictionaryOne[j].length >= 5) {
        dictionaryTwo[j] = dictionaryOne[j];
    }
    outputTwo.textContent = JSON.stringify(dictionaryTwo); 
}   





