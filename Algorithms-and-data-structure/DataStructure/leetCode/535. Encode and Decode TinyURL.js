// https://leetcode.com/problems/encode-and-decode-tinyurl/

/* 
(1) initalize variable empty object
*/

var obj = {};
var encode = function (longUrl) {
    let origin = "http://tinyurl.com/",
        randomString = Math.random().toString(36).substring(5);

    obj[randomString] = longUrl;
    return origin += randomString;

};

var decode = function (shortUrl) {
    let getKey = shortUrl.split("/");
    return obj[getKey[getKey.length - 1]];
};






let store = ""
let code = ""
let resUrl = ""

var encode = function (longUrl) {
    store = longUrl
    code = makeid()
    resUrl = "http://tinyurl.com/" + code
    return resUrl
};


var decode = function (shortUrl) {
    return store;
};

// Generates random id for tinyurl
function makeid() {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 6; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

