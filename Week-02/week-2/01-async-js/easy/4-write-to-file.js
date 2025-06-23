/* ## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks. */

const fs = require("fs");

function writeFile() {

    return new Promise(function (resolve) {
        fs.writeFile('a.txt', 'hi meow meow', function (err) {
            if (err) {
                resolve('error');
            }
            else {
                resolve('done');

            }
        })
    })
}

writeFile().then(function (data) { console.log(data) });