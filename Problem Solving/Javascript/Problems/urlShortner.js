const alphabet =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

class Codec {
  constructor() {
    this.encodeMap = new Map();
    this.decodeMap = new Map();
    this.counter = 1;
  }

  encodeBase62(num) {
    let str = "";
    while (num > 0) {
      str = alphabet[num % 62] + str;
      num = Math.floor(num / 62);
    }
    return str || "0";
  }

  decodeBase62(str) {
    let num = 0;
    for (let char of str) {
      num = num * 62 + alphabet.indexOf(char);
    }
    return num;
  }

  encode(longUrl) {
    if (this.encodeMap.has(longUrl)) {
      const id = this.encodeMap.get(longUrl);
      return "http://tinyurl.com/" + this.encodeBase62(id);
    }

    const id = this.counter++;
    this.encodeMap.set(longUrl, id);
    this.decodeMap.set(id, longUrl);
    return "http://tinyurl.com/" + this.encodeBase62(id);
  }

  decode(shortUrl) {
    const shortKey = shortUrl.split("/").pop();
    const id = this.decodeBase62(shortKey);
    return this.decodeMap.get(id) || "";
  }
}

const c = new Codec();
const encodedStr = c.encode("https://leetcode.com/problems/design-tinyurl");
console.log(encodedStr);
console.log(c.decode(encodedStr));
