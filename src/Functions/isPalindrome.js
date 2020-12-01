const reverseString = (str) => {
  let newString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString.toLowerCase();
};

const cleanString = (str) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return str
    .toLowerCase()
    .split('')
    .map((item) => {
      return !alphabet.includes(item) ? item.replace(item, '') : item;
    })
    .join('');
};

const isPalindrome = (str) => {
  const cleanStr = cleanString(str);
  return cleanStr !== '' ? cleanStr === reverseString(cleanStr) : false;
};

export default isPalindrome;
