const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + "/dist/erintuitive-mentalist"));

app.listen(process.env.PORT || 9200);

app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname + "/dist/erintuitive-mentalist/index.html"));
});

console.log("console listening!");