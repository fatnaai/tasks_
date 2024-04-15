import { countCharacter, capitalizeFirstCharacterOfWords, reverseWord, reverseAllWords, replaceFirstOccurence, replaceAllOccurrences, encode, pigLatin, palindrome } from './messageMixer';

function displayMessage() {
  const str = "What is the color of the sky?";

  console.log(countCharacter(str, "t"));
  console.log(capitalizeFirstCharacterOfWords(str));
  console.log(reverseWord(str));
  console.log(reverseAllWords(str));
  console.log(replaceFirstOccurence(str, "sky", "water"));
  console.log(encode(str));
  console.log("Palindrome:", palindrome(str));
  console.log("Pig Latin:", pigLatin(str, '-'));
}

displayMessage();
