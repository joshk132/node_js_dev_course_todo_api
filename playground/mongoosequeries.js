const {ObjectID} = require("mongodb");
const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");

// var id = "59ab6c113b6e6c2b13fa81a811";
// var correctId = "59ab6c113b6e6c2b13fa81a8";

// if (!ObjectID.isValid(id)) {
//     console.log("ID not valid")
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log(todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log(todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo){
//         return console.log("ID not found!");
//     }
//     console.log(todo);
// }).catch((e) => console.log(e));

var id = "Put id here";

User.findById(id).then((user) => {
        if(!user) {
            return console.log("unable to find user");
        }
        
        console.log(JSON.stringify(user, undefined, 2));
        
    }, (e) => {
        console.log(e);
    }
);