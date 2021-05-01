// this will work in IE 10, 11 and Safari/Chrome/Firefox/Edge
// add ES6 poly-fill for the Promise, if needed (or rewrite to use a callback)

let fetchStyle = function(url) {
  return new Promise((resolve, reject) => {
    let link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.onload = function() { resolve(); };
    link.href = url;

    let headScript = document.querySelector('script');
    headScript.parentNode.insertBefore(link, headScript);
  });
};