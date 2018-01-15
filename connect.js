var mongoose = require('mongoose');

    
    var db = mongoose.connection;

    db.on('error',console.error);
    db.once('open', function(){
    console.log('Conectado ao MongoDB');  

    })

    mongoose.connect('mongodb://localhost/test');
 
    var movieSchema = new mongoose.Schema({
        
            title:{type: String},
            rating:String,
            realeaseYear:Number,
            hasCreditCookie: Boolean
        })
        
        var Movie = mongoose.model('Movie', movieSchema);

        var thor = new Movie({
            title:'thor',
            rating:'pg-13',
            realeaseYear:'2011',
            hasCreditCookie: true
        })

        thor.save(function(err,thor){
            if(err) return console.error(err)
            console.dir(thor);
        })

