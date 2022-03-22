const request = require('request');
const fs = require('fs');
let bookCode = ''; 
let lastPage = 336;
for (let page = 1; page <= lastPage; page++) {
    let paddedPage = page.toString().padStart(3, '0');
    let tempUrl = `http://www.abcd.co.kr/${bookCode}/${paddedPage}.jpg`;
    request({
        url: tempUrl,
        method: 'GET',
        headers: {
            'User-Agent': 'Chrome/99.0.4844.51'
        }
    }).pipe(fs.createWriteStream(`./Test/${paddedPage}.jpg`));
};