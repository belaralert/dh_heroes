const express = require('express');
const path = require('path');
const app = express();
const port = 3030;


app.use(express.static('public'));

app.listen(port, () => console.log())
app.get('/',(req,res) => res.sendFile(path.join(__dirname,'/views/home.html')))
app.get('/chanyeol',(req,res) => res.sendFile(path.join(__dirname,'/views/chanyeol.html')))
app.get('/baekhyun',(req,res) => res.sendFile(path.join(__dirname,'/views/baekhyun.html')))
app.get('/sehun',(req,res) => res.sendFile(path.join(__dirname,'/views/sehun.html')))
app.get('/suho',(req,res) => res.sendFile(path.join(__dirname,'/views/suho.html')))
app.get('/xiumin',(req,res) => res.sendFile(path.join(__dirname,'/views/xiumin.html')))
app.get('/chen',(req,res) => res.sendFile(path.join(__dirname,'/views/chen.html')))
app.get('/kai',(req,res) => res.sendFile(path.join(__dirname,'/views/kai.html')))
app.get('/kyungsoo',(req,res) => res.sendFile(path.join(__dirname,'/views/kyungsoo.html')))

