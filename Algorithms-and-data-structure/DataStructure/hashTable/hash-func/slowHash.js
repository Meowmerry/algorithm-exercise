function slowHash(key) {
    for (let i = 0; i < 10000; i++){
        console.log(`everyday I'm hashing`);
    }
    return key[0].charCodeAt(0)
}
console.log(slowHash('hello')) // 104