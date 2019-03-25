/*
Given a list of strings, return the count of the number of
strings where the string length is 2 or more and the first
and last chars of the string are the same.

['abc', 'aa', 'bb'] yields 2
*/
export function matchEnds(words) {
  return words.filter( str => str.length > 1 && str[0] === str.slice(-1) ).length;
}

/*
Given an array of numbers, return new array where
first element is diffrence between maximum and minimum of passed array
last element is sum of minimum and maximum
and passed array in center
[1, 2, 3] yields [2, 1, 2, 3, 4]
[5, 2, 14] yields [12, 5, 2, 14, 19]
*/
export function addFirstAndLast(numbers) {
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);

  const res = numbers;
  res.unshift( max - min );
  res.push( max + min );

  return res;
}

/*
Given a list of strings, return a list with the strings
in sorted order, except group all the strings that begin with 'x' first.
e.g. ['mix', 'xyz', 'apple', 'xanadu', 'aardvark'] yields
['xanadu', 'xyz', 'aardvark', 'apple', 'mix']
Hint: this can be done by making 2 lists and sorting each of them
before combining them.
*/
export function xLetterFirst(words) {
  const wordsWithX = []
  const otherWords = [];

  words.forEach(word => {
    if (word[0] === 'x') {
      wordsWithX.push(word);
    } else {
      otherWords.push(word);
    }
  });

  return wordsWithX.sort().concat(otherWords.sort());
}

/*
Given a list of non-empty arrays, return a list sorted in increasing
order by the last element in each tuple.
e.g. [[1, 7], [1, 3], [3, 4, 5], [2, 2]] yields
[[2, 2], [1, 3], [3, 4, 5], [1, 7]]
*/
export function sortByLast(nestedArrays) {
  return nestedArrays.sort( (a, b) => a[a.length - 1] - b[b.length - 1] );
}
