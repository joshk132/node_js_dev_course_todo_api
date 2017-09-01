// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");



MongoClient.connect("mongodb://localhost/TodoApp", (err, db) => {
    if(err) {
        return console.log("Unable to connect to database server. Error: " + err);
    }
    console.log("Connected to MongoDB server");
    
    
    // db.collection("Todos").find({
    //     _id: new ObjectID("59a86a7b6a9e901341df8fe4")
    //     }).toArray().then((docs) => {
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log(err);
    // });
    
    // db.collection("Todos").find({completed: false}).count().then((count) => {
    //     console.log(`Todos: ${count}`);
        
    // }, (err) => {
    //     console.log(err);
    // });
    
   db.collection("Users").find({age: 20}).toArray().then((docs) => {
      console.log(JSON.stringify(docs, undefined, 2)); 
   });
    
    
    
    // db.close();
});