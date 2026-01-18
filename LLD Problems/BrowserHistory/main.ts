import BrowserHistory from "./browser";

const browser = new BrowserHistory("leetcode.com");
console.log(browser.visit("google.com"));
console.log(browser.visit("facebook.com"));
console.log(browser.back(1)); // returns 'google.com'
console.log(browser.back(1)); // returns 'leetcode.com'
console.log(browser.visit("instagram.com"));
console.log(browser.visit("instagram.com"));
console.log(browser.back(1)); // returns 'google.com'
console.log(browser.forward(1)); // returns 'google.com'
