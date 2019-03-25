/*
collect array's element to object with first letters as keys
and sorted words array as a value

Example:
['test', 'foo', 'bar', 'farm', 'trust', 'ham', 'harm'] -> {
  't': ['test', 'trust'],
  'f': ['farm', 'foo'],
  'b': ['bar'],
  'h': ['ham', 'harm'],
}
*/
export function collectByFirstLetter(...words) {
  const res = {};

  words.forEach(word => {
    const letter = word[0];

    if (res[letter]) {
      res[letter].push(word);
    } else {
      res[letter] = [word];
    }
  });

  Object.keys(res).forEach(key => {
    res[key].sort();
  });

  return res;
}

/*
Write a function which receives object and list of keys
and returns object with only keys passed in arguments.
unknown keys are ignored

Example:
({name: 'John', age: 42}, 'name') yields {name: 'John'}
*/
export function only(obj, ...keys) {
  const res = {};
  const objKeys = Object.keys(obj);

  keys.forEach(key => {
    if (objKeys.includes(key)) {
      res[key] = obj[key];
    }
  });

  return res;
}

/*
Function counts words in given text.
returns an object with word as key and it's frequence as value

Note: It should ignore punctuation marks and uppercase symbols

Example:
'Awesome! Does it work? It should works' yields
{
  awesome: 1,
  test: 1,
  it: 2,
  should: 1,
  works: 1,
}
'' yields {}
*/
export function wordsCount(text) {
  if (text === '') return {};

  const words = text.toLowerCase().split(' ').map(v => v.replace(/\W/gi, ''));
  const res = {};

  words.forEach(v => {
    if (res[v]) {
      res[v] += 1;
    } else {
      res[v] = 1;
    }
  });

  return res;
}

/*
Write a function's body which create an object for user representation
It should contains method for password validation:
password is weak if it contains only lowercase letters or only uppercase

Example:
const user = createUser('root', 'topsecret')
user.login === 'root' // true
user.password === 'topsecret' // true
user.isWeakPassword() === true
user.password = 'topSecreT'
user.isWeakPassword() === false
*/

export function createUser(login, password) {
  return {
    login,
    password,
    isWeakPassword: function() {
      return this.password.match(/[a-z]/g).length === 0 || this.password.match(/[a-z]/g).length === this.password.length;
    },
  }
}
