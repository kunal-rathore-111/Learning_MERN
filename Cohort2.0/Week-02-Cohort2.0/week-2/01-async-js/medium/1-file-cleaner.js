/* ## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
``` */

const fs = require("fs");
function reaD() {
    return new Promise(function (resolve) {
        fs.readFile('a.txt', 'utf-8', function (err, data) {
            resolve(data);
        });
    });
}

function writE(data) {
    return new Promise(function (resolve) {
        let temp = data.trim().replace(/\s+/g, ' ');
        fs.writeFile('a.txt', temp, function (err) {
            resolve('done');
        });
    });

}

reaD().then(function (data) { writE(data).then(function (data) { console.log(data) }) });