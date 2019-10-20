const zlib = require('zlib');
const gzip = zlib.createUnzip();
const fs = require('fs');
const inp = fs.createReadStream('myfile.txt.gz');
const out = fs.createWriteStream('myfile.txt');
inp.pipe(gzip).pipe(out)