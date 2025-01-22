function analyzeSentence() {
  let sentence = prompt("Enter a sentence ending with a period ('.'):") || "";

  let length = 0;
  let wordCount = 0;
  let vowelCount = 0;

  let previousChar = " ";

  for (let i = 0; i < sentence.length; i++) {
    let currentChar = sentence[i];

    if (currentChar === ".") {
      break;
    }

    length++;

    if ("aeiouAEIOU".includes(currentChar)) {
      vowelCount++;
    }

    if (currentChar === " " && previousChar !== " ") {
      wordCount++;
    }

    previousChar = currentChar;
  }

  if (previousChar !== " " && length > 0) {
    wordCount++;
  }

  console.log("Length of the sentence (chars before '.'): " + length);
  console.log("Number of words: " + wordCount);
  console.log("Number of vowels: " + vowelCount);
}
