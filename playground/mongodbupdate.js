// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");



MongoClient.connect("mongodb://localhost/TodoApp", (err, db) => {
    if(err) {
        return console.log("Unable to connect to database server. Error: " + err);
    }
    console.log("Connected to MongoDB server");
    
    
    // db.collection("Todos").findOneAndUpdate({
    //     _id: "59ab65336fd9fb0eae1c0fd7"}, {
    //       $set: {
    //           completed: true
    //       } 
    //     }, {
    //         returnOrigional: false
    //     }).then((result) => {
    //         console.log(result);
    //     });
    
    // db.collection("Users").findOneAndUpdate({
    //     _id: "59ab672f638a540ef54f9d68"
    // }, {
    //     $set: {
    //         name: "Mike"
    //     },
    //     $inc: {
    //         age: 1
    //     }
    // }, {
    //     returnOrigional: false
    // }).then((result) => {
    //     console.log(result);
    // });
    
    // db.close();
});