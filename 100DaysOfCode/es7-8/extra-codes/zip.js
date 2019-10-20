const zlib = require('zlib');
const gzip = zlib.createGzip();
const fs = require('fs');
const inp = fs.createReadStream('myfile.txt');
const out = fs.createWriteStream('myfile.txt.gz');
inp.pipe(gzip).pipe(out)