var mongoose = require('mongoose');

    
   module.exports = function(){
    /*
    var db = mongoose.connection;
    
        db.on('error',console.error);
        db.once('open', function(){
        console.log('Conectado ao MongoDB');  
    
        })
    */
        var db = mongoose.connect('mongodb://localhost/testeFilmes');
        return db;
        

   } 
