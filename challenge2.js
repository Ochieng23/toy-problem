function strCount(str) {
    if (str.length === 0) {
      return {};
    }
    const charCount = {};
    str.split('').forEach((char) => {
      charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    });
    return charCount;
  }
  strCount('abracadabra')