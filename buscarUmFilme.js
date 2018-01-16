//connect = require('./connect')()
Movies = require('./app')


Movies.find(function(err,movies){
    if (err) return console.error(err);
    console.dir(movies)
})
