const express = require('express'); 

const app = express(); 

app.use((req, res, next ) => {
    console.log('Requete Reçu');
    next(); 
});

app.use ((req, res, next ) => { 

    res.status(201); 
    next(); 
})


app.use((req, res, next ) => {
    res.json({message: ' la requete est bien reçu'}); 
    next(); 
}) ;  

app.use((req, res )=> {
console.log('la réponse est envoyé avec succée');

});

module.exports = app; 

