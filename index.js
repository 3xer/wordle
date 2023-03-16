


export default function wordle(input, answer) {
  const outArray = [];

  if (input.length == 5) {

    // loop to find if any letters match
    for (let i = 0; i < 5; i++) {

      //if answer includes a letter from the input
      if (answer.includes(input.charAt(i))) {

        if (answer.charAt(i) == input.charAt(i)) {
          console.log('Letter ' + answer.charAt(i) +' is correct at ' + i)
          const match = {
            letter: input.charAt(i),
            result: "correct",
          };

          if(outArray.includes(match.letter)){
            console.log('think dubble letter')
          }
          outArray.push(match);
        } 
        
        else {
          console.log('bokstav:' + input.charAt(i) + ' finns ' + i)
          const match = {
            letter: input.charAt(i),
            result: "misplaced",
          };
          if(outArray.includes(match.letter)){
            console.log('think dubble letter')
          }
          outArray.push(match);
          
        }
        
      }
    }
  }
  for (let i = 0; i < outArray.length; i++) {


    if(outArray[i].letter == outArray[i]){
        console.log(outArray)
    }
  }
    console.log(outArray)
    return outArray;
}
