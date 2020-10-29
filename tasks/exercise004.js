// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigLatin(str){
    //split string by space or punctuation into array
    let strArray= str.split(/\s|\b/);

    //create new output array
    let newWords = [];

    //loop over each strArray element, if the first character of each strArray element is a letter, put on the end of the word and add 'ay' to it. If it is not a letter, add the curent element to the last element in newWords array  
    for (var i = 0; i < strArray.length; i++) {
        strArray[i][0].match(/[a-z]/i) ? newWords.push(strArray[i].slice(1)+ strArray[i].charAt(0)+ "ay") : newWords[newWords.length-1] = newWords[newWords.length-1] + strArray[i];
      }

    //output the array with the words joined back together into a sentence
    return newWords.join(' ');
}

module.exports = {
    pigLatin
};