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
