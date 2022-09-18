let express = require('express');
let app = express()
let mongoose = require('mongoose')
let bodyParser = require('body-parser')
console.log(mongoose)

app.use(bodyParser.urlencoded({extended: true}))

mongoose.connect("mongodb+srv://negus:Lamentin13@mongodbtest.ur9qw.mongodb.net/adnaWeb",{ useUnifiedTopology: true })

const noteShema = {
    title : String,
    content :String
}

app.get("/",function(req,res){
     res.sendFile(__dirname + '/mailcatch/mailCatcher.html')
})


// app post



app.listen(3001,function(){
    console.log("server is run")
})