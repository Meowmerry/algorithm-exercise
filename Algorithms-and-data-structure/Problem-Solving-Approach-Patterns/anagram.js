function validAnagram(first, second) {
  if (first.length !== second.length) return false;

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  console.log(lookup)
  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
console.log(validAnagram('anagrams', 'nagaramm'))

function validAnagram1(first, second) {
  first = first.split('').sort().join('')
  second = second.split('').sort().join('')
  if (first === second) return true;
  else return false;
}
console.log(validAnagram1('anagrams', 'nagaramm'))
console.log(validAnagram1('aaz', 'zza'))
console.log(validAnagram1('qwerty', 'qeywrt'))

function validAnagram2(first, second) {
  if (first.length !== second.length) return false;
  const lookup = {};
  for (let i = 0; i < first.length; i += 1) {
    const letter = first[i];
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  for (let i = 0; i < second.length; i += 1) {
    const letter = second[i];
    if (!lookup[letter]) return false;
    else lookup[letter] -= 1;
  }
  return true;
}
console.log(validAnagram2('anagrams', 'nagaramm'))
console.log(validAnagram2('aaz', 'zaa'))
console.log(validAnagram2('qwerty', 'qeywrt'))