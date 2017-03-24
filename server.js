var express = require('expess')
var app = express();
var bodyParser = require('body-parser')
var http = require("http");


var contact = [
{
    id:1,
    name:'julia',
    number:'0634259945'
},
{
    id:2,
    name:'tom',
    number:'0735546862'
}    
];
var currentId=2;

var PORT = procces.env.PORT || 3000;

app.use(express.static(_dirname));
app.use(bodyParser.json());

app.get('/product', function(req, res) {
res.send({ products:contacts });
}

app.post('/product', function(res, req) {
    var productName = req.body.name;
    currentId++;

    products.push({
      id:idName,
      name:productName  
    });
res.send('successfully created product!');
});

app.get('/product', function(res, req) {
res.send({products:pdf_files})
});

app.post('/product', function(res, req) {
    var productName = req.body.name;
    curretId++;

    products.push({
        id:currentId,
        name:productName
    });
    res.send('successfully created product');
    
app.listen(PORT,function() {
    console.log('Server listen '+ PORT);
});