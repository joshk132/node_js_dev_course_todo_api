// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");



MongoClient.connect("mongodb://localhost/TodoApp", (err, db) => {
    if(err) {
        return console.log("Unable to connect to database server. Error: " + err);
    }
    console.log("Connected to MongoDB server");
    
    
    // deleteMany
    // db.collection("Todos").deleteMany({text: "Eat lunch"}).then((result) => {
    //     console.log(result);
    // });
    
    //deleteOne
    // db.collection("Todos").deleteOne({text: "Eat lunch"}).then((result) => {
    //     console.log(result);
    // });
    
    //findOneAndDelete
    // db.collection("Todos").findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });
    
    db.collection("Users").deleteMany({name: "Josh Kirby"});
    
    db.collection("Users").findOneAndDelete({
        _id: new Object("Pass in ID here")})
        .then((result) => {
            console.log(JSON.stringify(result, undefined, 2));
        });
    
    // db.close();
});