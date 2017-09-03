// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");



MongoClient.connect("mongodb://localhost/TodoApp", (err, db) => {
    if(err) {
        return console.log("Unable to connect to database server. Error: " + err);
    }
    console.log("Connected to MongoDB server");
    
    // db.collection("Todos").insertOne({
    //     text: "Eat lunch",
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log("Unable to instert todo", err);
    //     }
        
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection("Users").insertOne({
        name: "Josh",
        age: 19
    }, (err, result) => {
        if(err) {
            return console.log(err);
        }
        
        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    
    
    db.close();
});