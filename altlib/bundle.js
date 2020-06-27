(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={}
},{}],2:[function(require,module,exports){
var altlib = require('./alts.json');

function addalt(){
    var username = document.forms["new"]["usernamenew"].value;
    var token = document.forms["new"]["tokennew"].value;

    if(!altlib[username]){
        altlib[username] = token

        fs.writeFile('./alts.json', JSON.stringify(altlib), (err) => {
            if (err) console.log('[altlib] ' + err)
        });
    };
}
},{"./alts.json":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImFsdHMuanNvbiIsImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIm1vZHVsZS5leHBvcnRzPXt9IiwidmFyIGFsdGxpYiA9IHJlcXVpcmUoJy4vYWx0cy5qc29uJyk7XG5cbmZ1bmN0aW9uIGFkZGFsdCgpe1xuICAgIHZhciB1c2VybmFtZSA9IGRvY3VtZW50LmZvcm1zW1wibmV3XCJdW1widXNlcm5hbWVuZXdcIl0udmFsdWU7XG4gICAgdmFyIHRva2VuID0gZG9jdW1lbnQuZm9ybXNbXCJuZXdcIl1bXCJ0b2tlbm5ld1wiXS52YWx1ZTtcblxuICAgIGlmKCFhbHRsaWJbdXNlcm5hbWVdKXtcbiAgICAgICAgYWx0bGliW3VzZXJuYW1lXSA9IHRva2VuXG5cbiAgICAgICAgZnMud3JpdGVGaWxlKCcuL2FsdHMuanNvbicsIEpTT04uc3RyaW5naWZ5KGFsdGxpYiksIChlcnIpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIGNvbnNvbGUubG9nKCdbYWx0bGliXSAnICsgZXJyKVxuICAgICAgICB9KTtcbiAgICB9O1xufSJdfQ==
