
////////////////////////////////////Daily Challenge: Words In The Stars


// Prompt the user for several words (separated by commas).
// Put the words into an array.
// Console.log the words one per line, in a rectangular frame as seen below.
// Check out the Hints and Requirements below.
// For example, if the user gives you:
// Hello, World, in, a, frame
// you will transform it to : ["Hello", "World", "in", "a", "frame"]
// that will get displayed as:

// stars and words


// Hint
// The number of stars that wraps the sentence, must depend on the length of the longest word




 let words= prompt("Your words separated by commas, Pless");
 let arrWords= words.split(","); // put in array
 let wordLength=0;
 arrWords.forEach((i) => {
     wordLength=Math.max(i.length,wordLength); //check what is the longest word
  });
  let star="*".repeat(wordLength+4)+"\n";
  arrWords.forEach(i => {
      star+="* "+i+" ".repeat(wordLength-i.length)+" *\n";
  })
  star+="*".repeat(wordLength+4);
  console.log (star)


