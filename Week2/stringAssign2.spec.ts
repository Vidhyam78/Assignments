//Code to get the lenght of the last word
function stringAssign (s)
{
    /*trim to remove the additional spcases and split to get two words and 
    then lenght of the last word [2-1] and 1 is the last word. */
   const words = s.trim().split(" ");
   return words[words.length -1].length;
}

console.log(stringAssign("Hello World"))

//Same as above function, just the argument is different.
function stringAssign1 (s)
{
   const words = s.trim().split(" ");
   return words[words.length -1].length;
}

console.log(stringAssign(" fly me to the moon "))

//Verify if the arguments provided is an anagram or not..

function stringAnagram (sample1, sample2){
    sample1 = sample1.toLowerCase();
    sample2 = sample2.toLowerCase();
//if the characterlenght does not match it is NOT an anagram else continue
    if (sample1.lenght!=sample2.lenght){return false}
//sort so that we get same value of both strings if its an anagram
    const str1sort = sample1.split('').sort().join()
    const str2sort = sample2.split('').sort().join()
    if (str1sort === str2sort){
        console.log("The words are anagram")
    }
    else
    {console.log("The words are NOT anagram")}
}
stringAnagram('listen','silent')