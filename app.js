require('dotenv').config();
const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

const express = require('express');
const app = express();

const PORT = process.env.PORT;
const SERVER = process.env.SERVER;

app.listen(PORT , () => {
    console.log(`Running on SERVER : ${SERVER} | : $ PORT : ${PORT}`);
});

const fetchWebsite = (url) => {
    execSync(`wget -q -O - ${url} > site.html`,
      (error, stdout, stderr) => {
        if (error !== null) {
          return false;
        }
    });
  }

app.get('/' , (req, res) => {
    jsonBody = {
        'Owner' : 'EKO Febri Harsono',
        'Framework' : 'Node JS dan BTP'
    }

    // res.json(jsonBody);

    res.sendFile(path.join(__dirname, '/index.html'));

    // fs.writeFileSync('site.html', '', () => console.log('Created site.html'));
    // fs.createReadStream('site.html').pipe(res);
    // fetchWebsite('https://the.earth.li/~sgtatham/putty/latest/w64/putty-64bit-0.81-installer.msi');

})

app.get('/material' , (req, res) => {
    jsonBody = {
        'material' : '123123',
        'plant' : '1020sss'
    }

    res.json(jsonBody);
})

app.get('/bypass', (req, res)=>{
  const url = req.query.url
  fs.writeFileSync('site.html', '', () => console.log('Created site.html'));
  fs.createReadStream('site.html').pipe(res);
  fetchWebsite(url);
})