var connect = require('./connect')();


var movieSchema = new connect.Schema({
    
        title:{type: String},
        rating:String,
        realeaseYear:Number,
        hasCreditCookie: Boolean
    })
    
    var Movie = connect.model('filmes', movieSchema);

    var filmes = new Movie({
        title:'O bostao',
        rating:'pg-25',
        realeaseYear:'2018',
        hasCreditCookie: true
    })

    filmes.save(function(err,filmes){
        if(err) return console.error(err)
        console.dir(filmes);
    })

    module.exports = Movie;