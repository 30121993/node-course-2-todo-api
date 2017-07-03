const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) =>{
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '5959c866e85000a61908fcb7'}).then((todo)=>{
//
// });

Todo.findByIdAndRemove('5959c7c8e85000a61908fca0').then((todo) =>{
  console.log(todo);
});
