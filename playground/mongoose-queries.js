const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '592305e9b8dd5804105d0a3711';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

User.findById('58fd712a68f4b4b417e2eb93').then((user) =>{
  if (!user) {
    return console.log('Unable to find user');
  }

  console.log('User',user);
}, (e) =>{
  console.log(e);
});
