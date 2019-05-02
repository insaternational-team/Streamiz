// Serveur Web
var express = require('express');

var serveur = express();
serveur.get('/',function(req,res){
  res.setHeader('Content-Type','text/html'); // envoie d'un code HTML
  res.status(200).send('<h1>Futur Site de Streaming</h1>')
});
// Lancement du Serveur
serveur.listen(8080,function() {
  console.log("Serveur en écoute");
});
