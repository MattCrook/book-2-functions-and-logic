// Overly Excited

let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

function addExcitement(arr) {
  let result = " ";
  for ( let i = 0; i < arr.length; i++) {
    let word = arr[i];
    result += ' ' + word;
    console.log(result);
  }
}
addExcitement(sentence);

// Some Words more exciting than Others
 /*
            If the current word's place (not index) in the array
            is evenly divisible by 3, add an exclamation point
            to the end of the word and then concatenate it to
            `buildMeUp`.

            Otherwise, just concatenate the word itself.
         */
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

function addExcitement (theWordArray) {
    let buildMeUp = " ";
      for (let i = 0; i < theWordArray.length; i++) {
        let word = theWordArray[i];
        let place = i + 1;
      if (place % 3 === 0) {
        word = word + '!';
      }
        buildMeUp += ' ' + word;
        console.log(buildMeUp);
 	}
}
addExcitement(sentence);


// Add a new argument to the function so that a developer can specify which character should be displayed instead of it always being an exclamation point.
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

function addExcitement (theWordArray, punc) {
    let buildMeUp = " ";
      for (let i = 0; i < theWordArray.length; i++) {
        let word = theWordArray[i];
        let place = i + 1;
      if (place % 3 === 0) {
        word = `word ${punc}`
      }
        buildMeUp += ' ' + word;
        console.log(buildMeUp);
 	}
}
addExcitement(sentence, '?');

// Add a new argument to the function so that a developer can specify how many times the special character should be added.
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

function addExcitement (theWordArray, punc, num) {
    let buildMeUp = " ";
      for (let i = 0; i < theWordArray.length; i++) {
        let word = theWordArray[i];
        let place = i + 1;
        let number = punc.repeat(num);
      if (place % 3 === 0) {
        word = `${word}${punc}${number}`
      }
        buildMeUp += ' ' + word;
        console.log(buildMeUp);
 	}
}
addExcitement(sentence, '*', 4)
